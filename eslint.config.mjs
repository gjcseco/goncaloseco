import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

export default defineConfig([
  globalIgnores(['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts', 'nextjs_space/**', 'playwright-report/**', 'test-results/**', '.lighthouseci/**']),
  ...nextVitals,
  ...nextTs,
])
