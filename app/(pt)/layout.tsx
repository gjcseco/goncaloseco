import type { Metadata } from 'next'
import { RootShell } from '../_components/root-shell'
import { buildRootMetadata } from '@/lib/site'

export const metadata: Metadata = buildRootMetadata('pt')

export default function PortugueseRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="pt">{children}</RootShell>
}
