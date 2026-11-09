'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Dictionary } from '@/lib/content/types'

export function Navbar({ nav }: { nav: Dictionary['nav'] }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  const languageSwitch = (
    <a
      href={nav.switchHref}
      hrefLang={nav.switchLang}
      lang={nav.switchLang}
      aria-label={nav.switchAriaLabel}
      title={nav.switchAriaLabel}
      className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
    >
      {nav.switchLabel}
    </a>
  )

  return (
    <nav
      aria-label={nav.ariaLabel}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href={nav.homeHref}
            aria-label={nav.homeLabel}
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Gonçalo<span className="text-primary">.</span>Seco
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {nav.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <span className="ml-2">{languageSwitch}</span>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            {languageSwitch}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={mobileOpen ? nav.closeMenu : nav.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
      >
        <div className="px-4 py-4 space-y-1">
          {nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className="block w-full px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
