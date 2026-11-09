import { Briefcase, SearchCheck, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import type { Dictionary, ExperienceEntry, ExperienceGroupId } from '@/lib/content/types'
import { SectionHeading } from './section-heading'

const GROUP_STYLES: Record<ExperienceGroupId, { icon: LucideIcon; accent: string }> = {
  dev: { icon: Briefcase, accent: 'bg-primary/10 text-primary' },
  qa: { icon: SearchCheck, accent: 'bg-accent/10 text-accent' },
}

function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  return (
    <>
      {/* Dot */}
      <div aria-hidden="true" className="absolute -left-[calc(2rem+7px)] top-6 w-3 h-3 rounded-full bg-primary border-2 border-background" />

      <article className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
          <div>
            <h4 className="font-semibold text-foreground">{entry.role}</h4>
            <p className="text-sm text-primary">{entry.company}</p>
          </div>
          <div className="sm:text-right shrink-0">
            <p className="text-sm text-muted-foreground font-mono">{entry.period}</p>
            <p className="text-xs text-muted-foreground">{entry.location}</p>
          </div>
        </div>
        <ul className="space-y-1.5">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="text-sm text-muted-foreground flex gap-2">
              <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export function Experience({ experience }: { experience: Dictionary['experience'] }) {
  return (
    <Section id="experiencia">
      <Container size="lg">
        <SectionHeading heading={experience} />

        <div className="max-w-3xl mx-auto">
          {experience.groups.map((group) => {
            const { icon: Icon, accent } = GROUP_STYLES[group.id]
            return (
              <div key={group.id} className="mb-16 last:mb-0">
                <Reveal className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${accent}`}>
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </Reveal>

                <div className="relative pl-8 border-l-2 border-border">
                  {group.entries.map((entry) => (
                    <Reveal key={`${entry.role}-${entry.period}`} className="relative mb-10 last:mb-0">
                      <TimelineEntry entry={entry} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
