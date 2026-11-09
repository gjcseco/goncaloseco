import type { Metadata } from 'next'
import { getDictionary, type Locale } from '@/lib/i18n'

// Provisional domain: set NEXT_PUBLIC_SITE_URL on Vercel (or update the fallback) once the final domain is chosen.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goncaloseco.pt'

/** Home page path of each locale. */
export const HOME_PATH: Record<Locale, string> = { pt: '/', en: '/en' }

const HOME_LANGUAGES = {
  'pt-PT': HOME_PATH.pt,
  'en-GB': HOME_PATH.en,
  'x-default': HOME_PATH.pt,
}

/**
 * Root metadata for every page of a locale (home page and case study).
 * Pages with a translated counterpart other than the home page should override `alternates`.
 */
export function buildRootMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale)

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: '%s - Gonçalo Seco',
    },
    description: meta.description,
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/icon-192.png',
    },
    alternates: {
      languages: HOME_LANGUAGES,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
      type: 'website',
      locale: meta.ogLocale,
      alternateLocale: locale === 'pt' ? ['en_GB'] : ['pt_PT'],
    },
  }
}

/** Page-level metadata of the home page of a locale (adds the canonical URL). */
export function buildHomeMetadata(locale: Locale): Metadata {
  return {
    alternates: {
      canonical: HOME_PATH[locale],
      languages: HOME_LANGUAGES,
    },
  }
}
