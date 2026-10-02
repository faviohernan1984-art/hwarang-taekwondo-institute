import { useEffect, useRef, useState } from 'react'
import '../styles/history.css'

const years = ['1998', '2004', '2014', '2017', '2019', '2023', '2025', '2026']
const competitions = [
  ['Panamericano', 'ITF Union Open Argentina — 2024'],
  ['Nacional', 'FEDART — 2025'],
  ['World Championship Argentina', 'ITFU Open — 2025'],
]


export default function HistoryPage() {
  const root = useRef(null)
  const [activeYear, setActiveYear] = useState(null)

  useEffect(() => {
    // Observe a narrow reading band; anchors and native scrolling do the navigation.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveYear(entry.target.dataset.year || null)
      })
    }, { rootMargin: '-20% 0px -70% 0px' })
    root.current.querySelectorAll('.hti-history__opening, .hti-history__scene').forEach(scene => observer.observe(scene))
    return () => observer.disconnect()
  }, [])


  useEffect(() => {
    const page = root.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const selector = '.hti-history__year, .hti-history__entry-heading > *, .hti-history__copy, .hti-history__events, .hti-history__number, .hti-history__closing'
    const targets = [...page.querySelectorAll(selector)]
    let revealObserver
    const reset = () => {
      revealObserver?.disconnect()
      targets.forEach(target => target.classList.remove('hti-history__motion', 'is-written'))
      page.classList.remove('hti-history--motion')
    }
    const setup = () => {
      reset()
      if (preference.matches || !('IntersectionObserver' in window)) return
      page.classList.add('hti-history--motion')
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-written')
          revealObserver.unobserve(entry.target)
        })
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0 })
      targets.forEach(target => {
        target.classList.add('hti-history__motion')
        revealObserver.observe(target)
      })
    }
    const revealFocus = event => {
      event.target.closest('.hti-history__scene')?.querySelectorAll(selector).forEach(target => {
        target.classList.add('is-written')
        revealObserver?.unobserve(target)
      })
    }
    setup()
    preference.addEventListener('change', setup)
    page.addEventListener('focusin', revealFocus)
    return () => {
      reset()
      preference.removeEventListener('change', setup)
      page.removeEventListener('focusin', revealFocus)
    }
  }, [])

  return (
    <main ref={root} className="hti-history" aria-labelledby="history-title">
      <section className="hti-history__opening" aria-labelledby="history-title">
        <div className="hti-history__opening-copy">
          <h1 className="hti-history__label" id="history-title">Historia</h1>
          <p className="hti-history__opening-statement">Antes del Instituto<br />hubo un practicante.<span>Antes del director<br />hubo un alumno.</span></p>
          <div className="hti-history__origin-note">
            <p className="hti-history__label">1998 — Rafaela</p>
            <p>Comenzó un recorrido que todavía continúa.</p>
          </div>
        </div>
        <a className="hti-history__read" href="#historia-1998">Recorrer la historia <span aria-hidden="true">↓</span></a>
      </section>


      <nav className="hti-history__chronology" aria-label="A?os de la historia">
        {years.map(year => <a key={year} href={`#historia-${year}`} aria-current={activeYear === year ? 'location' : undefined}>{year}</a>)}
      </nav>
      <div className="hti-history__archive">
        <section className="hti-history__scene hti-history__scene--1998" id="historia-1998" data-year="1998" aria-labelledby="history-beginning" tabIndex={-1}>
          <p className="hti-history__year" aria-hidden="true">1998</p>
<div className="hti-history__entry hti-history__entry--major" aria-labelledby="history-beginning">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">1998 — El comienzo</p>
              <p className="hti-history__place">Rafaela, octubre</p><h3 id="history-beginning">Aprender.</h3>
            </header>
            <div className="hti-history__copy">
            <p>En octubre de 1998, Favio H. Albornoz comienza la práctica del <span className="hti-history__nowrap">Taekwon-Do</span> en Rafaela, en el dojang del instructor mayor Víctor Lozano, en Sarmiento 160.</p>
            <p>En enero de 1999 continúa su formación con Néstor Coria, I Dan, en la vecinal del barrio Güemes. Durante 2000, el entrenamiento se traslada a la vecinal del barrio Martín Fierro.</p>
            <p className="hti-history__aside">Antes de enseñar hubo que aprender.<br />Antes de dirigir hubo que permanecer.</p>
          </div>

          </div>
<div className="hti-history__entry hti-history__entry--note" aria-labelledby="history-first-grades">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">2000–2004 — Primeras graduaciones</p>
              <h3 id="history-first-grades">Una formación<br />que avanza.</h3>
            </header>
            <div className="hti-history__copy">
            <p>El primer examen tiene lugar el <time dateTime="2000-12-14">14 de diciembre de 2000</time>. El entrenamiento continúa acompañado por graduaciones progresivas.</p>
            <p>8.º Gup — julio de 2002; 7.º Gup — diciembre de 2003; 6.º Gup — julio de 2004.</p>
          </div>
          </div>

        </section>

        <section className="hti-history__scene hti-history__scene--2004" id="historia-2004" data-year="2004" aria-labelledby="history-permanence" tabIndex={-1}>
          <p className="hti-history__year" aria-hidden="true">2004</p>
<div className="hti-history__entry hti-history__entry--quiet" aria-labelledby="history-permanence">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">2004–2014 — Permanecer</p>
              <h3 id="history-permanence">Seguir<br />entrenando.</h3>
            </header>
            <div className="hti-history__copy">
            <p>A fines de 2004 comenzó una etapa diferente, tras la desvinculación de Néstor Coria respecto de Víctor Lozano.</p>
            <p>Favio continuó su formación junto a su instructor Néstor Coria, aunque durante aproximadamente diez años el grupo permaneció sin un maestro que ejerciera su dirección superior.</p>
            <p className="hti-history__aside">El camino no se interrumpió.<br />La actividad y el entrenamiento continuaron.</p>
          </div>
          </div>

        </section>

        <section className="hti-history__scene hti-history__scene--2014" id="historia-2014" data-year="2014" aria-labelledby="history-advance" tabIndex={-1}>
          <p className="hti-history__year" aria-hidden="true">2014</p>
<div className="hti-history__entry hti-history__entry--advance" aria-labelledby="history-advance">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">2014 — Nueva etapa de formación</p>
              <h3 id="history-advance">Continuar la formación.</h3>
            </header>
            <div className="hti-history__copy">
            <p>En noviembre de 2014 comienza la vinculación con el Centro Nacional de <span className="hti-history__nowrap">Taekwon-Do</span>, dirigido por el maestro Guillermo Bianchi, VII Dan.</p>
            <p>A partir de esta etapa continúa la progresión de graduaciones: 5.º Gup — julio de 2015; 4.º Gup — diciembre de 2015; 3.º Gup — julio de 2016; 2.º Gup — diciembre de 2016; 1.º Gup — mayo de 2017.</p>
          </div>
          </div>

        </section>

        <section className="hti-history__scene hti-history__scene--2017" id="historia-2017" data-year="2017" aria-labelledby="history-responsibility" tabIndex={-1}>
          <p className="hti-history__year" aria-hidden="true">2017</p>
<div className="hti-history__entry hti-history__entry--major hti-history__responsibility" aria-labelledby="history-responsibility">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label"><time dateTime="2017-12-06">06.12.2017</time></p><p className="hti-history__dan">I Dan</p>
              <h3 id="history-responsibility">El cinturón negro<br />no cerró una etapa.<span>Cambió la responsabilidad.</span></h3>
            </header>
            <div className="hti-history__copy"><p>El <time dateTime="2017-12-06">6 de diciembre de 2017</time>, Favio alcanza la graduación de I Dan.</p>
          <p>Después del I Dan, la práctica, el entrenamiento y la formación continuaron.</p>
          </div>
          </div>
<div className="hti-history__entry" aria-labelledby="history-continuity">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">2017–2019 — Continuidad</p>
              <h3 id="history-continuity">La actividad nunca se detuvo.</h3>
            </header>
            <div className="hti-history__copy"><p>Favio continuó entrenando y formándose. En 2019, ese recorrido incorporaría una nueva responsabilidad: estar al frente de su propia Academia.</p></div>
          </div>

        </section>

        <section className="hti-history__scene hti-history__scene--2019" id="historia-2019" data-year="2019" aria-labelledby="history-foundation" tabIndex={-1}>
          <p className="hti-history__year" aria-hidden="true">2019</p>
<div className="hti-history__entry hti-history__entry--major hti-history__entry--institution" aria-labelledby="history-foundation">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label"><time dateTime="2019-04-09">09.04.2019</time> — Nace Academia Hwa-Rang</p>
              <p className="hti-history__institution-name">Academia Hwa-Rang</p><h3 id="history-foundation">De aprender<br />a compartir<br /><span>lo aprendido.</span></h3>
            </header>
            <div className="hti-history__copy">
              <p>El 9 de abril de 2019 comienza formalmente la actividad de la Academia Hwa-Rang en el Gimnasio X-Treme, Salta 323, Rafaela.</p>
              <p>Favio comienza su actividad al frente de su propia Academia siendo I Dan. Al recorrido del practicante se suma el del instructor y fundador.</p>
            </div>

          </div>
<div className="hti-history__entry hti-history__entry--venue" aria-labelledby="history-venue">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">2019 — Continuar</p>
              <h3 id="history-venue">Otro espacio.<br />El mismo recorrido.</h3>
            </header>
            <div className="hti-history__copy">
            <p>En agosto de 2019, el Gimnasio X-Treme cierra por motivos vinculados al inmueble.</p>
            <p>En septiembre, Academia Hwa-Rang continúa su actividad en el Gimnasio La Máquina, Bv. Lehmann 883, Rafaela.</p>
            <p className="hti-history__aside">De X-Treme a La Máquina.<br />La actividad continúa.</p>
          </div>
          </div>

        </section>

        <section className="hti-history__scene hti-history__scene--2023" id="historia-2023" data-year="2023" aria-labelledby="history-learning" tabIndex={-1}>
          <p className="hti-history__year" aria-hidden="true">2023</p>
<div className="hti-history__entry hti-history__learning" aria-labelledby="history-learning">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">Formación Dan — 2017–2023</p>
              <h3 id="history-learning">Seguir siendo<br />alumno.</h3>
            </header>
            <div className="hti-history__copy">
            <p className="hti-history__aside">La enseñanza no reemplazó la condición de alumno.</p>
            <p>Mientras la Academia crecía, la formación personal continuó. El I Dan de 2017 fue parte de un recorrido que siguió con el II Dan en 2020 y el III Dan en 2023.</p>
            <dl className="hti-history__degrees">
              <div><dt>I Dan</dt><dd><time dateTime="2017-12-06">6 de diciembre de 2017</time></dd></div>
              <div><dt>II Dan</dt><dd><time dateTime="2020-12-16">16 de diciembre de 2020</time></dd></div>
              <div><dt>III Dan</dt><dd><time dateTime="2023-11-25">25 de noviembre de 2023</time></dd></div>
            </dl>
          </div>
          </div>
<div className="hti-history__entry hti-history__entry--legacy" aria-labelledby="history-formation">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">Formar</p>
              <h3 id="history-formation">El camino<br />continúa en otros.</h3>
            </header>
            <div className="hti-history__copy"><p>Con el crecimiento de la escuela comenzaron las graduaciones de sus propios alumnos.</p><p>Hasta el presente, este recorrido ha dado lugar a la formación de:</p></div>
            <p className="hti-history__number"><span>11</span>cinturones negros formados</p>
          </div>

        </section>

        <section className="hti-history__scene hti-history__scene--2025" id="historia-2025" data-year="2025" aria-labelledby="history-competition" tabIndex={-1}>
          <p className="hti-history__year" aria-hidden="true">2025</p>
<div className="hti-history__entry hti-history__entry--competition" aria-labelledby="history-competition">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">2024–2025 — Más allá del dojang</p>
              <h3 id="history-competition">También se aprende<br />al competir.</h3>
            </header>
            <div className="hti-history__copy"><p>La competencia es parte del proceso formativo. Una forma de poner en práctica lo aprendido y seguir creciendo.</p><p>Estos hitos forman parte de un recorrido competitivo que también incluye numerosos torneos locales e interprovinciales.</p></div>
            <ul className="hti-history__events">{competitions.map(([title, detail]) => <li key={title}><h4>{title}</h4><p>{detail}</p><p>Participación de la Academia con campeones.</p></li>)}</ul>
          </div>
<div className="hti-history__entry hti-history__entry--transition" aria-labelledby="history-present">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label">2025 — Transformación técnica</p>
              <h3 id="history-present">Una nueva etapa<br />técnica.</h3>
            </header>
            <div className="hti-history__copy"><p>Durante 2025 comienza una etapa de transformación técnica dentro del recorrido de Academia Hwa-Rang.</p><p>El vínculo actual con el <strong>MAESTRO SEBASTIÁN PINTO, VII DAN</strong>, y el <strong>CÍRCULO CERRADO DE COMPETICIÓN</strong> forma parte de este presente.</p></div>
          </div>

        </section>

        <section className="hti-history__scene hti-history__scene--2026" id="historia-2026" data-year="2026" aria-labelledby="history-identity" tabIndex={-1}>
          <p className="hti-history__year" aria-hidden="true">2026</p>
<div className="hti-history__entry hti-history__entry--major hti-history__entry--institution" aria-labelledby="history-identity">
            <header className="hti-history__entry-heading">
              <p className="hti-history__label"><time dateTime="2026-09-11">11.09.2026</time></p><p className="hti-history__institution-name">Hwarang <span className="hti-history__nowrap">Taekwon-Do</span> Institute</p>
              <h3 id="history-identity">Una nueva identidad.<br />La misma historia.</h3>
            </header>
            <div className="hti-history__copy">
            <p>El 11 de septiembre de 2026, Academia Hwa-Rang adopta oficialmente el nombre Hwarang <span className="hti-history__nowrap">Taekwon-Do</span> Institute — HTI.</p>
            <p>La nueva identidad no comienza otra historia. Le da un nuevo nombre al camino iniciado años atrás.</p>
            <p className="hti-history__aside hti-history__lineage"><span>Academia Hwa-Rang — <time dateTime="2019-04-09">09.04.2019</time></span><span className="hti-history__lineage-arrow" aria-hidden="true">↓</span><span>Hwarang <span className="hti-history__nowrap">Taekwon-Do</span> Institute — <time dateTime="2026-09-11">11.09.2026</time></span></p>
            <p>La misma institución, una identidad que evoluciona.</p>
          </div>
          </div>
        <footer className="hti-history__closing">
        <p className="hti-history__label">Hwarang <span className="hti-history__nowrap">Taekwon-Do</span> Institute</p>
        <h2>La historia no termina<br />en el presente.</h2>
        <p>El presente es la parte que estamos escribiendo ahora.</p>
        <a className="hti-history__cta" href="/institute">Conocé el Instituto <span aria-hidden="true">↗</span></a>
      </footer>
        </section>
      </div>
    </main>
  )
}
