import Image from 'next/image'
import { Award, Code, GitCommitHorizontal, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import type { AboutStatId, Dictionary } from '@/lib/content/types'

const STAT_ICONS: Record<AboutStatId, LucideIcon> = {
  experience: Code,
  certifications: Award,
  commits: GitCommitHorizontal,
}

export function About({ about, photoUrl }: { about: Dictionary['about']; photoUrl: string | null }) {
  return (
    <Section id="sobre">
      <Container size="lg">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          {/* Avatar */}
          <Reveal className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center glow-cyan overflow-hidden">
                {photoUrl ? (
                  <Image
                    src={photoUrl}
                    alt={about.photoAlt}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl font-bold text-primary font-mono" aria-hidden="true">
                    GS
                  </span>
                )}
              </div>
              <div aria-hidden="true" className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Code size={20} className="text-primary-foreground" />
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={100}>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">{about.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{about.title}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="grid grid-cols-3 gap-4">
              {about.stats.map((stat) => {
                const Icon = STAT_ICONS[stat.id]
                return (
                  <div key={stat.id} className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                    <Icon size={20} className="text-primary mb-2" aria-hidden="true" />
                    <dt className="order-last text-xs text-muted-foreground mt-1">{stat.label}</dt>
                    <dd className="text-2xl font-bold text-foreground whitespace-nowrap">{stat.value}</dd>
                  </div>
                )
              })}
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
