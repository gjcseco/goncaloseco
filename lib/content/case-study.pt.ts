import type { CaseStudyContent } from './case-study.types'

// Números verificados no repositório da Oosfera a 9 de novembro de 2026.
// Espaço fino inquebrável como separador de milhares (norma portuguesa).
const NB = ' '

export const caseStudyPt: CaseStudyContent = {
  locale: 'pt',
  meta: {
    title: 'Oosfera - estudo de caso | Gonçalo Seco',
    description:
      'Como construí sozinho a plataforma de gestão da Oosfera, uma escola de dança e bem-estar em Soure: arquitetura, 2FA obrigatório, autorização por relação, regras de segurança em CI e backups com restauro ensaiado.',
    ogLocale: 'pt_PT',
  },
  nav: {
    back: { label: 'Voltar ao portfólio', href: '/#projetos' },
    switchLocale: {
      label: 'EN',
      href: '/en/oosfera',
      hrefLang: 'en',
      ariaLabel: 'Read this case study in English',
    },
    navAriaLabel: 'Navegação do estudo de caso',
  },
  hero: {
    eyebrow: 'Estudo de caso',
    title: 'Oosfera: a plataforma de gestão de uma escola de dança',
    summary: [
      'A Oosfera é uma escola de dança e bem-estar em Soure. Precisava de um só sítio para gerir alunos, turmas, horários, encarregados de educação e pagamentos, com acesso separado para a equipa e para as famílias.',
      'Fui o único programador, do modelo de dados ao deployment. A plataforma está em produção em oosfera.pt e continua a evoluir. Esta página conta as decisões difíceis, o que correu mal e o que aprendi.',
    ],
    facts: [
      { label: 'Papel', value: 'Único programador (dados, backend, frontend, deployment)' },
      { label: 'Período', value: 'Fev 2026 - presente' },
      { label: 'Cliente', value: 'Escola de dança e bem-estar, Soure' },
      { label: 'Em produção', value: 'oosfera.pt', href: 'https://oosfera.pt' },
    ],
  },
  sectionLabels: {
    problem: 'Problema',
    decision: 'Decisão',
    result: 'Resultado',
    symptom: 'Sintoma',
    cause: 'Causa',
    fix: 'Correção',
    lesson: 'Lição',
  },
  numbers: {
    label: 'Números',
    title: 'O projeto em números',
    items: [
      { value: `1${NB}744`, label: 'commits', note: '14 fev - 7 nov 2026' },
      { value: '156', label: 'migrações Prisma', note: 'incluindo a baseline' },
      { value: '108', label: 'modelos Prisma' },
      { value: '166', label: 'páginas', note: 'App Router' },
      { value: '17', label: 'regras de segurança em CI', note: 'em cada push e pull request' },
      { value: '20/20', label: 'regressões apanhadas', note: 'pelo auto-teste das regras' },
      { value: '29', label: 'testes E2E Playwright', note: 'correm localmente, ainda não em CI' },
      { value: `~194${NB}mil`, label: 'linhas de TypeScript', note: `~1${NB}000 ficheiros` },
    ],
    footnote: 'Contagens feitas no próprio repositório a 9 de novembro de 2026.',
  },
  architecture: {
    label: 'Arquitetura',
    title: 'Como as peças encaixam',
    intro: [
      'Uma aplicação Next.js na Vercel, com a base de dados em TiDB Cloud (compatível com MySQL) e o Prisma pelo meio. A autenticação é própria: sessões numa tabela, bcrypt e TOTP, sem biblioteca de auth.',
      'A peça mais importante não é um serviço. É a camada de autorização em src/lib/autorizacao, que corre no servidor em cada server action e em cada página. O proxy.ts lê cookies não assinadas e por isso só serve de portão de UX, nunca de segurança.',
    ],
    diagram: {
      title: 'Arquitetura da plataforma Oosfera',
      description:
        'Famílias, alunos e equipa usam o site no browser ou como PWA. Os pedidos chegam por HTTPS a uma aplicação Next.js 16 na Vercel, região fra1, com Server Components e server actions mais route handlers. Ambos passam pela camada de autorização em src/lib/autorizacao, que decide por pessoa e por relação. Daí seguem para o Prisma 7 e para a base de dados TiDB Cloud, que tem uma instância de produção e outra de preview. A aplicação usa ainda o Vercel Blob para PDFs, separado por ambiente, o Cloudinary para fotos, com pastas diferentes para produção e preview, e o Resend por SMTP para emails. À parte, o GitHub Actions corre 17 regras de segurança com auto-teste em cada push, faz um backup semanal cifrado da base de dados que é enviado por email, e corre o gitleaks e o Dependabot.',
      users: 'Famílias, alunos e equipa',
      usersSub: 'browser e PWA',
      https: 'HTTPS',
      vercel: 'Next.js 16 na Vercel',
      vercelSub: 'região fra1',
      serverComponents: 'Server Components',
      serverComponentsSub: '166 páginas',
      handlers: 'Server actions',
      handlersSub: 'e 21 route handlers',
      authz: 'Camada de autorização',
      authzSub: 'src/lib/autorizacao (pessoa + relação)',
      prisma: 'Prisma 7',
      prismaSub: '108 modelos, 156 migrações',
      database: 'TiDB Cloud (MySQL)',
      prod: 'produção',
      preview: 'preview',
      sideServices: 'Serviços à volta',
      blob: 'Vercel Blob',
      blobSub: 'PDFs, um por ambiente',
      cloudinary: 'Cloudinary',
      cloudinarySub: 'fotos: oosfera/ e oosfera_prev/',
      email: 'Resend (SMTP)',
      emailSub: 'emails via nodemailer',
      actions: 'GitHub Actions',
      actionsLines: [
        '17 regras de segurança + auto-teste',
        'Backup semanal cifrado, por email',
        'gitleaks e Dependabot',
      ],
      backupEdge: 'backup',
      legend:
        'Setas cheias: pedidos da aplicação. Tracejado: tarefas agendadas no GitHub Actions, fora de qualquer pedido de utilizador.',
    },
    notes: [
      'Produção e preview têm base de dados e Vercel Blob separados. O Cloudinary é uma conta só, por isso a fronteira está no código: oosfera/* em produção, oosfera_prev/* em preview, e a função de apagar recusa ids do outro ambiente. Só um ficheiro pode importar o SDK.',
      'A produção só muda por merge para main, nunca pelo botão "Promote" da Vercel.',
      'O site é também uma PWA, com manifest, service worker e página offline.',
    ],
  },
  erd: {
    title: 'Modelo de dados (núcleo)',
    caption:
      'Diagrama ER gerado a partir do schema Prisma, sem tocar na base de dados. É um retrato de julho de 2026 com as 41 tabelas do núcleo (pessoas, alunos, turmas, aulas, mensalidades). Hoje o schema tem 108 modelos.',
    alt: 'Diagrama entidade-relação com 41 tabelas do núcleo da Oosfera e as chaves estrangeiras entre elas.',
    openFull: 'Abrir em tamanho real',
    scrollHint: 'Deslize na horizontal para ver o diagrama todo.',
  },
  decisions: {
    label: 'Decisões',
    title: '4 decisões difíceis',
    intro: 'Cada uma começou com um problema concreto. O formato é sempre o mesmo: problema, decisão, resultado.',
    items: [
      {
        title: '2FA obrigatório para administradores',
        problem:
          'Uma conta de administrador vê dados de menores, contactos e pagamentos. Uma palavra-passe roubada chegava para tudo.',
        decision:
          'Desde 29 de agosto de 2026, admin e superadmin têm TOTP obrigatório. Sem o 2.º fator a sessão fica vazia e só abre a página de ativação. O segredo é cifrado com AES-256-GCM numa tabela própria. Cada código só serve uma vez, porque guardo o último passo usado. Há limites de 5 tentativas por sessão, 15 por IP em 10 minutos e 10 por hora, e 8 códigos de recuperação guardados com hash SHA-256, de uso único e auditados.',
        result:
          'Pelo caminho apareceu um contorno: trocar de conta saltava o 2.º fator, porque as contas da mesma pessoa partilham o hash da palavra-passe. Hoje o 2.º fator é pedido à conta efetiva, também na troca. O fluxo tem 5 testes E2E e uma regra de CI tranca as tabelas totp_* e a chave de cifra.',
        tags: ['TOTP', 'AES-256-GCM', 'rate limiting', 'auditoria'],
      },
      {
        title: 'Autorização por relação, não só por papel',
        problem:
          'Numa escola de dança a mesma pessoa pode ser aluna e mãe de uma aluna. Um RBAC simples obrigava a escolher um papel: ou escondia metade da informação, ou dava acesso a mais.',
        decision:
          'O papel (há 5) só diz o universo: equipa ou cliente. Quem decide o que se mostra é a relação guardada na base de dados. As funções em src/lib/autorizacao recebem o pessoa_id de quem age e verificam o vínculo. Por exemplo, decidir o acesso de um educando só é permitido a um admin ou a um encarregado com vínculo ativo, e nunca ao próprio aluno.',
        result:
          'Uma mãe que é aluna e encarregada vê os dois contextos somados, sem contas duplicadas. No projeto, qualquer verificação nova do tipo role === "encarregado" é tratada como bug. A autorização real está nas server actions e em cada page.tsx, não no proxy.',
        tags: ['ReBAC', 'server actions', 'Prisma'],
      },
      {
        title: 'Regras de regressão de segurança em CI, com auto-teste',
        problem:
          'Uma auditoria de segurança em julho de 2026 encontrou problemas que se corrigiam num dia e se podiam reintroduzir num commit qualquer, sem ninguém dar por isso.',
        decision:
          'Cada achado virou uma regra num verificador que corre no GitHub Actions em cada push e pull request. Começou com 9 regras a 29 de julho e hoje são 17. Antes de verificar o código, o workflow corre um auto-teste: reinjeta 20 padrões vulneráveis, um de cada vez, confirma que o verificador falha e repõe o ficheiro.',
        result:
          '20 de 20 regressões detetadas. O auto-teste já apanhou um bug real numa regex de uma das regras, que de outra forma deixaria passar o que devia bloquear. É o meu passado de QA aplicado ao meu próprio código: testar também o teste.',
        tags: ['GitHub Actions', 'QA', 'gitleaks', 'Dependabot'],
      },
      {
        title: 'Backups que se sabe que funcionam',
        problem: 'Um backup que nunca foi restaurado é uma esperança, não um backup.',
        decision:
          'Todos os domingos às 04:00 UTC, um workflow faz o dump da produção, cifra-o com AES-256-GCM e envia-o por email. O script recusa enviar um ficheiro que não esteja cifrado. O artefacto fica 90 dias no GitHub, com até 3 tentativas para aguentar falhas de rede.',
        result: `A 15 de setembro de 2026 ensaiei o restauro numa base de ensaio: 96 tabelas e 6${NB}363 linhas repostas. A comparação deu 94 tabelas idênticas, e as outras duas só diferiam em escritas feitas depois do dump. O ensaio está registado na documentação do projeto, tal como o que o backup não cobre: as fotos, que vivem no Cloudinary e no Blob.`,
        tags: ['GitHub Actions', 'AES-256-GCM', 'restauro ensaiado'],
      },
    ],
    bonus: {
      title: 'E mais uma: a fechadura da área financeira',
      text: 'A área financeira pede uma 2.ª palavra-passe a toda a gente, superadmin incluído. O desbloqueio dura 30 minutos e a janela é comparada em SQL, com NOW() - INTERVAL, e não no relógio do browser. O guard está em cada page.tsx e não no layout, porque um guard no layout não volta a correr na navegação client-side e a janela nunca expirava. Uma regra de CI e 6 testes E2E impedem que isso volte.',
    },
  },
  incident: {
    label: 'O que correu mal',
    title: 'A mudança de domínio que pôs toda a gente fora',
    intro:
      'A 23 de outubro de 2026 mudei o domínio principal do www para o domínio sem prefixo, oosfera.pt, de madrugada, no painel da Vercel. Parecia uma alteração de configuração. Foi um logout geral.',
    timeline: [
      {
        when: '23 out',
        text: 'As cookies de sessão eram host-only, sem atributo Domain. As do www não chegam ao apex, por isso toda a gente passou a ver o ecrã de login. As sessões continuavam intactas na base de dados, mas nenhum browser as enviava.',
      },
      {
        when: '24 out',
        text: 'Ponte de cookies no proxy.ts. Tirei o redirect da Vercel no www, para o proxy correr primeiro. Quem chega ao www com sessão leva as 4 cookies embrulhadas numa cookie temporária (Domain=oosfera.pt, 5 minutos), e o apex desembrulha-as em cookies host-only.',
      },
      {
        when: '24 out',
        text: 'Quem entra direto pelo apex sem sessão dá uma única volta pelo www antes de ver o login, para recuperar a sessão que lá ficou. Uma cookie marca a volta e um parâmetro ?ponte=1 trava ciclos se o browser recusar cookies.',
      },
    ],
    lessonTitle: 'Lição',
    lesson:
      'Uma mudança de domínio é uma migração, e parte do estado vive nos browsers dos utilizadores, fora do meu alcance. Ficou escrito na documentação do projeto: trocar outra vez de domínio sem uma ponte destas repete o logout geral.',
  },
  debugging: {
    label: 'Depuração',
    title: 'Histórias de depuração',
    intro:
      'A plataforma tem uma área de jogos para os alunos. Os jogos destas histórias são originais, feitos de raiz em React, SVG e canvas, com a bailarina de cada aluno como personagem. Jogam-se sobretudo no telemóvel, e foi aí que apareceram os problemas mais interessantes.',
    stories: [
      {
        title: 'O jogo que aquecia o telemóvel',
        context: 'Connect: ligar pares da mesma cor com tubos, contra uma barra de tempo.',
        symptom:
          'Numa partida de dois minutos o telemóvel aquecia. Medido no Chrome com viewport de telemóvel: 68 ms de thread principal por segundo com o jogo parado, e 60 layouts por segundo.',
        cause:
          'O componente do jogo guardava o tempo restante em estado e fazia setState dez vezes por segundo. Cada tick re-renderizava o tabuleiro inteiro, dezenas de SVGs com sombra, só para a barra encolher. E a barra animava a largura, o que obriga a recalcular o layout.',
        fix: 'O jogo passou a guardar só o prazo, um instante fixo. O relógio vive dentro da barra, que só avisa o jogo duas vezes por partida: nos últimos segundos e no fim. A barra tem sempre a largura toda e desliza com transform, que o compositor trata sem estilo nem layout. No Flappy levei a ideia mais longe: o movimento vai direto ao DOM por transform e o React só desenha a 20 fps.',
        snippet: {
          caption: 'Esboço simplificado da ideia, não é o código de produção.',
          code: `// Antes: o jogo inteiro re-renderizava 10 vezes por segundo
setRestante(prazo - Date.now())

// Depois: o jogo só conhece o prazo
<BarraTempo prazo={prazo} />

// e dentro da barra, transform em vez de width
style={{ transform: \`translateX(\${pct - 100}%)\` }}`,
        },
        lesson:
          'Estado que muda dez vezes por segundo deve viver no componente mais pequeno possível, e o que se anima deve ser transform ou opacity.',
      },
      {
        title: 'O pointerleave fantasma do iPhone',
        context: 'No Connect, o tubo desenha-se a arrastar o dedo pelo tabuleiro.',
        symptom:
          'No iPhone, no Safari e na PWA instalada, a cor caía ao segundo movimento e o tubo nunca saía da bailarina. No Android e no desktop funcionava.',
        cause:
          'O tabuleiro captura o ponteiro com setPointerCapture. No WebKit do iPhone, o 1.º movimento ainda vai à casa tocada e o 2.º já vai ao tabuleiro. Nessa troca de alvo, o WebKit envia à casa um pointerout sem relatedTarget. O React lê isso como "o ponteiro saiu da janela" e dispara pointerleave em todos os antepassados, incluindo o tabuleiro, que terminava o gesto.',
        fix: 'Com o ponteiro capturado, o gesto só termina em pointerup ou pointercancel, nunca em pointerleave. Mais tarde apliquei a mesma regra ao Blast, um puzzle de blocos com arrasto.',
        snippet: {
          caption: 'Esboço simplificado da ideia, não é o código de produção.',
          code: `<div
  onPointerDown={(e) => e.currentTarget.setPointerCapture(e.pointerId)}
  onPointerMove={arrastar}
  onPointerUp={terminarGesto}
  onPointerCancel={terminarGesto}
  // sem onPointerLeave: com captura, não é fiável no WebKit
/>`,
        },
        lesson:
          'Com pointer capture, o fim de um gesto é pointerup ou pointercancel. E gestos testam-se num iPhone a sério: o modo de dispositivo do Chrome não é o WebKit.',
      },
    ],
  },
  stack: {
    label: 'Stack',
    title: 'Tecnologias',
    groups: [
      {
        name: 'Frontend',
        items: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'PWA'],
      },
      {
        name: 'Backend e dados',
        items: [
          'Server actions e route handlers',
          'Prisma 7',
          'TiDB Cloud (MySQL)',
          'Autenticação própria (sessões, bcrypt, TOTP)',
        ],
      },
      {
        name: 'Infraestrutura',
        items: ['Vercel (fra1)', 'Vercel Blob', 'Cloudinary', 'Resend (SMTP)'],
      },
      {
        name: 'Qualidade e segurança',
        items: ['GitHub Actions', 'Playwright', 'gitleaks', 'Dependabot'],
      },
    ],
  },
  cta: {
    title: 'Ver a Oosfera ao vivo',
    text: 'O site público está em oosfera.pt. A área privada precisa de conta, por isso fica descrita aqui.',
    visit: { label: 'Ver site', href: 'https://oosfera.pt' },
    back: { label: 'Voltar ao portfólio', href: '/#projetos' },
  },
}
