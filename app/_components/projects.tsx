import {
  ArrowRight,
  DatabaseBackup,
  ExternalLink,
  KeyRound,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import type { Dictionary, ProjectStoryId } from '@/lib/content/types'
import { SectionHeading } from './section-heading'

const STORY_ICONS: Record<ProjectStoryId, LucideIcon> = {
  'two-factor': KeyRound,
  'security-rules': ShieldCheck,
  backups: DatabaseBackup,
  authorization: Users,
}

export function Projects({ projects }: { projects: Dictionary['projects'] }) {
  const { oosfera } = projects

  return (
    <Section id="projetos" className="bg-card/30">
      <Container size="lg">
        <SectionHeading heading={projects} />

        <Reveal className="max-w-4xl mx-auto">
          <article className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            {/* Header bar */}
            <div className="px-6 py-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
              <div className="flex items-center gap-3">
                <div aria-hidden="true" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary font-mono">Oo</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{oosfera.name}</h3>
                  <p className="text-sm text-muted-foreground">{oosfera.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">{oosfera.context}</p>

              {/* Stories: problem, decision, result */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {oosfera.stories.map((story) => {
                  const Icon = STORY_ICONS[story.id]
                  return (
                    <section key={story.id} className="p-5 rounded-xl bg-secondary/40 border border-border">
                      <div className="flex items-center gap-2.5 mb-3">
                        <Icon size={18} className="text-primary shrink-0" aria-hidden="true" />
                        <h4 className="font-semibold text-foreground">{story.title}</h4>
                      </div>
                      <dl className="space-y-2 text-sm">
                        <div>
                          <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                            {oosfera.storyLabels.problem}
                          </dt>
                          <dd className="text-muted-foreground">{story.problem}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                            {oosfera.storyLabels.decision}
                          </dt>
                          <dd className="text-muted-foreground">{story.decision}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[11px] uppercase tracking-wider text-primary/90">
                            {oosfera.storyLabels.result}
                          </dt>
                          <dd className="text-foreground">{story.result}</dd>
                        </div>
                      </dl>
                    </section>
                  )
                })}
              </div>

              {/* Metrics */}
              <figure className="mb-6">
                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {oosfera.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col items-center text-center p-3 rounded-xl bg-secondary/50 border border-border">
                      <dt className="order-last text-xs text-muted-foreground">{metric.label}</dt>
                      <dd className="text-lg font-bold text-foreground font-mono whitespace-nowrap">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
                <figcaption className="mt-2 text-xs text-muted-foreground/80 text-center sm:text-left">
                  {oosfera.metricsCaption}
                </figcaption>
              </figure>

              {/* Stack */}
              <h4 className="sr-only">{oosfera.stackLabel}</h4>
              <ul className="flex flex-wrap gap-2 mb-8">
                {oosfera.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={oosfera.caseStudyHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  {oosfera.caseStudyLabel}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
                <a
                  href={oosfera.siteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-secondary hover:border-primary/30 transition-all"
                >
                  {oosfera.siteLabel}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </Section>
  )
}
