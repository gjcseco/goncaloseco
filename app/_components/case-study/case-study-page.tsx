import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  Bug,
  DatabaseBackup,
  ExternalLink,
  KeyRound,
  Languages,
  Lightbulb,
  Lock,
  Network,
  ShieldCheck,
  TriangleAlert,
  type LucideIcon,
} from 'lucide-react'
import type { CaseStudyContent, CaseStudyDecision, CaseStudyStory } from '@/lib/content/case-study.types'
import { ArchitectureDiagram } from './architecture-diagram'
import { ErdFigure } from './erd-figure'

const external = { target: '_blank', rel: 'noopener noreferrer' } as const

const decisionIcons: LucideIcon[] = [KeyRound, Network, ShieldCheck, DatabaseBackup]

function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">{label}</p>
      <h2 id={id} className="text-2xl sm:text-3xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  )
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section aria-labelledby={`${id}-title`} id={id} className="py-12 sm:py-16 border-t border-border">
      <SectionHeading id={`${id}-title`} label={label} title={title} />
      {children}
    </section>
  )
}

function LabelledText({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <dt className="text-xs font-mono uppercase tracking-widest text-primary/90 mb-1">{label}</dt>
      <dd className="text-muted-foreground leading-relaxed">{text}</dd>
    </div>
  )
}

