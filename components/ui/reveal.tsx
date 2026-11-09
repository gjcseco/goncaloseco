import { cn } from '@/lib/utils'

/**
 * Fades its content in when it scrolls into view.
 *
 * Server Component: it only adds the `reveal` class. The content is fully visible in the
 * HTML; it is hidden only once <RevealObserver /> has run (it adds `reveal-ready` to <html>)
 * and only when the visitor has not asked for reduced motion (see globals.css).
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  /** Delay in milliseconds, for staggering items in a grid. */
  delay?: number
  className?: string
}) {
  return (
    <div
      className={cn('reveal', className)}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
