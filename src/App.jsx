import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import ConstructionPage from './components/ConstructionPage.jsx'
import EvolutionPage from './components/EvolutionPage.jsx'
import SedesPage from './components/SedesPage.jsx'

const constructionPaths = new Set(['/institute', '/programas', '/historia', '/galeria'])

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    if (!['/', '/sedes', '/evolucion'].includes(path)) return
    const existingCanonical = document.querySelector('link[rel="canonical"]')
    const canonical = existingCanonical || document.createElement('link')
    const previousHref = canonical.getAttribute('href')
    if (!existingCanonical) {
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://www.hwarangtaekwondo.com.ar' + path)
    return () => {
      if (!existingCanonical) canonical.remove()
      else if (previousHref === null) canonical.removeAttribute('href')
      else canonical.setAttribute('href', previousHref)
    }
  }, [path])


  return (
    <div className="site">
      <Header />
      {path === '/sedes' ? <SedesPage /> : path === '/evolucion' ? <EvolutionPage /> : constructionPaths.has(path) ? <ConstructionPage /> : <main>
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
