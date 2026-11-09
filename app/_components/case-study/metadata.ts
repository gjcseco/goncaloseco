import type { Metadata } from 'next'
import type { CaseStudyContent } from '@/lib/content/case-study.types'

const PATHS = { pt: '/oosfera', en: '/en/oosfera' } as const

export function caseStudyMetadata(content: CaseStudyContent): Metadata {
  const { title, description, ogLocale } = content.meta
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: PATHS[content.locale],
      languages: {
        'pt-PT': PATHS.pt,
        'en-GB': PATHS.en,
        'x-default': PATHS.pt,
      },
    },
    openGraph: {
      title,
      description,
      url: PATHS[content.locale],
      type: 'article',
      locale: ogLocale,
      alternateLocale: content.locale === 'pt' ? ['en_GB'] : ['pt_PT'],
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}
