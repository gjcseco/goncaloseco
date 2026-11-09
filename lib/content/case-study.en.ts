import type { CaseStudyContent } from './case-study.types'

// Figures verified against the Oosfera repository on 9 November 2026.

export const caseStudyEn: CaseStudyContent = {
  locale: 'en',
  meta: {
    title: 'Oosfera - case study | Gonçalo Seco',
    description:
      'How I built the management platform for Oosfera, a dance and wellness school in Portugal, on my own: architecture, mandatory 2FA, relationship-based authorisation, security rules in CI and backups with a rehearsed restore.',
    ogLocale: 'en_GB',
  },
  nav: {
    back: { label: 'Back to portfolio', href: '/en#projetos' },
    switchLocale: {
      label: 'PT',
      href: '/oosfera',
      hrefLang: 'pt',
      ariaLabel: 'Ler este estudo de caso em português',
    },
    navAriaLabel: 'Case study navigation',
  },
  hero: {
    eyebrow: 'Case study',
    title: 'Oosfera: the management platform for a dance school',
    summary: [
      'Oosfera is a dance and wellness school in Soure, Portugal. It needed a single place to manage students, classes, timetables, parents and guardians, and payments, with separate access for staff and for families.',
      'I was the sole developer, from the data model to deployment. The platform is live at oosfera.pt and still evolving. This page covers the hard decisions, what went wrong and what I learnt.',
    ],
    facts: [
      { label: 'Role', value: 'Sole developer (data, backend, frontend, deployment)' },
      { label: 'Period', value: 'Feb 2026 - present' },
      { label: 'Client', value: 'Dance and wellness school, Soure' },
      { label: 'Live', value: 'oosfera.pt', href: 'https://oosfera.pt' },
    ],
  },
  sectionLabels: {
    problem: 'Problem',
    decision: 'Decision',
    result: 'Result',
    symptom: 'Symptom',
    cause: 'Cause',
    fix: 'Fix',
    lesson: 'Lesson',
  },
  numbers: {
    label: 'Numbers',
    title: 'The project in numbers',
    items: [
      { value: '1,744', label: 'commits', note: '14 Feb - 7 Nov 2026' },
      { value: '156', label: 'Prisma migrations', note: 'including the baseline' },
      { value: '108', label: 'Prisma models' },
      { value: '166', label: 'pages', note: 'App Router' },
      { value: '17', label: 'security rules in CI', note: 'on every push and pull request' },
      { value: '20/20', label: 'regressions caught', note: "by the rules' self-test" },
      { value: '29', label: 'Playwright E2E tests', note: 'run locally, not yet in CI' },
      { value: '~194k', label: 'lines of TypeScript', note: '~1,000 files' },
    ],
    footnote: 'Counted in the repository itself on 9 November 2026.',
  },
  architecture: {
    label: 'Architecture',
    title: 'How the pieces fit together',
    intro: [
      'A Next.js application on Vercel, with the database on TiDB Cloud (MySQL-compatible) and Prisma in between. Authentication is home-grown: sessions in a table, bcrypt and TOTP, no auth library.',
      'The most important piece is not a service. It is the authorisation layer in src/lib/autorizacao, which runs on the server in every server action and every page. proxy.ts reads unsigned cookies, so it is only a UX gate, never a security boundary.',
    ],
    diagram: {
      title: 'Oosfera platform architecture',
      description:
        'Families, students and staff use the site in the browser or as a PWA. Requests reach a Next.js 16 application on Vercel, region fra1, over HTTPS, with Server Components plus server actions and route handlers. Both go through the authorisation layer in src/lib/autorizacao, which decides by person and by relationship. From there they go to Prisma 7 and to the TiDB Cloud database, which has a production instance and a preview instance. The application also uses Vercel Blob for PDFs, separate per environment, Cloudinary for photos, with different folders for production and preview, and Resend over SMTP for email. Separately, GitHub Actions runs 17 security rules with a self-test on every push, takes a weekly encrypted database backup that is sent by email, and runs gitleaks and Dependabot.',
      users: 'Families, students, staff',
      usersSub: 'browser and PWA',
      https: 'HTTPS',
      vercel: 'Next.js 16 on Vercel',
      vercelSub: 'region fra1',
      serverComponents: 'Server Components',
      serverComponentsSub: '166 pages',
      handlers: 'Server actions',
      handlersSub: 'and 21 route handlers',
      authz: 'Authorisation layer',
      authzSub: 'src/lib/autorizacao (person + relationship)',
      prisma: 'Prisma 7',
      prismaSub: '108 models, 156 migrations',
      database: 'TiDB Cloud (MySQL)',
      prod: 'production',
      preview: 'preview',
      sideServices: 'Side services',
      blob: 'Vercel Blob',
      blobSub: 'PDFs, one per environment',
      cloudinary: 'Cloudinary',
      cloudinarySub: 'photos: oosfera/ and oosfera_prev/',
      email: 'Resend (SMTP)',
      emailSub: 'email via nodemailer',
      actions: 'GitHub Actions',
      actionsLines: [
        '17 security rules + self-test',
        'Weekly encrypted backup, by email',
        'gitleaks and Dependabot',
      ],
      backupEdge: 'backup',
      legend:
        'Solid arrows: application requests. Dashed: scheduled jobs on GitHub Actions, outside any user request.',
    },
    notes: [
      'Production and preview have separate databases and separate Vercel Blob stores. Cloudinary is a single account, so the boundary lives in code: oosfera/* in production, oosfera_prev/* in preview, and the delete function refuses ids from the other environment. Only one file is allowed to import the SDK.',
      'Production only changes by merging into main, never through the Vercel "Promote" button.',
      'The site is also a PWA, with a manifest, a service worker and an offline page.',
    ],
  },
  erd: {
    title: 'Data model (core)',
    caption:
      'ER diagram generated from the Prisma schema, without touching the database. It is a July 2026 snapshot of the 41 core tables (people, students, classes, lessons, monthly fees). Table names are in Portuguese. The schema now has 108 models.',
    alt: "Entity-relationship diagram with 41 core Oosfera tables and the foreign keys between them.",
    openFull: 'Open full size',
    scrollHint: 'Scroll sideways to see the whole diagram.',
  },
  decisions: {
    label: 'Decisions',
    title: '4 hard decisions',
    intro: 'Each one started with a concrete problem. Same format every time: problem, decision, result.',
    items: [
      {
        title: 'Mandatory 2FA for administrators',
        problem:
          'An admin account can see data about minors, contact details and payments. One stolen password was enough for all of it.',
        decision:
          'Since 29 August 2026, admin and superadmin accounts must use TOTP. Without the second factor the session is empty and only opens the setup page. The secret is encrypted with AES-256-GCM in its own table. Each code works once, because the last time step used is stored. Attempts are limited to 5 per session, 15 per IP in 10 minutes and 10 per hour, and there are 8 recovery codes stored as SHA-256 hashes, single-use and audited.',
        result:
          'Along the way I found a bypass: switching account skipped the second factor, because accounts belonging to the same person share the password hash. The second factor is now required for the effective account, including on a switch. The flow has 5 E2E tests, and a CI rule locks down the totp_* tables and the encryption key.',
        tags: ['TOTP', 'AES-256-GCM', 'rate limiting', 'audit log'],
      },
      {
        title: 'Authorisation by relationship, not just by role',
        problem:
          'At a dance school the same person can be a student and the mother of a student. Plain RBAC forces you to pick one role: either half the information disappears or the account gets too much access.',
        decision:
          'The role (there are 5) only says which side someone is on: staff or client. What decides what is shown is the relationship stored in the database. The functions in src/lib/autorizacao take the pessoa_id of whoever is acting and check the link. For example, deciding a child\'s platform access is only allowed for an admin or a guardian with an active link, never for the student themselves.',
        result:
          'A mother who is both a student and a guardian sees both contexts combined, without duplicate accounts. In the project, any new role === "encarregado" check is treated as a bug. Real authorisation lives in the server actions and in every page.tsx, not in the proxy.',
        tags: ['ReBAC', 'server actions', 'Prisma'],
      },
      {
        title: 'Security regression rules in CI, with a self-test',
        problem:
          'A security audit in July 2026 found issues that took a day to fix and could come back in any later commit without anyone noticing.',
        decision:
          'Every finding became a rule in a checker that runs on GitHub Actions on every push and pull request. It started with 9 rules on 29 July and now has 17. Before checking the code, the workflow runs a self-test: it re-injects 20 vulnerable patterns one at a time, confirms the checker fails, and restores the file.',
        result:
          '20 out of 20 regressions caught. The self-test has already found a real bug in the regex of one rule, which would otherwise have let through what it was meant to block. It is my QA background applied to my own code: test the test as well.',
        tags: ['GitHub Actions', 'QA', 'gitleaks', 'Dependabot'],
      },
      {
        title: 'Backups that are known to work',
        problem: 'A backup that has never been restored is a hope, not a backup.',
        decision:
          'Every Sunday at 04:00 UTC a workflow dumps the production database, encrypts it with AES-256-GCM and sends it by email. The script refuses to send a file that is not encrypted. The artefact is kept on GitHub for 90 days, with up to 3 attempts to ride out network failures.',
        result:
          'On 15 September 2026 I rehearsed a restore into a scratch database: 96 tables and 6,363 rows restored. The comparison showed 94 identical tables, and the other two only differed by writes made after the dump. The rehearsal is recorded in the project documentation, along with what the backup does not cover: photos, which live in Cloudinary and Blob.',
        tags: ['GitHub Actions', 'AES-256-GCM', 'rehearsed restore'],
      },
    ],
    bonus: {
      title: 'One more: the finance area lock',
      text: 'The finance area asks everyone for a second password, superadmin included. An unlock lasts 30 minutes and the window is checked in SQL, with NOW() - INTERVAL, not against the browser clock. The guard sits in every page.tsx rather than in the layout, because a layout guard does not run again on client-side navigation and the window never expired. A CI rule and 6 E2E tests stop that from coming back.',
    },
  },
  incident: {
    label: 'What went wrong',
    title: 'The domain change that logged everyone out',
    intro:
      'On 23 October 2026 I switched the primary domain from the www subdomain to the bare domain, oosfera.pt, in the early hours, from the Vercel dashboard. It looked like a configuration change. It was a site-wide logout.',
    timeline: [
      {
        when: '23 Oct',
        text: 'Session cookies were host-only, with no Domain attribute. Cookies set on www are not sent to the apex, so everyone landed on the login screen. The sessions were still intact in the database, but no browser was sending them.',
      },
      {
        when: '24 Oct',
        text: 'A cookie bridge in proxy.ts. I removed the Vercel redirect on www so the proxy runs first. Anyone reaching www with a session gets the 4 cookies wrapped in a short-lived cookie (Domain=oosfera.pt, 5 minutes), and the apex unwraps them into host-only cookies.',
      },
      {
        when: '24 Oct',
        text: 'Anyone arriving straight at the apex without a session takes a single detour through www before seeing the login form, to pick up the session left there. A cookie marks the detour, and a ?ponte=1 parameter stops loops if the browser refuses cookies.',
      },
    ],
    lessonTitle: 'Lesson',
    lesson:
      'A domain change is a migration, and part of the state lives in users\' browsers, out of my reach. It is now written into the project documentation: changing the primary domain again without a bridge like this repeats the site-wide logout.',
  },
  debugging: {
    label: 'Debugging',
    title: 'Debugging stories',
    intro:
      'The platform has a games area for students. The games in these stories are original, built from scratch in React, SVG and canvas, with each student\'s ballerina as the character. They are played mostly on phones, which is where the most interesting problems showed up.',
    stories: [
      {
        title: 'The game that heated up phones',
        context: 'Connect: join pairs of the same colour with pipes, against a timer bar.',
        symptom:
          'A two-minute game made phones warm. Measured in Chrome with a mobile viewport: 68 ms of main-thread time per second with the game idle, and 60 layouts per second.',
        cause:
          'The game component kept the remaining time in state and called setState ten times a second. Every tick re-rendered the whole board, dozens of SVGs with shadows, just so the bar could shrink. And the bar animated its width, which forces a layout pass.',
        fix: 'The game now only stores the deadline, a fixed point in time. The clock lives inside the bar, which only notifies the game twice per round: for the final seconds and at the end. The bar is always full width and slides with transform, which the compositor handles without style or layout work. In Flappy I took the idea further: movement goes straight to the DOM via transform and React only draws at 20 fps.',
        snippet: {
          caption: 'Simplified sketch of the idea, not the production code.',
          code: `// Before: the whole game re-rendered 10 times a second
setRemaining(deadline - Date.now())

// After: the game only knows the deadline
<TimerBar deadline={deadline} />

// and inside the bar, transform instead of width
style={{ transform: \`translateX(\${pct - 100}%)\` }}`,
        },
        lesson:
          'State that changes ten times a second belongs in the smallest possible component, and whatever animates should be transform or opacity.',
      },
      {
        title: "The iPhone's phantom pointerleave",
        context: 'In Connect, you draw a pipe by dragging your finger across the board.',
        symptom:
          'On iPhone, in Safari and in the installed PWA, the colour dropped on the second move and the pipe never left the ballerina. Android and desktop were fine.',
        cause:
          'The board captures the pointer with setPointerCapture. In iPhone WebKit the first move still goes to the cell that was touched and the second goes to the board. On that change of target, WebKit sends the cell a pointerout with no relatedTarget. React reads that as "the pointer left the window" and fires pointerleave on every ancestor, including the board, which ended the gesture.',
        fix: 'With the pointer captured, a gesture now ends only on pointerup or pointercancel, never on pointerleave. I later applied the same rule to Blast, a block puzzle with dragging.',
        snippet: {
          caption: 'Simplified sketch of the idea, not the production code.',
          code: `<div
  onPointerDown={(e) => e.currentTarget.setPointerCapture(e.pointerId)}
  onPointerMove={drag}
  onPointerUp={endGesture}
  onPointerCancel={endGesture}
  // no onPointerLeave: with capture it is unreliable on WebKit
/>`,
        },
        lesson:
          'With pointer capture, a gesture ends on pointerup or pointercancel. And gestures need testing on a real iPhone: Chrome device mode is not WebKit.',
      },
    ],
  },
  stack: {
    label: 'Stack',
    title: 'Technologies',
    groups: [
      {
        name: 'Frontend',
        items: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'PWA'],
      },
      {
        name: 'Backend and data',
        items: [
          'Server actions and route handlers',
          'Prisma 7',
          'TiDB Cloud (MySQL)',
          'Home-grown auth (sessions, bcrypt, TOTP)',
        ],
      },
      {
        name: 'Infrastructure',
        items: ['Vercel (fra1)', 'Vercel Blob', 'Cloudinary', 'Resend (SMTP)'],
      },
      {
        name: 'Quality and security',
        items: ['GitHub Actions', 'Playwright', 'gitleaks', 'Dependabot'],
      },
    ],
  },
  cta: {
    title: 'See Oosfera live',
    text: 'The public site is at oosfera.pt. The private area needs an account, so it is described here instead.',
    visit: { label: 'Visit site', href: 'https://oosfera.pt' },
    back: { label: 'Back to portfolio', href: '/en#projetos' },
  },
}
