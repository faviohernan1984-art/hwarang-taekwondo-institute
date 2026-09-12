import { useEffect } from 'react'
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

export default function InstitutePage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Institute | Hwarang Taekwon-Do Institute'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main className="hti-institute">
      <InstituteSection index={0}>
        <h1 id="hti-apertura-title">HWARANG TAEKWON-DO INSTITUTE</h1>
        <p className="hti-institute__statement">MÁS QUE TAEKWON-DO</p>
        <p>En Hwarang Taekwon-Do Institute, la formación marcial, humana, deportiva y la innovación conviven bajo una misma visión: acompañar a cada persona en la construcción de su propio camino, junto a otros.</p>
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
        <p className="hti-institute__statement">NO FORMAMOS PERSONAS PARA OBEDECER UN MODELO.<br />CREAMOS CONTEXTOS PARA QUE PUEDAN ELEGIR QUIÉNES QUIEREN SER.</p>
        <p>El cuerpo, la emoción y la conversación forman parte de cómo aprendemos. Escuchar lo que nos pasa, reconocer nuestra manera de mirar una situación y abrirnos a otras perspectivas nos permite descubrir nuevas posibilidades de acción.</p>
        <p>Acompañamos a cada persona a tomar sus propias elecciones, asumir responsabilidad por ellas y sostenerlas con acciones. Ese aprendizaje se construye en la práctica y en el encuentro con otros.</p>
        <p className="hti-institute__statement">LA FORTALEZA NO SE IMPONE.<br />SE CONSTRUYE.</p>
        <p className="hti-institute__statement">HACÉ DE VOS TU MAYOR FORTALEZA.</p>
      </InstituteSection>

      <InstituteSection index={3}>
        <h2 id="hti-metodo-title">MÉTODO HTI</h2>
        <p>Todo proceso comienza con una elección. Observar dónde estamos y qué queremos construir nos ayuda a elegir un camino y a reconocer los compromisos que estamos dispuestos a asumir.</p>
        <p>El entrenamiento convierte esa elección en práctica. Al sostenerla, podemos transformar nuestra manera de actuar y transmitir a otros lo aprendido.</p>
        <ol className="hti-institute__method">
          {['OBSERVAR', 'ELEGIR', 'COMPROMETERSE', 'ENTRENAR', 'TRANSFORMAR', 'TRANSMITIR'].map(step => <li key={step}>{step}</li>)}
        </ol>
      </InstituteSection>

      <InstituteSection index={4}>
        <h2 id="hti-direccion-title">UNA VISIÓN. UNA DIRECCIÓN.</h2>
        <p className="hti-institute__statement">Favio Hernán Albornoz</p>
        <p>Instructor Internacional de Taekwon-Do ITF<br />Coach Ontológico Profesional</p>
        <p>Desde la dirección de HTI, integra la formación marcial y el acompañamiento humano. La enseñanza no parte únicamente de qué debe hacer una persona, sino también de cómo observa, cómo conversa, cómo elige y qué compromisos está dispuesta a asumir.</p>
      </InstituteSection>

      <InstituteSection index={5}>
        <h2 id="hti-competencia-title">CUANDO LA ELECCIÓN SE CONVIERTE EN COMPROMISO, APARECEN NUEVOS DESAFÍOS.</h2>
        <p>La competencia y el alto rendimiento no son un punto de partida ni una obligación. Aparecen como posibilidades para quienes eligen ese recorrido y sostienen, con tiempo y acciones, el compromiso que requiere.</p>
        <p>Los torneos ofrecen un contexto de aprendizaje: prepararnos, actuar bajo presión, reconocer lo aprendido y revisar lo que necesitamos trabajar. El podio puede ser un resultado; no es el propósito que define a la persona ni la medida de su valor.</p>
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
