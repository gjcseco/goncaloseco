import type { Metadata } from 'next'
import { HomePage } from '../../_components/home-page'
import { buildHomeMetadata } from '@/lib/site'

export const metadata: Metadata = buildHomeMetadata('en')

export default function Page() {
  return <HomePage locale="en" />
}
