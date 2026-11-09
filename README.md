# Gonçalo Seco - Portfólio

<!-- Confirmar o nome do repositório: o selo assume github.com/gjcseco/portfolio -->
[![CI](https://github.com/gjcseco/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/gjcseco/portfolio/actions/workflows/ci.yml)

Site pessoal em português e inglês, com o percurso, as competências e um estudo de caso da Oosfera.

Site: <https://goncaloseco.pt> <!-- provisório -->

## Stack

- Next.js 16 (App Router) e React 19
- TypeScript
- Tailwind CSS
- Playwright para testes E2E
- GitHub Actions, gitleaks e Lighthouse CI
- Alojamento na Vercel

## Como correr

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev          # servidor de desenvolvimento em http://localhost:3000
npm run build        # build de produção
npm run start        # serve o build de produção
```

## Testes e verificações

```bash
npm run lint
npm run typecheck
npx playwright install chromium   # só na primeira vez
npm run test:e2e                  # faz o build, arranca o servidor e corre os testes
```

Os testes E2E (`e2e/site.spec.ts`) correm em desktop e mobile e verificam que:

- todas as páginas (`/`, `/en`, `/oosfera`, `/en/oosfera`) abrem sem erros na consola;
- cada ligação do menu aponta para uma secção que existe;
- o idioma está declarado no `<html>` e há ligação para trocar de idioma;
- as ligações externas usam `rel="noopener"`;
- o conteúdo principal é visível mesmo sem JavaScript;
- não há número de telefone exposto na secção de contacto.

## Qualidade contínua

Em cada push e pull request, o [workflow de CI](.github/workflows/ci.yml) corre:

- **lint, typecheck e testes Playwright** sobre o build de produção (o relatório fica disponível como artefacto quando algo falha);
- **gitleaks**, para garantir que nenhum segredo entra no histórico;
- **Lighthouse CI**, que exige 95 ou mais em desempenho, acessibilidade, boas práticas e SEO (`lighthouserc.json`).
