import type { Locale } from '@/lib/i18n'

/** Section ids are shared by both languages so links like /en#projetos keep working. */
export type SectionId =
  | 'sobre'
  | 'competencias'
  | 'experiencia'
  | 'projetos'
  | 'certificacoes'
  | 'contacto'

export interface SectionHeading {
  eyebrow: string
  title: string
  intro?: string
}

export interface NavLink {
  id: SectionId
  label: string
}

export type AboutStatId = 'experience' | 'certifications' | 'commits'
export type SkillCategoryId = 'frontend' | 'backend' | 'integration' | 'cloud' | 'testing' | 'management'
export type ExperienceGroupId = 'dev' | 'qa'
export type ProjectStoryId = 'two-factor' | 'security-rules' | 'backups' | 'authorization'
export type CertificationId = 'mulesoft' | 'azure' | 'istqb'
export type ContactItemId = 'email' | 'linkedin' | 'github' | 'location'

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export interface ProjectStory {
  id: ProjectStoryId
  title: string
  problem: string
  decision: string
  result: string
}

export interface Dictionary {
  locale: Locale
  meta: {
    title: string
    description: string
    /** Open Graph locale, e.g. pt_PT or en_GB. */
    ogLocale: string
  }
  /** Path to a CV PDF in public/ (e.g. '/cv-goncalo-seco.pdf'). The button only renders when set. */
  cvUrl: string | null
  /** Path to a profile photo in public/. Falls back to the "GS" initials when null. */
  photoUrl: string | null
  nav: {
    homeHref: string
    homeLabel: string
    links: NavLink[]
    switchHref: string
    switchLabel: string
    switchAriaLabel: string
    switchLang: Locale
    openMenu: string
    closeMenu: string
    ariaLabel: string
  }
  hero: {
    eyebrow: string
    tagline: string
    projectCta: string
    cvCta: string
    scrollHint: string
  }
  about: SectionHeading & {
    name: string
    photoAlt: string
    paragraphs: string[]
    stats: { id: AboutStatId; value: string; label: string }[]
  }
  skills: SectionHeading & {
    categories: { id: SkillCategoryId; title: string; items: string[] }[]
  }
  experience: SectionHeading & {
    groups: { id: ExperienceGroupId; title: string; entries: ExperienceEntry[] }[]
  }
  projects: SectionHeading & {
    oosfera: {
      name: string
      subtitle: string
      context: string
      storyLabels: { problem: string; decision: string; result: string }
      stories: ProjectStory[]
      metrics: { value: string; label: string }[]
      metricsCaption: string
      stackLabel: string
      stack: string[]
      caseStudyLabel: string
      caseStudyHref: string
      siteLabel: string
      siteHref: string
    }
  }
  certifications: SectionHeading & {
    certs: { id: CertificationId; name: string; level: string; date: string }[]
    educationTitle: string
    education: { title: string; subtitle: string; institution: string; year: string }[]
    languagesTitle: string
    languages: string
  }
  contact: SectionHeading & {
    items: { id: ContactItemId; label: string; value: string; href: string | null }[]
  }
  footer: {
    rights: string
  }
  links: {
    linkedin: string
    github: string
  }
}
