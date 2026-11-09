import type { Dictionary } from './content/types'
import { pt } from './content/pt'
import { en } from './content/en'

export type Locale = 'pt' | 'en'

export const locales: readonly Locale[] = ['pt', 'en']

const dictionaries: Record<Locale, Dictionary> = { pt, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
