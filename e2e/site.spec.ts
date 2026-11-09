import { expect, test, type Page } from '@playwright/test'

const HOME_ROUTES = [
  { path: '/', lang: 'pt', switchTo: '/en' },
  { path: '/en', lang: 'en', switchTo: '/' },
] as const

const CASE_STUDY_ROUTES = ['/oosfera', '/en/oosfera'] as const

const ALL_ROUTES = [...HOME_ROUTES.map((r) => r.path), ...CASE_STUDY_ROUTES]

const SECTION_IDS = [
  'sobre',
  'competencias',
  'experiencia',
  'projetos',
  'certificacoes',
  'contacto',
] as const

/** Collects console errors and uncaught exceptions while the page is used. */
function trackErrors(page: Page): string[] {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`console: ${msg.text()}`)
  })
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`))
  return errors
}

for (const route of ALL_ROUTES) {
  test(`${route} loads without console or page errors`, async ({ page }) => {
    const errors = trackErrors(page)
    const response = await page.goto(route)

    expect(response?.status()).toBe(200)
    await page.waitForLoadState('networkidle')
    expect(errors).toEqual([])
  })

  test(`${route} opens external links safely (rel="noopener")`, async ({ page }) => {
    await page.goto(route)
    const blankLinks = page.locator('a[target="_blank"]')

    for (const link of await blankLinks.all()) {
      const href = await link.getAttribute('href')
      const rel = (await link.getAttribute('rel')) ?? ''
      expect(rel.split(/\s+/), `link to ${href}`).toContain('noopener')
    }
  })
}

for (const { path, lang, switchTo } of HOME_ROUTES) {
  test.describe(`home page ${path}`, () => {
    test(`declares <html lang="${lang}">`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('html')).toHaveAttribute('lang', lang)
    })

    test('renders every section', async ({ page }) => {
      await page.goto(path)
      for (const id of SECTION_IDS) {
        await expect(page.locator(`#${id}`), `section #${id}`).toHaveCount(1)
      }
    })

    test('navbar anchors point to existing sections', async ({ page }) => {
      await page.goto(path)
      const anchors = page.locator('nav a[href^="#"]')
      const hrefs = await anchors.evaluateAll((els) => els.map((el) => el.getAttribute('href')!))

      expect(hrefs.length, 'navbar should have section links').toBeGreaterThan(0)
      for (const href of hrefs) {
        await expect(page.locator(href), `target of ${href}`).toHaveCount(1)
      }
    })

    test('clicking a navbar link scrolls to its section', async ({ page, isMobile }) => {
      test.skip(isMobile, 'on mobile the links live behind a menu toggle')
      await page.goto(path)

      await page.locator('nav a[href="#projetos"]').first().click()

      await expect(page).toHaveURL(/#projetos$/)
      await expect(page.locator('#projetos')).toBeInViewport()
    })

    test(`has a language switch to ${switchTo}`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator(`a[href="${switchTo}"]`).first()).toBeAttached()
    })

    test('does not expose a phone number in the contact section', async ({ page }) => {
      await page.goto(path)
      const contact = page.locator('#contacto')

      await expect(contact).toHaveCount(1)
      await expect(contact.locator('a[href^="tel:"]')).toHaveCount(0)
    })
  })
}

for (const route of CASE_STUDY_ROUTES) {
  test(`case study ${route} has a visible heading`, async ({ page }) => {
    await page.goto(route)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('h1')).toBeVisible()
  })
}

test('hero content is visible without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL })
  const page = await context.newPage()
  await page.goto('/')

  const heading = page.locator('h1').first()
  await expect(heading).toBeVisible()

  // Playwright treats opacity: 0 as "visible", so check it explicitly,
  // including ancestors (animation wrappers often hide the parent).
  const effectiveOpacity = await heading.evaluate((el) => {
    let opacity = 1
    for (let node: Element | null = el; node; node = node.parentElement) {
      opacity *= Number(getComputedStyle(node).opacity)
    }
    return opacity
  })
  expect(effectiveOpacity).toBeGreaterThan(0.9)

  await context.close()
})
