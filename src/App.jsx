import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import ConstructionPage from './components/ConstructionPage.jsx'
import EvolutionPage from './components/EvolutionPage.jsx'
import SedesPage from './components/SedesPage.jsx'
import InstitutePage from './components/InstitutePage.jsx'
import ProgramasPage from './components/ProgramasPage.jsx'
import { SEO_BY_ROUTE, SITE_URL } from './seo.js'

const constructionPaths = new Set(['/historia', '/galeria'])

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    const seo = SEO_BY_ROUTE[path]
    if (!seo) return

    const previousTitle = document.title
    const existingDescription = document.querySelector('meta[name="description"]')
    const description = existingDescription || document.createElement('meta')
    const previousDescription = description.getAttribute('content')
    const existingCanonical = document.querySelector('link[rel="canonical"]')
    const canonical = existingCanonical || document.createElement('link')
    const previousHref = canonical.getAttribute('href')

    if (!existingDescription) {
      description.name = 'description'
      document.head.appendChild(description)
    }
    if (!existingCanonical) {
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    document.title = seo.title
    description.setAttribute('content', seo.description)
    canonical.setAttribute('href', SITE_URL + path)

    return () => {
      document.title = previousTitle
      if (!existingDescription) description.remove()
      else if (previousDescription === null) description.removeAttribute('content')
      else description.setAttribute('content', previousDescription)
      if (!existingCanonical) canonical.remove()
      else if (previousHref === null) canonical.removeAttribute('href')
      else canonical.setAttribute('href', previousHref)
    }
  }, [path])


  return (
    <div className="site">
      <Header />
      {path === '/institute' ? <InstitutePage /> : path === '/sedes' ? <SedesPage /> : path === '/evolucion' ? <EvolutionPage /> : path === '/programas' ? <ProgramasPage /> : constructionPaths.has(path) ? <ConstructionPage /> : <main>
        <div className="home-photo">
          <img src="/images/hti-hero-original.jpg" alt="Alumnos de Hwarang practicando Taekwon-Do en el dojang" width="6000" height="4000" fetchPriority="high" />
        </div>
        <Hero />
        <section className="institute" id="institute" aria-labelledby="institute-title">
          <div className="institute__inner">
            <p className="eyebrow">Institute</p>
            <h2 id="institute-title">
              <span>Formación</span>{' '}
              <span>que</span>{' '}
              <span>trasciende</span>
            </h2>
            <p className="institute__copy">
              Taekwon-Do como camino de formación, disciplina y crecimiento.
            </p>
          </div>
        </section>
        <div className="future-anchors" aria-hidden="true">
          <span id="programas" /><span id="sedes" /><span id="historia" />
          <span id="galeria" />
        </div>
        <Contact />
      </main>}
    </div>
  )
}
