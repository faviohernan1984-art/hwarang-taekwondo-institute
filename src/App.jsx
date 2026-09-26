import { useEffect, useState } from 'react'
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
  const [navigation, setNavigation] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
  }))
  const path = navigation.pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    const syncLocation = (event) => {
      const next = {
        pathname: window.location.pathname,
        hash: window.location.hash,
        restore: event.type === 'popstate' ? event.state?.htiContactReturn : undefined,
      }
      // Back/Forward can emit both events; retain the popstate restoration.
      setNavigation((current) => event.type === 'hashchange'
        && current.pathname === next.pathname && current.hash === next.hash ? current : next)
    }
    window.addEventListener('popstate', syncLocation)
    window.addEventListener('hashchange', syncLocation)
    return () => {
      window.removeEventListener('popstate', syncLocation)
      window.removeEventListener('hashchange', syncLocation)
    }
  }, [])

  const navigateToContact = (event) => {
    // Preserve opening in a new tab/window and the anchor's native fallback.
    if (event.defaultPrevented || event.button !== 0
      || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    if (window.location.pathname !== '/' || window.location.hash !== '#contacto') {
      window.history.replaceState({
        ...window.history.state,
        htiContactReturn: { x: window.scrollX, y: window.scrollY },
      }, '', window.location.href)
      window.history.pushState(null, '', '/#contacto')
    }
    // A new object also handles clicking Contacto again with the same URL.
    setNavigation({ pathname: '/', hash: '#contacto' })
  }

  useEffect(() => {
    if (!navigation.restore && (path !== '/' || navigation.hash !== '#contacto')) return
    let cancelled = false
    let frame
    // React has mounted the destination. Wait for fonts to settle its geometry.
    Promise.resolve(document.fonts?.ready).then(() => {
      if (cancelled) return
      frame = requestAnimationFrame(() => {
        if (navigation.restore) {
          window.scrollTo({
            left: navigation.restore.x,
            top: navigation.restore.y,
            behavior: 'instant',
          })
          return
        }
        document.getElementById('contacto')?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          block: 'start',
        })
      })
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [path, navigation])


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
      <Header pathname={path} hash={navigation.hash} onContactNavigate={navigateToContact} />
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