function DecisionCard({
  item,
  index,
  labels,
}: {
  item: CaseStudyDecision
  index: number
  labels: CaseStudyContent['sectionLabels']
}) {
  const Icon = decisionIcons[index] ?? ShieldCheck
  return (
    <article className="rounded-xl bg-card border border-border p-5 sm:p-7">
      <div className="flex items-start gap-3 mb-5">
        <span className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon size={18} className="text-primary" aria-hidden="true" />
        </span>
        <h3 className="text-lg sm:text-xl font-semibold leading-snug pt-1.5">
          <span className="text-primary font-mono mr-2">{String(index + 1).padStart(2, '0')}</span>
          {item.title}
        </h3>
      </div>
      <dl className="space-y-4">
        <LabelledText label={labels.problem} text={item.problem} />
        <LabelledText label={labels.decision} text={item.decision} />
        <LabelledText label={labels.result} text={item.result} />
      </dl>
      <ul className="flex flex-wrap gap-2 mt-5">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}

function StoryCard({ story, labels }: { story: CaseStudyStory; labels: CaseStudyContent['sectionLabels'] }) {
  return (
    <article className="rounded-xl bg-card border border-border p-5 sm:p-7">
      <div className="flex items-start gap-3 mb-2">
        <Bug size={18} className="text-primary shrink-0 mt-1" aria-hidden="true" />
        <h3 className="text-lg sm:text-xl font-semibold leading-snug">{story.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-5 sm:pl-[30px]">{story.context}</p>
      <dl className="space-y-4">
        <LabelledText label={labels.symptom} text={story.symptom} />
        <LabelledText label={labels.cause} text={story.cause} />
        <LabelledText label={labels.fix} text={story.fix} />
      </dl>
      {story.snippet ? (
        <figure className="mt-5">
          <pre className="rounded-lg bg-background border border-border p-4 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-mono text-foreground/90">
            <code>{story.snippet.code}</code>
          </pre>
          <figcaption className="mt-2 text-xs text-muted-foreground">{story.snippet.caption}</figcaption>
        </figure>
      ) : null}
      <div className="mt-5 flex gap-3 rounded-lg bg-primary/5 border border-primary/20 p-4">
        <Lightbulb size={18} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-sm leading-relaxed">
          <strong className="font-semibold">{labels.lesson}: </strong>
          {story.lesson}
        </p>
      </div>
    </article>
  )
}

export function CaseStudyPage({ content }: { content: CaseStudyContent }) {
  const c = content
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <nav
          aria-label={c.nav.navAriaLabel}
          className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4"
        >
          <Link
            href={c.nav.back.href}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {c.nav.back.label}
          </Link>
          <Link
            href={c.nav.switchLocale.href}
            hrefLang={c.nav.switchLocale.hrefLang}
            lang={c.nav.switchLocale.hrefLang}
            aria-label={c.nav.switchLocale.ariaLabel}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Languages size={15} aria-hidden="true" />
            {c.nav.switchLocale.label}
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Intro */}
        <section aria-labelledby="cs-title" className="pt-12 sm:pt-20 pb-12">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">{c.hero.eyebrow}</p>
          <h1 id="cs-title" className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
            {c.hero.title}
          </h1>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {c.hero.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.hero.facts.map((f) => (
              <div key={f.label} className="rounded-xl bg-card border border-border px-4 py-3">
                <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{f.label}</dt>
                <dd className="font-medium">
                  {f.href ? (
                    <a
                      href={f.href}
                      {...external}
                      className="inline-flex items-center gap-1.5 text-primary hover:underline underline-offset-4"
                    >
                      {f.value}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Numbers */}
        <Section id="numeros" label={c.numbers.label} title={c.numbers.title}>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {c.numbers.items.map((n) => (
              <li key={n.label} className="rounded-xl bg-card border border-border p-4">
                <p className="text-2xl sm:text-3xl font-bold text-primary font-mono tabular-nums">{n.value}</p>
                <p className="mt-1 text-sm font-medium leading-snug">{n.label}</p>
                {n.note ? <p className="mt-1 text-xs text-muted-foreground leading-snug">{n.note}</p> : null}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">{c.numbers.footnote}</p>
        </Section>

        {/* Architecture */}
        <Section id="arquitetura" label={c.architecture.label} title={c.architecture.title}>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            {c.architecture.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ArchitectureDiagram labels={c.architecture.diagram} />
          <ul className="mt-6 space-y-3">
            {c.architecture.notes.map((note) => (
              <li key={note} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <ErdFigure content={c.erd} />
        </Section>

        {/* Decisions */}
        <Section id="decisoes" label={c.decisions.label} title={c.decisions.title}>
          <p className="text-muted-foreground leading-relaxed mb-8">{c.decisions.intro}</p>
          <div className="space-y-5">
            {c.decisions.items.map((item, i) => (
              <DecisionCard key={item.title} item={item} index={i} labels={c.sectionLabels} />
            ))}
            <aside className="rounded-xl border border-dashed border-border p-5 sm:p-7">
              <div className="flex items-start gap-3 mb-3">
                <Lock size={18} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                <h3 className="text-lg font-semibold leading-snug">{c.decisions.bonus.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{c.decisions.bonus.text}</p>
            </aside>
          </div>
        </Section>

        {/* Incident */}
        <Section id="o-que-correu-mal" label={c.incident.label} title={c.incident.title}>
          <div className="rounded-xl bg-card border border-border p-5 sm:p-7">
            <div className="flex gap-3 mb-6">
              <TriangleAlert size={18} className="text-destructive shrink-0 mt-1" aria-hidden="true" />
              <p className="leading-relaxed">{c.incident.intro}</p>
            </div>
            <ol className="relative border-l border-border ml-2 space-y-6">
              {c.incident.timeline.map((t) => (
                <li key={t.text} className="pl-5 relative">
                  <span
                    className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-sm text-primary mb-1">{t.when}</p>
                  <p className="text-muted-foreground leading-relaxed">{t.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-7 flex gap-3 rounded-lg bg-primary/5 border border-primary/20 p-4">
              <Lightbulb size={18} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm sm:text-base leading-relaxed">
                <strong className="font-semibold">{c.incident.lessonTitle}: </strong>
                {c.incident.lesson}
              </p>
            </div>
          </div>
        </Section>

        {/* Debugging */}
        <Section id="depuracao" label={c.debugging.label} title={c.debugging.title}>
          <p className="text-muted-foreground leading-relaxed mb-8">{c.debugging.intro}</p>
          <div className="space-y-5">
            {c.debugging.stories.map((s) => (
              <StoryCard key={s.title} story={s} labels={c.sectionLabels} />
            ))}
          </div>
        </Section>

        {/* Stack */}
        <Section id="stack" label={c.stack.label} title={c.stack.title}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.stack.groups.map((g) => (
              <div key={g.name} className="rounded-xl bg-card border border-border p-5">
                <h3 className="text-sm font-semibold mb-3">{g.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section aria-labelledby="cs-cta-title" className="py-12 sm:py-16 border-t border-border">
          <div className="rounded-xl bg-card border border-border p-6 sm:p-10 text-center glow-cyan">
            <h2 id="cs-cta-title" className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              {c.cta.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7 max-w-xl mx-auto">{c.cta.text}</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={c.cta.visit.href}
                {...external}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                {c.cta.visit.label}
                <ExternalLink size={15} aria-hidden="true" />
              </a>
              <Link
                href={c.cta.back.href}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border font-medium rounded-lg hover:border-primary/40 hover:text-primary transition-colors"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                {c.cta.back.label}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
