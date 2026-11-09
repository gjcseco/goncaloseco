import { Github, Linkedin } from 'lucide-react'
import type { Dictionary } from '@/lib/content/types'

const linkClass = 'text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm'

export function Footer({ footer, links }: { footer: Dictionary['footer']; links: Dictionary['links'] }) {
  // Evaluated at build time: the page is static, so the year updates on the next deploy.
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} {footer.rights}
        </p>
        <div className="flex items-center gap-6">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
