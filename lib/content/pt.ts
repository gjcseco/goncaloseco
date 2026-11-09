import type { Dictionary } from './types'

const LINKEDIN = 'https://www.linkedin.com/in/gjcseco'
const GITHUB = 'https://github.com/gjcseco'

export const pt: Dictionary = {
  locale: 'pt',
  meta: {
    title: 'Gonçalo Seco - Full-Stack Developer',
    description:
      'Portfólio de Gonçalo Seco, Full-Stack Developer com percurso em QA e integração de sistemas. Soure, Coimbra.',
    ogLocale: 'pt_PT',
  },
  // Para ativar o botão, põe o PDF em public/ e indica o caminho, por exemplo '/cv-goncalo-seco.pdf'.
  cvUrl: null,
  // Para trocar as iniciais por uma fotografia, põe a imagem em public/ e indica o caminho.
  photoUrl: null,
  nav: {
    homeHref: '#top',
    homeLabel: 'Gonçalo Seco, voltar ao início',
    links: [
      { id: 'sobre', label: 'Sobre' },
      { id: 'competencias', label: 'Competências' },
      { id: 'experiencia', label: 'Experiência' },
      { id: 'projetos', label: 'Projetos' },
      { id: 'certificacoes', label: 'Certificações' },
      { id: 'contacto', label: 'Contacto' },
    ],
    switchHref: '/en',
    switchLabel: 'EN',
    switchAriaLabel: 'Read in English',
    switchLang: 'en',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    ariaLabel: 'Navegação principal',
  },
  hero: {
    eyebrow: 'Full-Stack Developer & Integração de Sistemas',
    tagline:
      'Código com qualidade, testabilidade e atenção aos casos-limite desde o primeiro dia. De QA a Full-Stack: construo plataformas web completas e mantenho-as em produção.',
    projectCta: 'Ver projeto',
    cvCta: 'Descarregar CV',
    scrollHint: 'Descer para a secção Sobre',
  },
  about: {
    eyebrow: 'Sobre mim',
    title: 'Gonçalo Seco',
    name: 'Gonçalo Seco',
    photoAlt: 'Fotografia de Gonçalo Seco',
    paragraphs: [
      'Licenciado em Engenharia Informática pelo ISEC. Comecei no desenvolvimento, com APIs de integração em MuleSoft para a Stellantis, e passei mais de dois anos em Quality Assurance: testes de API, funcionais e E2E para clientes como a Sonae e a Caixa Geral de Depósitos, incluindo aplicações baseadas em IA (o IA Note, da Sonae).',
      'Hoje sou o único programador da plataforma de gestão da Oosfera, uma escola de dança e bem-estar, em produção. Levo para o código o que aprendi em QA: testes automáticos, regras de segurança em CI e casos-limite pensados desde o início.',
    ],
    stats: [
      { id: 'experience', value: '4+', label: 'Anos de experiência' },
      { id: 'certifications', value: '3', label: 'Certificações' },
      { id: 'commits', value: '1 700+', label: 'Commits na Oosfera' },
    ],
  },
  skills: {
    eyebrow: 'Competências',
    title: 'Stack tecnológica',
    categories: [
      {
        id: 'frontend',
        title: 'Frontend',
        items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
      },
      {
        id: 'backend',
        title: 'Backend e dados',
        items: [
          'Node.js',
          'Prisma',
          'TiDB (compatível com MySQL)',
          'PostgreSQL',
          'APIs REST',
          'Autorização por relação (ReBAC)',
        ],
      },
      {
        id: 'integration',
        title: 'Integração',
        items: ['MuleSoft', 'RabbitMQ', 'Postman', 'Swagger'],
      },
      {
        id: 'cloud',
        title: 'Cloud e DevOps',
        items: ['Vercel', 'GitHub Actions', 'Microsoft Azure', 'GitLab', 'CI/CD'],
      },
      {
        id: 'testing',
        title: 'Testes',
        items: ['Playwright (E2E)', 'Cypress (E2E)', 'Testes de API', 'Automação', 'Testes manuais'],
      },
      {
        id: 'management',
        title: 'Gestão',
        items: ['Jira', 'ClickUp', 'Confluence', 'Scrum/Agile'],
      },
    ],
  },
  experience: {
    eyebrow: 'Experiência',
    title: 'Percurso profissional',
    groups: [
      {
        id: 'dev',
        title: 'Desenvolvimento',
        entries: [
          {
            role: 'Full-Stack Developer',
            company: 'Oosfera (oosfera.pt) - Projeto independente',
            period: 'Fev 2026 - Presente',
            location: 'Soure, Portugal - Remoto',
            bullets: [
              'Único programador da plataforma de gestão de uma escola de dança e bem-estar, em produção: arquitetura, modelo de dados, frontend, backend e deployment.',
              '1 744 commits e 156 migrações de base de dados em cerca de 9 meses.',
              '2FA TOTP obrigatório para administradores, com segredo cifrado, códigos de uso único e códigos de recuperação.',
              'Autorização por pessoa e por relação (ReBAC), em vez de decidir só pelo papel da conta.',
              '17 regras automáticas de regressão de segurança em CI (GitHub Actions), com auto-teste próprio.',
              'Backups semanais cifrados e automáticos, com o restauro ensaiado de ponta a ponta.',
            ],
          },
          {
            role: 'Junior Developer → MuleSoft Developer',
            company: 'The Loop Co. (Stellantis, via Deloitte)',
            period: 'Mai 2022 - Jul 2023',
            location: 'Coimbra, Portugal - Híbrido',
            bullets: [
              'Desenvolvimento de APIs de integração em MuleSoft no projeto Stellantis.',
              'Criação de documentação técnica.',
              'Certificação MuleSoft Developer Level 1 obtida durante o projeto.',
              'Onboarding técnico em Salesforce e Microsoft Azure.',
              'Formação em Scrum/Agile, aplicada em equipas multidisciplinares.',
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
            period: 'Ago 2023 - Dez 2025',
            location: 'Coimbra, Portugal - Vários projetos',
            bullets: [
              'Sonae (IA Note e ZU Appointment): testes de API, funcionais e exploratórios em aplicações baseadas em IA e de marcações veterinárias.',
              'Caixa Geral de Depósitos (via Critical Software): testes de limites de crédito e de integrações com RabbitMQ, APIs REST e PostgreSQL.',
              'LoopOS: testes manuais e automação E2E com Cypress; testes de regressão e de desempenho.',
              'Flexways: testes funcionais numa app Android nativa; criação de documentação de utilizador.',
              'Loop Future Website: testes funcionais, cross-browser e cross-device.',
            ],
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projetos',
    title: 'Projeto em destaque',
    oosfera: {
      name: 'Oosfera',
      subtitle: 'Plataforma de gestão de uma escola de dança e bem-estar',
      context:
        'Plataforma em produção em oosfera.pt, da qual sou o único programador, do modelo de dados ao deployment. Quatro decisões que mostram como trabalho:',
      storyLabels: { problem: 'Problema', decision: 'Decisão', result: 'Resultado' },
      stories: [
        {
          id: 'two-factor',
          title: '2FA feito a sério',
          problem:
            'As contas de administração dão acesso a dados pessoais e financeiros. Uma palavra-passe não chega.',
          decision:
            '2FA TOTP obrigatório para admins, com o segredo cifrado (AES-256-GCM), códigos de uso único, limites de tentativas e códigos de recuperação.',
          result:
            'Nenhuma conta de administração entra só com a palavra-passe, e o fluxo tem testes E2E em Playwright.',
        },
        {
          id: 'security-rules',
          title: 'Regras de segurança em CI',
          problem:
            'Uma auditoria de segurança encontrou padrões perigosos que podiam voltar ao código sem ninguém dar por isso.',
          decision:
            'Cada achado passou a ser uma regra automática que corre em cada push e pull request, com um auto-teste que reinjeta as vulnerabilidades e confirma que são apanhadas.',
          result:
            '17 regras de regressão de segurança. O auto-teste deteta 20 de 20 regressões injetadas e já apanhou um bug numa das próprias regras.',
        },
        {
          id: 'backups',
          title: 'Backups que se sabe que funcionam',
          problem: 'Um backup que nunca foi reposto é só uma esperança.',
          decision:
            'Dump semanal automático no GitHub Actions, cifrado com AES-256-GCM, enviado por email e guardado 90 dias.',
          result:
            'O restauro foi ensaiado de ponta a ponta: 96 tabelas e 6 363 linhas repostas e comparadas com a origem.',
        },
        {
          id: 'authorization',
          title: 'Autorização por relação',
          problem:
            'Na escola, a mesma pessoa pode ser aluna e encarregada de educação. Decidir só pelo papel da conta mostra contextos a mais ou a menos.',
          decision:
            'As permissões verificam a relação na base de dados, como um vínculo ativo entre encarregado e aluno, e não apenas o papel.',
          result:
            'Quem é encarregado e também aluno vê os dois contextos, cada um com as permissões certas.',
        },
      ],
      metrics: [
        { value: '1 744', label: 'commits' },
        { value: '156', label: 'migrações' },
        { value: '108', label: 'modelos de dados' },
        { value: '17', label: 'regras de segurança' },
      ],
      metricsCaption: 'Números do repositório, fevereiro a novembro de 2026',
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
      caseStudyLabel: 'Ler o estudo de caso',
      caseStudyHref: '/oosfera',
      siteLabel: 'Ver site',
      siteHref: 'https://oosfera.pt',
    },
  },
  certifications: {
    eyebrow: 'Certificações e formação',
    title: 'Qualificações',
    certs: [
      { id: 'mulesoft', name: 'MuleSoft Certified Developer', level: 'Level 1', date: 'Fev 2023' },
      { id: 'azure', name: 'Microsoft Azure Fundamentals', level: 'AZ-900', date: 'Jul 2022' },
      { id: 'istqb', name: 'ISTQB® Certified Tester', level: 'Foundation Level (CTFL)', date: 'Out 2025' },
    ],
    educationTitle: 'Formação académica',
    education: [
      {
        title: 'Licenciatura em Engenharia Informática',
        subtitle: 'Ramo de Sistemas de Informação',
        institution: 'ISEC - Instituto Superior de Engenharia de Coimbra',
        year: '2022',
      },
    ],
    languagesTitle: 'Línguas',
    languages: 'Português (nativo), Inglês (intermédio, em formação contínua)',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Vamos conversar',
    intro: 'Tem uma vaga ou um projeto em mente? Fale comigo por email ou pelo LinkedIn.',
    items: [
      { id: 'email', label: 'Email', value: 'goncaloseco@outlook.pt', href: 'mailto:goncaloseco@outlook.pt' },
      { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/gjcseco', href: LINKEDIN },
      { id: 'github', label: 'GitHub', value: 'github.com/gjcseco', href: GITHUB },
      { id: 'location', label: 'Localização', value: 'Soure, Coimbra', href: null },
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
