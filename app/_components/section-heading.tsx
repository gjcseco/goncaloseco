import { Reveal } from '@/components/ui/reveal'
import type { SectionHeading as SectionHeadingContent } from '@/lib/content/types'

export function SectionHeading({ heading }: { heading: SectionHeadingContent }) {
  return (
    <Reveal className="text-center mb-12">
      <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">{heading.eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading.title}</h2>
      {heading.intro ? (
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">{heading.intro}</p>
      ) : null}
    </Reveal>
  )
}
