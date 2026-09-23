import { useEffect, useRef, useState } from 'react'
import '../styles/institute.css'

const sections = [
  ['hti-apertura', 'Más que Taekwon-Do'],
  ['hti-instituto', 'La idea de Instituto'],
  ['hti-filosofia', 'Nuestra filosofía'],
  ['hti-metodo', 'Método HTI'],
  ['hti-direccion', 'Dirección'],
  ['hti-competencia', 'Competencia / Alto rendimiento'],
  ['hti-innovacion', 'Innovación / HSU'],
  ['hti-pertenencia', 'Pertenencia'],
]

const pillars = [
  ['MARCIAL', 'Aprender Taekwon-Do desde la técnica, la disciplina y el respeto, haciendo del cuerpo un lugar de aprendizaje.'],
  ['HUMANA', 'Reconocer lo que sentimos, revisar nuestra mirada y conversar para elegir cómo actuar y relacionarnos.'],
  ['DEPORTIVA', 'Desarrollar capacidades y hábitos de entrenamiento. La competencia es una posibilidad para quienes eligen asumir ese compromiso.'],
  ['INNOVACIÓN', 'Observar la práctica, abrir preguntas y crear herramientas que aporten nuevas posibilidades a la enseñanza y al deporte.'],
]

function goToSection(id) {
  const target = document.getElementById(id)
  if (!target) return
  target.focus({ preventScroll: true })
  target.scrollIntoView({
    block: 'start',
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  })
}

function InstituteSection({ index, children }) {
  const [id, name] = sections[index]
  const previous = sections[index - 1]
  const next = sections[index + 1]

  return (
    <section className="hti-institute__section" id={id} aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="hti-institute__content">
        <p className="hti-institute__eyebrow">{String(index + 1).padStart(2, '0')} — {name}</p>
        {children}
      </div>
      <nav className="hti-institute__navigation" aria-label={`Navegación de sección: ${name}`}>
        <button type="button" disabled={!previous} onClick={() => goToSection(previous[0])}
          aria-label={previous ? `Sección anterior: ${previous[1]}` : 'Sección anterior (inicio del recorrido)'}>
          <span aria-hidden="true">↑</span> sección anterior
        </button>
        <button type="button" disabled={!next} onClick={() => goToSection(next[0])}
          aria-label={next ? `Sección siguiente: ${next[1]}` : 'Sección siguiente (fin del recorrido)'}>
          <span aria-hidden="true">↓</span> sección siguiente
        </button>
      </nav>
    </section>
  )
}

const methodSteps = [
  ['OBSERVAR', 'Reconocer dónde estamos.'],
  ['ELEGIR', 'Definir hacia dónde ir.'],
  ['COMPROMETERSE', 'Asumir la elección.'],
  ['ENTRENAR', 'Convertirla en práctica.'],
  ['TRANSFORMAR', 'Hacer propio lo aprendido.'],
  ['TRANSMITIR', 'Compartir lo aprendido.'],
]
const methodArcs = methodSteps.map((_, index) => {
  const point = angle => [50 + 32 * Math.sin(angle), 50 - 32 * Math.cos(angle)]
  const start = point(index * Math.PI / 3)
  const end = point((index + 1) * Math.PI / 3)
  const middle = point((index + .5) * Math.PI / 3)
  return {
    path: `M ${start.join(' ')} A 32 32 0 0 1 ${end.join(' ')}`,
    arrow: `translate(${middle.join(' ')}) rotate(${(index + .5) * 60})`,
  }
})

