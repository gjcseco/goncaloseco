import { ClipboardList, Cloud, Database, Monitor, Repeat, TestTube, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import type { Dictionary, SkillCategoryId } from '@/lib/content/types'
import { SectionHeading } from './section-heading'

const CATEGORY_ICONS: Record<SkillCategoryId, LucideIcon> = {
  frontend: Monitor,
  backend: Database,
  integration: Repeat,
  cloud: Cloud,
  testing: TestTube,
  management: ClipboardList,
}

export function Skills({ skills }: { skills: Dictionary['skills'] }) {
  return (
    <Section id="competencias" className="bg-card/30">
      <Container size="lg">
        <SectionHeading heading={skills} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id]
            return (
              <Reveal key={category.id} delay={(index % 3) * 80}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
