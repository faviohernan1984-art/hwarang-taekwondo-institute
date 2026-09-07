import '../styles/evolution.css'

const scenes = [
  { id: 'evolution-evolucion', name: 'Evolución' },
  { id: 'evolution-origen', name: 'Origen' },
  { id: 'evolution-formacion', name: 'Formación' },
  { id: 'evolution-identidad', name: 'Identidad' },
  { id: 'evolution-innovacion', name: 'Innovación' },
  { id: 'evolution-esencia', name: 'Esencia' },
  { id: 'evolution-hti', name: 'HTI' },
]

function navigateToScene(event) {
  // Keep modified clicks and the link's native fallback available.
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

  const hash = event.currentTarget.hash
  const destination = document.getElementById(hash.slice(1))
  if (!destination) return

  event.preventDefault()
  if (window.location.hash !== hash) window.history.pushState(null, '', hash)

  // Focus must not introduce a second scroll after the requested alignment.
  destination.focus({ preventScroll: true })
  destination.scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  })
}

function Scene({ index, variant, media = false, children }) {
  const scene = scenes[index]
  const previous = scenes[index - 1]
  const next = scenes[index + 1]

  return (
    <section
      id={scene.id}
      className={`evolution__scene evolution__scene--${variant}${media ? ' evolution__scene--media-ready' : ''}`}
      aria-labelledby={`${scene.id}-title`}
      tabIndex={-1}
    >
      {/* Reserved for approved full-bleed photography and its overlay. No placeholder image. */}
      {media && <div className="evolution__media" aria-hidden="true" />}
      <div className="evolution__composition">{children}</div>
      <nav className="evolution__navigation" aria-label={`Navegación de escena ${index + 1}: ${scene.name}`}>
        {previous && (
          <a className="evolution__previous" href={`#${previous.id}`} onClick={navigateToScene} aria-label={`Escena anterior: ${previous.name}`}>
            <span aria-hidden="true">↑</span> ANTERIOR
          </a>
        )}
        <span className="evolution__position" aria-label={`Escena ${index + 1} de ${scenes.length}`}>
          {String(index + 1).padStart(2, '0')} / {String(scenes.length).padStart(2, '0')}
        </span>
        {next && (
          <a className="evolution__next" href={`#${next.id}`} onClick={navigateToScene} aria-label={`Escena siguiente: ${next.name}`}>
            SIGUIENTE <span aria-hidden="true">↓</span>
          </a>
        )}
      </nav>
    </section>
  )
}