function MethodCycle() {
  const [active, setActive] = useState(0)
  const [restart, setRestart] = useState(0)
  const [paused, setPaused] = useState(false)
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const cycleRef = useRef(null)
  const running = !reduced && !paused && !focused && visible

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(preference.matches)
    preference.addEventListener('change', update)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .25 })
    observer.observe(cycleRef.current)
    return () => {
      preference.removeEventListener('change', update)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!running) return
    const timer = window.setTimeout(() => setActive(step => (step + 1) % methodSteps.length), 4500)
    return () => window.clearTimeout(timer)
  }, [active, restart, running])

  return (
    <div className="hti-institute__method-cycle" ref={cycleRef}
      data-running={running} data-return={active === 5}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
      }}>
      <div className="hti-institute__method-orbit">
      <svg className="hti-institute__method-ring" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        {methodArcs.map((arc, index) => (
          <g key={index} className={index === 5 ? 'hti-institute__method-return' : undefined}>
            <path d={arc.path} />
            <path d="M -1 -1 L 0 0 L -1 1" transform={arc.arrow} />
          </g>
        ))}
        <path key={`${active}-${restart}-${running}`} d={methodArcs[active].path} pathLength="1"
          className="hti-institute__method-progress" />
      </svg>
      <div className="hti-institute__method-center">
        <strong>HTI</strong>
        <span>MÁS QUE<br />TAEKWON-DO</span>
      </div>
      <ol className="hti-institute__method" role="list" aria-label="Ciclo del método HTI: de observar a transmitir y volver a observar">
        {methodSteps.map(([step, description], index) => (
          <li key={step}>
            <button type="button" aria-pressed={active === index}
              aria-label={`${String(index + 1).padStart(2, '0')} ${step}: ${description}`}
              onClick={() => { setActive(index); setRestart(value => value + 1) }}>
              <span className="hti-institute__method-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span>{index === 2 ? <>COMPRO<wbr />METERSE</> : index === 4 ? <>TRANS<wbr />FORMAR</> : step}</span>
            </button>
          </li>
        ))}
      </ol>
      </div>
      <div className="hti-institute__method-caption">
        <p className="hti-institute__method-card" key={active}>
          {methodSteps[active][1]}
        </p>
        {!reduced && <button className="hti-institute__method-pause" type="button"
          aria-label={paused ? 'Reanudar el ciclo automático' : 'Pausar el ciclo automático'}
          aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          {paused ? 'Reanudar' : 'Pausar'}
        </button>}
      </div>
    </div>
  )
}

