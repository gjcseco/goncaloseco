import type { Metadata } from 'next'
import { RootShell } from '../../_components/root-shell'
import { buildRootMetadata } from '@/lib/site'

export const metadata: Metadata = buildRootMetadata('en')

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>
}
