/**
 * Content shape for the Oosfera case study (/oosfera and /en/oosfera).
 * Both dictionaries implement this type, so a missing translation is a type error.
 */

/** Kept local so this page does not depend on lib/i18n.ts; it matches `Locale` there. */
export type CaseStudyLocale = 'pt' | 'en'

export interface CaseStudyLink {
  label: string
  href: string
}

export interface CaseStudyFact {
  label: string
  value: string
  href?: string
}

export interface CaseStudyNumber {
  value: string
  label: string
  /** Short qualifier shown under the label, e.g. "run locally, not in CI". */
  note?: string
}

export interface ArchitectureLabels {
  /** <title> of the SVG. */
  title: string
  /** <desc> of the SVG, a plain-language reading of the diagram. */
  description: string
  users: string
  usersSub: string
  https: string
  vercel: string
  vercelSub: string
  serverComponents: string
  serverComponentsSub: string
  handlers: string
  handlersSub: string
  authz: string
  authzSub: string
  prisma: string
  prismaSub: string
  database: string
  prod: string
  preview: string
  sideServices: string
  blob: string
  blobSub: string
  cloudinary: string
  cloudinarySub: string
  email: string
  emailSub: string
  actions: string
  actionsLines: [string, string, string]
  backupEdge: string
  legend: string
}

export interface CaseStudyDecision {
  title: string
  problem: string
  decision: string
  result: string
  tags: string[]
}

export interface CaseStudyTimelineItem {
  when: string
  text: string
}

export interface CaseStudySnippet {
  /** Accessible caption, e.g. "Simplified sketch, not the production code". */
  caption: string
  code: string
}

export interface CaseStudyStory {
  title: string
  context: string
  symptom: string
  cause: string
  fix: string
  snippet?: CaseStudySnippet
  lesson: string
}

export interface CaseStudyStackGroup {
  name: string
  items: string[]
}

export interface CaseStudyContent {
  locale: CaseStudyLocale
  meta: {
    title: string
    description: string
    ogLocale: string
  }
  nav: {
    back: CaseStudyLink
    switchLocale: CaseStudyLink & { hrefLang: CaseStudyLocale; ariaLabel: string }
    navAriaLabel: string
  }
  hero: {
    eyebrow: string
    title: string
    summary: string[]
    facts: CaseStudyFact[]
  }
  sectionLabels: {
    problem: string
    decision: string
    result: string
    symptom: string
    cause: string
    fix: string
    lesson: string
  }
  numbers: {
    label: string
    title: string
    items: CaseStudyNumber[]
    footnote: string
  }
  architecture: {
    label: string
    title: string
    intro: string[]
    diagram: ArchitectureLabels
    notes: string[]
  }
  erd: {
    title: string
    caption: string
    alt: string
    openFull: string
    scrollHint: string
  }
  decisions: {
    label: string
    title: string
    intro: string
    items: CaseStudyDecision[]
    bonus: {
      title: string
      text: string
    }
  }
  incident: {
    label: string
    title: string
    intro: string
    timeline: CaseStudyTimelineItem[]
    lessonTitle: string
    lesson: string
  }
  debugging: {
    label: string
    title: string
    intro: string
    stories: CaseStudyStory[]
  }
  stack: {
    label: string
    title: string
    groups: CaseStudyStackGroup[]
  }
  cta: {
    title: string
    text: string
    visit: CaseStudyLink
    back: CaseStudyLink
  }
}
