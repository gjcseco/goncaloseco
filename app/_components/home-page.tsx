import { getDictionary, type Locale } from '@/lib/i18n'
import { RevealObserver } from '@/components/ui/reveal-observer'
import { Navbar } from './navbar'
import { Hero } from './hero'
import { About } from './about'
import { Skills } from './skills'
import { Experience } from './experience'
import { Projects } from './projects'
import { Certifications } from './certifications'
import { Contact } from './contact'
import { Footer } from './footer'

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)

  return (
    <>
      <Navbar nav={dict.nav} />
      <main className="min-h-screen bg-background">
        <Hero dict={dict} />
        <About about={dict.about} photoUrl={dict.photoUrl} />
        <Skills skills={dict.skills} />
        <Experience experience={dict.experience} />
        <Projects projects={dict.projects} />
        <Certifications certifications={dict.certifications} />
        <Contact contact={dict.contact} />
      </main>
      <Footer footer={dict.footer} links={dict.links} />
      <RevealObserver />
    </>
  )
}
