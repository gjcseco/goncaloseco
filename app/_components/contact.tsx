import { Github, Linkedin, Mail, MapPin, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import type { ContactItemId, Dictionary } from '@/lib/content/types'
import { SectionHeading } from './section-heading'

const CONTACT_ICONS: Record<ContactItemId, LucideIcon> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  location: MapPin,
}

const cardClass = 'block p-6 rounded-xl bg-card border border-border text-center transition-all duration-300 h-full'

export function Contact({ contact }: { contact: Dictionary['contact'] }) {
  return (
    <Section id="contacto" className="bg-card/30">
      <Container size="lg">
        <SectionHeading heading={contact} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contact.items.map((item, index) => {
            const Icon = CONTACT_ICONS[item.id]
            const content = (
              <>
                <Icon size={22} className="text-primary mx-auto mb-3" aria-hidden="true" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm font-medium text-foreground break-words">{item.value}</p>
              </>
            )
            const isExternal = item.href?.startsWith('http') ?? false

            return (
              <Reveal key={item.id} delay={index * 80}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={`${cardClass} hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