export default function EvolutionPage() {
  return (
    <main className="evolution">
      <Scene index={0} variant="revelation">
        <p className="evolution__eyebrow">EVOLUCIÓN INSTITUCIONAL</p>
        <h1 id="evolution-evolucion-title" className="evolution__revelation-title">
          <span>HWARANG ACADEMIAS</span>
          EVOLUCIONA
        </h1>
        <div className="evolution__birth">
          <p className="evolution__nace">Nace</p>
          <p className="evolution__wordmark">HWARANG <span>TAEKWON-DO INSTITUTE</span></p>
        </div>
        <p className="evolution__launch">Un nuevo nombre<br />La misma esencia<br /><span>Un propósito más grande</span></p>
      </Scene>

      <Scene index={1} variant="origin" media>
        <div className="evolution__heading">
          <p className="evolution__eyebrow">ORIGEN</p>
          <h2 id="evolution-origen-title" className="evolution__title evolution__title--large">CRECIMOS</h2>
        </div>
        <div className="evolution__copy">
          <p>Durante años, Hwarang Academias fue el nombre que acompañó nuestros primeros pasos y el crecimiento de nuestra comunidad.</p>
          <p>Clases, graduaciones, competencias, viajes, desafíos, aprendizajes y logros fueron construyendo una historia que comenzó a trascender la idea de una academia.</p>
          <p className="evolution__intimate">Hwarang creció</p>
          <p>Y mientras crecíamos, también evolucionó nuestra manera de entender la enseñanza.</p>
        </div>
        <p className="evolution__declaration evolution__declaration--wide">
          <span className="evolution__premise">HWARANG ACADEMIAS NO DESAPARECE</span>
          EVOLUCIONA
        </p>
      </Scene>

      <Scene index={2} variant="formation" media>
        <div className="evolution__heading">
          <p className="evolution__eyebrow">FORMACIÓN</p>
          <h2 id="evolution-formacion-title" className="evolution__title">MUCHO MÁS QUE ENSEÑAR TAEKWON-DO</h2>
        </div>
        <div className="evolution__human-path evolution__copy">
          <p>A Hwarang llegan personas diferentes.</p>
          <p>Con distintas historias, personalidades, capacidades, tiempos y maneras de aprender.</p>
          <p>Algunos encuentran rápidamente su lugar.<br />Otros necesitan más tiempo.</p>
          <p>Algunos llegan buscando competir.<br />Otros, confianza.</p>
          <p>Algunos necesitan aprender a concentrarse.<br />Otros, animarse a participar, relacionarse, perseverar o simplemente descubrir que también pueden.</p>
          <p className="evolution__affirmation">EN HWARANG TODOS EMPIEZAN DESDE ALGÚN LUGAR</p>
          <p className="evolution__affirmation">Y TODOS TIENEN UN LUGAR DESDE DONDE CRECER</p>
        </div>
        <div className="evolution__human-purpose evolution__copy">
          <p>Con el tiempo comprendimos algo.</p>
          <p className="evolution__affirmation">EL TAEKWON-DO ES EL PUNTO DE PARTIDA</p>
          <p>La disciplina, la práctica, los desafíos y el acompañamiento construyen el camino.</p>
          <p>Pero hay algo que nadie puede recorrer por nosotros:</p>
          <p className="evolution__declaration">DESCUBRIR DE QUÉ SOMOS CAPACES</p>
          <blockquote className="evolution__philosophy">
            <p>“Muchos se convirtieron primero en campeones de la vida, antes que en campeones de Taekwon-Do.”</p>
          </blockquote>
        </div>
      </Scene>

      <Scene index={3} variant="identity">
        <div className="evolution__heading">
          <p className="evolution__eyebrow">IDENTIDAD</p>
          <h2 id="evolution-identidad-title" className="evolution__title">¿POR QUÉ INSTITUTE?</h2>
        </div>
        <div className="evolution__identity-pair">
          <p><strong>ACADEMIAS</strong><span>CONTÓ NUESTRO ORIGEN</span></p>
          <p><strong>INSTITUTE</strong><span>EXPRESA NUESTRO FUTURO</span></p>
        </div>
        <div className="evolution__copy">
          <p>Hwarang Taekwon-Do Institute expresa una concepción más amplia de nuestra misión.</p>
          <p>Formación marcial, humana, deportiva y educativa.</p>
          <p>Un espacio para aprender, competir, enseñar, liderar, investigar, desarrollar y crear.</p>
        </div>
        <p className="evolution__declaration evolution__declaration--wide evolution__thesis">
          <span className="evolution__premise">NO CAMBIAMOS PARA SER OTRA COSA</span>
          CAMBIAMOS EL NOMBRE PORQUE HWARANG YA HABÍA EVOLUCIONADO
        </p>
      </Scene>

      <Scene index={4} variant="innovation" media>
        <div className="evolution__heading">
          <p className="evolution__eyebrow">INNOVACIÓN</p>
          <h2 id="evolution-innovacion-title" className="evolution__title">
            TRADICIÓN <span className="evolution__plus">+</span> INNOVACIÓN
          </h2>
        </div>
        <div className="evolution__copy">
          <p>La experiencia construida en el dojang y en competencia también nos llevó a imaginar nuevas herramientas.</p>
          <p>De esa búsqueda nació <span className="evolution__emphasis">Hwarang Scoring Universe®.</span></p>
          <p className="evolution__declaration">LA INNOVACIÓN<br />TAMBIÉN PUEDE<br />NACER DEL DOJANG</p>
          <p>Tecnología desarrollada desde nuestra propia experiencia para contribuir a nuevas formas de vivir y organizar la competencia.</p>
        </div>
      </Scene>

      <Scene index={5} variant="essence" media>
        <div className="evolution__heading">
          <p className="evolution__eyebrow">ESENCIA</p>
          <h2 id="evolution-esencia-title" className="evolution__title">HAY ALGO<br />QUE NO CAMBIA</h2>
        </div>
        <div className="evolution__copy">
          <p className="evolution__intimate">Seguimos siendo Hwarang</p>
          <p>Seguimos creyendo en la disciplina, el respeto, la perseverancia y el trabajo.</p>
          <p>Seguimos acompañando a cada persona desde el lugar en el que comienza.</p>
        </div>
        <p className="evolution__declaration evolution__declaration--wide">
          <span className="evolution__premise">EVOLUCIONAR NO ES<br />DEJAR ATRÁS NUESTRA HISTORIA</span>
          ES CONSTRUIR SOBRE ELLA
        </p>
      </Scene>

      <Scene index={6} variant="closing">
        <h2 id="evolution-hti-title" className="evolution__wordmark">HWARANG <span>TAEKWON-DO INSTITUTE</span></h2>
        <p className="evolution__slogan">HACÉ DE VOS<br />TU MAYOR FORTALEZA</p>
        <div className="evolution__signature">
          <p>Rafaela · Santa Fe · Argentina</p>
          <p>Dirección: <span>Favio Hernán Albornoz</span></p>
        </div>
        <a className="evolution__cta" href="/">CONOCÉ HTI <span aria-hidden="true">→</span></a>
      </Scene>
    </main>
  )
}
