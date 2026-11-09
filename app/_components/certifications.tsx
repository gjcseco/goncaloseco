import { Award, GraduationCap, Languages } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import type { CertificationId, Dictionary } from '@/lib/content/types'
import { SectionHeading } from './section-heading'

const CERT_COLORS: Record<CertificationId, string> = {
  mulesoft: 'text-blue-400',
  azure: 'text-sky-400',
  istqb: 'text-emerald-400',
}

export function Certifications({ certifications }: { certifications: Dictionary['certifications'] }) {
  return (
    <Section id="certificacoes">
      <Container size="lg">
        <SectionHeading heading={certifications} />

        {/* Certifications */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {certifications.certs.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 80}>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all h-full text-center">
                <Award size={28} className={`${CERT_COLORS[cert.id]} mx-auto mb-4`} aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-primary mb-2">{cert.level}</p>
                <p className="text-xs text-muted-foreground font-mono">{cert.date}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="max-w-3xl mx-auto space-y-10">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold">{certifications.educationTitle}</h3>
            </div>

            <div className="space-y-4">
              {certifications.education.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      <p className="text-sm text-primary">{item.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-start sm:items-center gap-3 p-5 rounded-xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Languages size={20} className="text-primary" aria-hidden="true" />
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{certifications.languagesTitle}:</span>{' '}
              {certifications.languages}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
