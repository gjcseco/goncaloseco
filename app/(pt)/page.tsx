import type { Metadata } from 'next'
import { HomePage } from '../_components/home-page'
import { buildHomeMetadata } from '@/lib/site'

export const metadata: Metadata = buildHomeMetadata('pt')

export default function Page() {
  return <HomePage locale="pt" />
}