export default function InstitutePage() {
  useEffect(() => {
    const section = document.getElementById('hti-competencia')
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || entry.intersectionRatio <= .05) {
        section.removeAttribute('data-competition-entered')
      } else if (entry.intersectionRatio >= .15) {
        section.setAttribute('data-competition-entered', '')
      }
    }, { threshold: [.05, .15] })
    observer.observe(section)
    return () => {
      observer.disconnect()
      section.removeAttribute('data-competition-entered')
    }
  }, [])


  useEffect(() => {
    const section = document.getElementById('hti-direccion')
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || entry.intersectionRatio <= .05) {
        section.removeAttribute('data-direction-entered')
      } else if (entry.intersectionRatio >= .15 && !section.hasAttribute('data-direction-entered')) {
        section.setAttribute('data-direction-entered', '')
      }
    }, { threshold: [.05, .15] })
    observer.observe(section)
    return () => {
      observer.disconnect()
      section.removeAttribute('data-direction-entered')
    }
  }, [])

  return (
    <main className="hti-institute">
      <InstituteSection index={0}>
        <h1 id="hti-apertura-title">HWARANG TAEKWON-DO INSTITUTE</h1>
        <p className="hti-institute__statement">MÁS QUE TAEKWON-DO</p>
        <p>En Hwarang Taekwon-Do Institute, la formación marcial, humana, deportiva y la innovación conviven bajo una misma visión: acompañar a cada persona en la construcción de su propio camino, junto a otros.</p>
        <div className="hti-institute__opening-image" aria-hidden="true">
          <img src="/images/institute/institute-01-mas-que-taekwondo.jpg" alt="" />
        </div>
      </InstituteSection>

      <InstituteSection index={1}>
        <h2 id="hti-instituto-title">LA IDEA DE INSTITUTO</h2>
        <p>Aprender una técnica es parte de un proceso más amplio. En HTI, lo que hacemos con el cuerpo se conecta con cómo nos sentimos, cómo nos relacionamos y qué elegimos construir.</p>
        <p>Somos un Instituto porque integramos cuatro pilares en un espacio de formación y pertenencia. Cada uno aporta al desarrollo de la persona, dentro y fuera del dojang.</p>
        <div className="hti-institute__pillars">
          {pillars.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </InstituteSection>

      <InstituteSection index={2}>
        <h2 id="hti-filosofia-title">NUESTRA FILOSOFÍA</h2>
        <div className="hti-institute__philosophy-opening">
          <p className="hti-institute__statement hti-institute__philosophy-manifesto">
            <span>NO FORMAMOS PERSONAS PARA</span>
            <span>OBEDECER UN MODELO.</span>
            <span>CREAMOS CONTEXTOS PARA QUE</span>
            <span>PUEDAN ELEGIR QUIÉNES QUIEREN</span>
            <span>SER.</span>
          </p>
        </div>
        <div className="hti-institute__philosophy-body">
          <p>El cuerpo, la emoción y la conversación forman parte de cómo aprendemos. Escuchar lo que nos pasa, reconocer nuestra manera de mirar una situación y abrirnos a otras perspectivas nos permite descubrir nuevas posibilidades de acción.</p>
          <p>Acompañamos a cada persona a tomar sus propias elecciones, asumir responsabilidad por ellas y sostenerlas con acciones. Ese aprendizaje se construye en la práctica y en el encuentro con otros.</p>
        </div>
        <div className="hti-institute__philosophy-closing">
          <p className="hti-institute__statement hti-institute__philosophy-strength">
            <span>LA FORTALEZA</span>
            <span>NO SE IMPONE.</span>
            <span className="hti-institute__philosophy-resolution">SE CONSTRUYE.</span>
          </p>
          <p className="hti-institute__statement hti-institute__philosophy-culmination">HACÉ DE VOS TU MAYOR FORTALEZA.</p>
        </div>
      </InstituteSection>

      <InstituteSection index={3}>
        <h2 id="hti-metodo-title"><span>MÉTODO</span>{' '}<span>HTI</span></h2>
        <p>Todo proceso comienza con la observación. Observar dónde estamos y qué queremos construir nos ayuda a elegir un camino y a reconocer los compromisos que estamos dispuestos a asumir.</p>
        <p>El entrenamiento convierte esa elección en práctica. Al sostenerla, podemos transformar nuestra manera de actuar y transmitir a otros lo aprendido.</p>
        <MethodCycle />
      </InstituteSection>

      <InstituteSection index={4}>
        <h2 id="hti-direccion-title"><span>UNA VISIÓN.</span>{' '}<span>UNA DIRECCIÓN.</span></h2>
        <div className="hti-institute__portrait">
          <img src="/images/favio-hernan-direccion.png" alt="Favio Hernán Albornoz" width="3508" height="4961" loading="lazy" decoding="async" />
        </div>
        <p className="hti-institute__statement">Favio Hernán Albornoz</p>
        <p>Instructor Internacional de Taekwon-Do ITF<br />Coach Ontológico Profesional</p>
        <p>Desde la dirección de HTI, integra la formación marcial y el acompañamiento humano. La enseñanza no parte únicamente de qué debe hacer una persona, sino también de cómo observa, cómo conversa, cómo elige y qué compromisos está dispuesta a asumir.</p>
      </InstituteSection>

      <InstituteSection index={5}>
        <h2 id="hti-competencia-title"><span>CUANDO LA ELECCIÓN SE</span>{' '}<span>CONVIERTE EN COMPROMISO,</span>{' '}<span>APARECEN NUEVOS DESAFÍOS.</span></h2>
        <p>La competencia y el alto rendimiento no son un punto de partida ni una obligación. Aparecen como posibilidades para quienes eligen ese recorrido y sostienen, con tiempo y acciones, el compromiso que requiere.</p>
        <p>Los torneos ofrecen un contexto de aprendizaje: prepararnos, actuar bajo presión, reconocer lo aprendido y revisar lo que necesitamos trabajar. El podio puede ser un resultado; no es el propósito que define a la persona ni la medida de su valor.</p>
        <div className="hti-institute__competition-images">
          <div className="hti-institute__competition-main">
            <img src="/images/institute/competition/IMG_2128.jpg" alt="Coach arrodillado acompañando a una competidora sentada durante el torneo" width="1365" height="2048" loading="lazy" decoding="async" />
          </div>
        </div>
      </InstituteSection>

      <InstituteSection index={6}>
        <h2 id="hti-innovacion-title">OBSERVAR TAMBIÉN ES PREGUNTARNOS SI LAS COSAS PUEDEN HACERSE DE OTRA MANERA.</h2>
        <p>La práctica nos invita a revisar lo conocido, escuchar necesidades y explorar nuevas respuestas. Innovar es llevar esas preguntas a la acción.</p>
        <p><strong>Hwarang Scoring Universe®</strong> es un desarrollo tecnológico nacido dentro del ecosistema HTI. Expresa nuestro compromiso con aportar al futuro del Taekwon-Do desde la experiencia y el aprendizaje compartido.</p>
      </InstituteSection>

      <InstituteSection index={7}>
        <h2 id="hti-pertenencia-title">HTI NO ES SOLAMENTE UN LUGAR AL QUE SE VIENE A ENTRENAR.<br />ES UN ESPACIO QUE CONSTRUIMOS ENTRE QUIENES ELEGIMOS SER PARTE.</h2>
        <p>Cada persona aporta su historia, sus preguntas y su compromiso. La pertenencia crece en lo cotidiano: al entrenar juntos, escucharnos y acompañar el camino de otros.</p>
        <p className="hti-institute__statement">TU PRÓXIMA VERSIÓN NO SE ENCUENTRA.<br />SE CONSTRUYE.</p>
        <p className="hti-institute__statement">HACÉ DE VOS TU MAYOR FORTALEZA.</p>
        <a className="hti-institute__cta" href="/#contacto">QUIERO COMENZAR</a>
      </InstituteSection>
    </main>
  )
}
