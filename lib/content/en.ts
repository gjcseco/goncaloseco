import type { Dictionary } from './types'

const LINKEDIN = 'https://www.linkedin.com/in/gjcseco'
const GITHUB = 'https://github.com/gjcseco'

export const en: Dictionary = {
  locale: 'en',
  meta: {
    title: 'Gonçalo Seco - Full-Stack Developer',
    description:
      'Portfolio of Gonçalo Seco, a full-stack developer with a background in QA and systems integration. Based in Coimbra, Portugal.',
    ogLocale: 'en_GB',
  },
  // To enable the button, put the PDF in public/ and set its path, e.g. '/cv-goncalo-seco-en.pdf'.
  cvUrl: null,
  // To replace the initials with a photo, put the image in public/ and set its path.
  photoUrl: null,
  nav: {
    homeHref: '#top',
    homeLabel: 'Gonçalo Seco, back to top',
    links: [
      { id: 'sobre', label: 'About' },
      { id: 'competencias', label: 'Skills' },
      { id: 'experiencia', label: 'Experience' },
      { id: 'projetos', label: 'Projects' },
      { id: 'certificacoes', label: 'Certifications' },
      { id: 'contacto', label: 'Contact' },
    ],
    switchHref: '/',
    switchLabel: 'PT',
    switchAriaLabel: 'Ler em português',
    switchLang: 'pt',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    ariaLabel: 'Main navigation',
  },
  hero: {
    eyebrow: 'Full-Stack Developer & Systems Integration',
    tagline:
      'Code built for quality, testability and edge cases from day one. From QA to full-stack: I build complete web platforms and keep them running in production.',
    projectCta: 'See the project',
    cvCta: 'Download CV',
    scrollHint: 'Scroll to the About section',
  },
  about: {
    eyebrow: 'About me',
    title: 'Gonçalo Seco',
    name: 'Gonçalo Seco',
    photoAlt: 'Photo of Gonçalo Seco',
    paragraphs: [
      "I hold a degree in Computer Engineering from ISEC (Coimbra). I started in development, building MuleSoft integration APIs for Stellantis, then spent over two years in Quality Assurance: API, functional and E2E testing for clients such as Sonae and Caixa Geral de Depósitos, including AI-based applications (Sonae's IA Note).",
      'Today I am the sole developer of the management platform for Oosfera, a dance and wellness school, which runs in production. I bring what I learnt in QA into the code: automated tests, security rules in CI and edge cases considered from the start.',
    ],
    stats: [
      { id: 'experience', value: '4+', label: 'Years of experience' },
      { id: 'certifications', value: '3', label: 'Certifications' },
      { id: 'commits', value: '1,700+', label: 'Commits on Oosfera' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tech stack',
    categories: [
      {
        id: 'frontend',
        title: 'Frontend',
        items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
      },
      {
        id: 'backend',
        title: 'Backend and data',
        items: [
          'Node.js',
          'Prisma',
          'TiDB (MySQL-compatible)',
          'PostgreSQL',
          'REST APIs',
          'Relationship-based authorisation (ReBAC)',
        ],
      },
      {
        id: 'integration',
        title: 'Integration',
        items: ['MuleSoft', 'RabbitMQ', 'Postman', 'Swagger'],
      },
      {
        id: 'cloud',
        title: 'Cloud and DevOps',
        items: ['Vercel', 'GitHub Actions', 'Microsoft Azure', 'GitLab', 'CI/CD'],
      },
      {
        id: 'testing',
        title: 'Testing',
        items: ['Playwright (E2E)', 'Cypress (E2E)', 'API testing', 'Test automation', 'Manual testing'],
      },
      {
        id: 'management',
        title: 'Ways of working',
        items: ['Jira', 'ClickUp', 'Confluence', 'Scrum/Agile'],
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Career',
    groups: [
      {
        id: 'dev',
        title: 'Development',
        entries: [
          {
            role: 'Full-Stack Developer',
            company: 'Oosfera (oosfera.pt) - Independent project',
            period: 'Feb 2026 - Present',
            location: 'Soure, Portugal - Remote',
            bullets: [
              'Sole developer of the management platform for a dance and wellness school, in production: architecture, data model, frontend, backend and deployment.',
              '1,744 commits and 156 database migrations in about 9 months.',
              'Mandatory TOTP 2FA for administrators, with an encrypted secret, single-use codes and recovery codes.',
              'Authorisation by person and relationship (ReBAC) rather than by account role alone.',
              '17 automated security regression rules in CI (GitHub Actions), with their own self-test.',
              'Automated, encrypted weekly backups, with the restore rehearsed end to end.',
            ],
          },
          {
            role: 'Junior Developer → MuleSoft Developer',
            company: 'The Loop Co. (Stellantis, via Deloitte)',
            period: 'May 2022 - Jul 2023',
            location: 'Coimbra, Portugal - Hybrid',
            bullets: [
              'Built MuleSoft integration APIs for the Stellantis project.',
              'Wrote technical documentation.',
              'Earned the MuleSoft Developer Level 1 certification during the project.',
              'Technical onboarding in Salesforce and Microsoft Azure.',
              'Scrum/Agile training, applied in cross-functional teams.',
            ],
          },
        ],
      },
      {
        id: 'qa',
        title: 'Quality Assurance',
        entries: [
          {
            role: 'QA Engineer / Analyst',
            company: 'The Loop Co.',
            period: 'Aug 2023 - Dec 2025',
            location: 'Coimbra, Portugal - Several projects',
            bullets: [
              'Sonae (IA Note and ZU Appointment): API, functional and exploratory testing of AI-based and veterinary booking applications.',
              'Caixa Geral de Depósitos (via Critical Software): testing of credit limits and of integrations with RabbitMQ, REST APIs and PostgreSQL.',
              'LoopOS: manual testing and E2E automation with Cypress; regression and performance testing.',
              'Flexways: functional testing of a native Android app; wrote user documentation.',
              'Loop Future Website: functional, cross-browser and cross-device testing.',
            ],
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Featured project',
    oosfera: {
      name: 'Oosfera',
      subtitle: 'Management platform for a dance and wellness school',
      context:
        'A platform running in production at oosfera.pt, where I am the sole developer, from the data model to deployment. Four decisions that show how I work:',
      storyLabels: { problem: 'Problem', decision: 'Decision', result: 'Result' },
      stories: [
        {
          id: 'two-factor',
          title: '2FA done properly',
          problem: 'Admin accounts give access to personal and financial data. A password is not enough.',
          decision:
            'Mandatory TOTP 2FA for admins, with the secret encrypted (AES-256-GCM), single-use codes, attempt limits and recovery codes.',
          result: 'No admin account gets in with a password alone, and the flow is covered by Playwright E2E tests.',
        },
        {
          id: 'security-rules',
          title: 'Security rules in CI',
          problem:
            'A security audit found dangerous patterns that could creep back into the code without anyone noticing.',
          decision:
            'Each finding became an automated rule that runs on every push and pull request, with a self-test that re-injects the vulnerabilities and checks they are caught.',
          result:
            '17 security regression rules. The self-test catches 20 out of 20 injected regressions and has already found a bug in one of the rules.',
        },
        {
          id: 'backups',
          title: 'Backups known to work',
          problem: 'A backup that has never been restored is just a hope.',
          decision:
            'Automated weekly dump on GitHub Actions, encrypted with AES-256-GCM, sent by email and kept for 90 days.',
          result:
            'The restore was rehearsed end to end: 96 tables and 6,363 rows restored and compared against the source.',
        },
        {
          id: 'authorization',
          title: 'Authorisation by relationship',
          problem:
            'At the school, the same person can be both a student and a guardian. Deciding by account role alone shows too much or too little.',
          decision:
            'Permissions check the relationship in the database, such as an active guardian-student link, not just the role.',
          result: 'A guardian who is also a student sees both contexts, each with the right permissions.',
        },
      ],
      metrics: [
        { value: '1,744', label: 'commits' },
        { value: '156', label: 'migrations' },
        { value: '108', label: 'data models' },
        { value: '17', label: 'security rules' },
      ],
      metricsCaption: 'Figures from the repository, February to November 2026',
      stackLabel: 'Stack',
      stack: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Prisma 7',
        'TiDB Cloud (MySQL)',
        'Vercel',
        'Tailwind CSS 4',
        'Playwright',
        'GitHub Actions',
      ],
      caseStudyLabel: 'Read the case study',
      caseStudyHref: '/en/oosfera',
      siteLabel: 'Visit site',
      siteHref: 'https://oosfera.pt',
    },
  },
  certifications: {
    eyebrow: 'Certifications and education',
    title: 'Qualifications',
    certs: [
      { id: 'mulesoft', name: 'MuleSoft Certified Developer', level: 'Level 1', date: 'Feb 2023' },
      { id: 'azure', name: 'Microsoft Azure Fundamentals', level: 'AZ-900', date: 'Jul 2022' },
      { id: 'istqb', name: 'ISTQB® Certified Tester', level: 'Foundation Level (CTFL)', date: 'Oct 2025' },
    ],
    educationTitle: 'Education',
    education: [
      {
        title: "Bachelor's degree in Computer Engineering",
        subtitle: 'Information Systems specialisation',
        institution: 'ISEC - Coimbra Institute of Engineering',
        year: '2022',
      },
    ],
    languagesTitle: 'Languages',
    languages: 'Portuguese (native), English (intermediate, ongoing training)',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    intro: 'Have a role or a project in mind? Get in touch by email or on LinkedIn.',
    items: [
      { id: 'email', label: 'Email', value: 'goncaloseco@outlook.pt', href: 'mailto:goncaloseco@outlook.pt' },
      { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/gjcseco', href: LINKEDIN },
      { id: 'github', label: 'GitHub', value: 'github.com/gjcseco', href: GITHUB },
      { id: 'location', label: 'Location', value: 'Soure, Coimbra, Portugal', href: null },
    ],
  },
  footer: {
    rights: 'Gonçalo Seco',
  },
  links: {
    linkedin: LINKEDIN,
    github: GITHUB,
  },
}
