import Image from 'next/image'
import { Maximize2 } from 'lucide-react'
import type { CaseStudyContent } from '@/lib/content/case-study.types'

// Intrinsic size of public/oosfera/erd.svg (Mermaid export, table names only).
const ERD_WIDTH = 8350
const ERD_HEIGHT = 1112
const ERD_SRC = '/oosfera/erd.svg'

export function ErdFigure({ content }: { content: CaseStudyContent['erd'] }) {
  return (
    <figure className="mt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-3">
        <h3 className="text-lg font-semibold">{content.title}</h3>
        <a
          href={ERD_SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
        >
          <Maximize2 size={14} aria-hidden="true" />
          {content.openFull}
        </a>
      </div>
      {/* The diagram is ~7.5:1, so it scrolls sideways instead of shrinking to illegibility. */}
      <div
        role="region"
        aria-label={content.title}
        tabIndex={0}
        className="rounded-xl border border-border bg-white overflow-x-auto overscroll-x-contain focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Image
          src={ERD_SRC}
          alt={content.alt}
          width={ERD_WIDTH}
          height={ERD_HEIGHT}
          unoptimized
          className="block h-[300px] sm:h-[420px] w-auto max-w-none"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {content.caption} {content.scrollHint}
      </figcaption>
    </figure>
  )
}
