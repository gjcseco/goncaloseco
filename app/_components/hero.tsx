import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import type { Dictionary } from '@/lib/content/types'

const secondaryButton =
  'inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary hover:border-primary/30 transition-all'

/**
 * The hero never depends on JavaScript or on the scroll reveal: it is visible as soon as the
 * HTML arrives. The only motion is a CSS-only bounce on the scroll hint (off under reduced motion).
 */
export function Hero({ dict }: { dict: Dictionary }) {
  const { hero, links, cvUrl } = dict

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Gradient orbs */}
      <div aria-hidden="true" className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{hero.eyebrow}</p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Gonçalo <span className="text-primary">Seco</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">{hero.tagline}</p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            {hero.projectCta}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
          {cvUrl ? (
            <a href={cvUrl} download className={secondaryButton}>
              <Download size={16} aria-hidden="true" />
              {hero.cvCta}
            </a>
          ) : null}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#sobre"
        aria-label={hero.scrollHint}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <span className="scroll-hint w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-primary" />
        </span>
      </a>
    </section>
  )
}
