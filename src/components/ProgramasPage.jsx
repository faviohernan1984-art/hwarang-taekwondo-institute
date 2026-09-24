import '../styles/programas.css'

export default function ProgramasPage() {
  return (
    <main className="programas" id="programas-contenido">
      <section className="programas__chapter programas__chapter--opening" aria-labelledby="programas-title">
        <span className="programas__number" aria-hidden="true">00</span>
        <header className="programas__heading">
          <p className="programas__eyebrow">PROGRAMAS</p>
          <h1 id="programas-title"><span>Una disciplina.</span>{' '}<span>Diferentes caminos.</span></h1>
        </header>
        <div className="programas__body">
          <p className="programas__subtitle">Taekwon-Do como punto de partida para aprender, entrenar y construir un recorrido propio.</p>
          <p>A Hwarang Taekwon-Do Institute llegan personas con experiencias y búsquedas diferentes. Algunas quieren conocer un arte marcial. Otras buscan disciplina, preparación deportiva o una práctica que puedan sostener en el tiempo.</p>
          <p>También están quienes, durante su trayectoria, eligen competir, arbitrar, enseñar o asumir nuevas responsabilidades.</p>
          <p>Todos esos recorridos pueden comenzar en un mismo lugar: la práctica del Taekwon-Do.</p>
          <p>En HTI, la formación no es una suma de servicios aislados. Es un proceso en el que la técnica, el cuerpo, las decisiones, la relación con otros y los compromisos que cada persona elige asumir forman parte de un mismo camino.</p>
          <p>No todos llegan buscando lo mismo. No todos necesitan avanzar de la misma manera.</p>
        </div>
      </section>

      <section className="programas__chapter" aria-labelledby="programas-taekwon-do-title">
        <span className="programas__number" aria-hidden="true">01</span>
        <header className="programas__heading">
          <h2 id="programas-taekwon-do-title">TAEKWON-DO</h2>
        </header>
        <div className="programas__body">
          <p className="programas__subtitle">El arte marcial que da origen al camino.</p>
          <p>El Taekwon-Do es la disciplina marcial central de Hwarang Taekwon-Do Institute. Su práctica integra aprendizaje técnico, entrenamiento físico, disciplina y respeto.</p>
          <p>Aprender un arte marcial no consiste solamente en incorporar movimientos. También implica entrenar la atención, sostener la práctica y actuar con mayor conciencia sobre las propias decisiones.</p>
          <p>Las clases de Taekwon-Do de HTI se desarrollan en Rafaela, Santa Fe. Cada persona comienza desde su situación actual, con sus tiempos y posibilidades.</p>
          <p>Para algunas, será una práctica sostenida. Para otras, abrirá caminos hacia la competencia, el arbitraje o la enseñanza. El punto de partida es compartido; la dirección puede cambiar.</p>
          <a className="programas__cta" href="/sedes">CONOCÉ LA SEDE Y LOS HORARIOS</a>
        </div>
      </section>

      <section className="programas__chapter programas__chapter--formation" aria-labelledby="programas-formacion-integral-title programas-defensa-personal-title">
        <span className="programas__number" aria-hidden="true">02</span>
        <div className="programas__formation">
          <section className="programas__formation-main" aria-labelledby="programas-formacion-integral-title">
            <header className="programas__heading">
              <h2 id="programas-formacion-integral-title">FORMACIÓN INTEGRAL</h2>
            </header>
            <div className="programas__body">
              <p className="programas__subtitle">La técnica forma parte del aprendizaje. No lo agota.</p>
              <p>La práctica marcial sucede con el cuerpo, pero también con las emociones, las conversaciones y las decisiones.</p>
              <p>Aprender requiere observar cómo reaccionamos ante una dificultad, cómo nos relacionamos con otros y qué hacemos cuando algo no resulta como esperábamos.</p>
              <p>La disciplina no se reduce a obedecer una indicación. Se construye al elegir un compromiso, sostenerlo y asumir responsabilidad por las propias acciones. El respeto aparece en la forma de entrenar, escuchar y cuidar a quienes comparten la práctica.</p>
              <p>En ese proceso también pueden desarrollarse capacidades vinculadas con el liderazgo: comunicar, decidir, acompañar, ejercer autocontrol y asumir responsabilidades frente a otros.</p>
              <p>El liderazgo no es un curso independiente ni un resultado garantizado. Es una dimensión que puede construirse cuando el recorrido elegido exige nuevas formas de participación y conducción.</p>
              <a className="programas__cta" href="/institute">CONOCÉ LA VISIÓN DE HTI</a>
            </div>
          </section>
          <section className="programas__formation-secondary" aria-labelledby="programas-defensa-personal-title">
            <header className="programas__heading">
              <h2 id="programas-defensa-personal-title">DEFENSA PERSONAL</h2>
            </header>
            <div className="programas__body">
              <p className="programas__subtitle">Defenderse también implica comprender cuándo no actuar.</p>
              <p>La defensa personal es una dimensión inherente a la práctica y la formación marcial del Taekwon-Do. En HTI no se presenta como una disciplina paralela ni como un producto independiente.</p>
              <p>Aprender recursos físicos forma parte del recorrido, pero no es suficiente por sí mismo. La capacidad técnica debe estar acompañada por criterio, autocontrol, responsabilidad y evaluación de las consecuencias.</p>
              <p>Una intervención física puede ser necesaria en determinadas circunstancias. En otras, tomar distancia, pedir ayuda o evitar una confrontación constituye una decisión más responsable.</p>
              <p>Defenderse no significa solamente reaccionar. También supone reconocer límites, interpretar una situación y decidir con madurez cuándo actuar y cuándo no hacerlo.</p>
              <p>HTI no promete seguridad ni resultados garantizados. Propone una formación marcial en la que la técnica debe estar acompañada por conciencia y responsabilidad.</p>
            </div>
          </section>
        </div>
      </section>

      <section className="programas__chapter programas__chapter--paths" aria-labelledby="programas-caminos-title">
        <span className="programas__number" aria-hidden="true">03</span>
        <header className="programas__heading">
          <h2 id="programas-caminos-title">DIFERENTES CAMINOS</h2>
        </header>
        <div className="programas__body">
          <p className="programas__subtitle">La práctica es compartida. La trayectoria puede tomar distintas direcciones.</p>
          <p>Con el tiempo, una misma persona puede atravesar, combinar o dejar atrás diferentes roles. Práctica, competencia, arbitraje y enseñanza no son destinos finales ni recorridos necesariamente excluyentes.</p>
          <p>Cada camino requiere aprendizajes y compromisos particulares. Ninguno constituye por sí mismo una categoría superior de practicante.</p>
          <div className="programas__paths">
            <article className="programas__path" aria-labelledby="programas-practica-title">
              <h3 id="programas-practica-title">Práctica</h3>
              <p>Entrenar de manera recreativa y sostenida es un recorrido con valor propio.</p>
              <p>Permite continuar aprendiendo, cuidar el cuerpo, profundizar la técnica y participar de una comunidad sin que competir, arbitrar o enseñar sean objetivos obligatorios.</p>
            </article>
            <article className="programas__path" aria-labelledby="programas-competencia-title">
              <h3 id="programas-competencia-title">Competencia</h3>
              <p>La competencia puede convertirse en un contexto de aprendizaje para quienes eligen ese desafío.</p>
              <p>Prepararse, actuar bajo presión y revisar lo realizado forman parte del proceso. El resultado importa, pero no define el valor de quien compite.</p>
            </article>
            <article className="programas__path" aria-labelledby="programas-arbitraje-title">
              <h3 id="programas-arbitraje-title">Arbitraje</h3>
              <p>El arbitraje propone otra forma de comprender el Taekwon-Do.</p>
              <p>El rol de umpire requiere estudiar, observar, interpretar criterios y decidir con responsabilidad. También demanda ecuanimidad, comunicación y compromiso con quienes participan.</p>
            </article>
            <article className="programas__path" aria-labelledby="programas-ensenanza-title">
              <h3 id="programas-ensenanza-title">Enseñanza</h3>
              <p>Enseñar implica más que demostrar una técnica.</p>
              <p>Requiere observar a otras personas, reconocer diferentes maneras de aprender, comunicar con claridad y construir contextos donde cada practicante pueda avanzar.</p>
              <p>Para algunos practicantes avanzados, transmitir lo aprendido puede convertirse en una nueva etapa de su formación.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="programas__chapter" aria-labelledby="programas-instructores-title">
        <span className="programas__number" aria-hidden="true">04</span>
        <header className="programas__heading">
          <h2 id="programas-instructores-title">FORMACIÓN DE INSTRUCTORES</h2>
        </header>
        <div className="programas__body">
          <p className="programas__subtitle">Saber hacer no equivale necesariamente a saber enseñar.</p>
          <p>HTI desarrolla instancias de formación para practicantes avanzados e instructores interesados en enseñar y conducir procesos de aprendizaje.</p>
          <p>El conocimiento marcial es la base, pero enseñar requiere otras capacidades: planificar, comunicar, observar, adaptar una explicación y acompañar a personas con experiencias, tiempos y necesidades diferentes.</p>
          <p>La pedagogía aplicada a la enseñanza marcial permite comprender cómo se construye una clase, cómo se organiza un grupo y qué responsabilidades implica ocupar un lugar de referencia.</p>
          <p>Este recorrido también comprende liderazgo, conducción, comunicación y compromiso. No como atributos automáticos de un grado o jerarquía, sino como capacidades que deben desarrollarse y sostenerse en la práctica.</p>
          <p>Para algunas personas, la enseñanza puede convertirse además en una dimensión de desarrollo profesional. Esa posibilidad requiere preparación, experiencia y continuidad. No constituye una garantía de empleo, ingresos o salida laboral.</p>
          <p>No todos los practicantes avanzados elegirán enseñar. Quienes lo hagan encontrarán un nuevo campo de aprendizaje: contribuir al camino de otros.</p>
          <a className="programas__cta" href="https://wa.me/5493492611568" target="_blank" rel="noopener noreferrer">CONSULTÁ SOBRE EL RECORRIDO DE FORMACIÓN</a>
        </div>
      </section>

      <section className="programas__chapter programas__chapter--fuerza" aria-labelledby="programas-fuerza-title">
        <span className="programas__number" aria-hidden="true">05</span>
        <header className="programas__heading">
          <h2 id="programas-fuerza-title">FUERZA</h2>
        </header>
        <div className="programas__body">
          <p className="programas__subtitle">Una propuesta de preparación y acondicionamiento con identidad propia.</p>
          <p>FUERZA es una propuesta de entrenamiento con pesas y aparatos que posee identidad propia dentro de HTI.</p>
          <p>Puede complementar la preparación de quienes practican Taekwon-Do o participan en competencia, pero no está limitada a esos recorridos. También está abierta a deportistas y público general.</p>
          <p>No es necesario practicar Taekwon-Do para formar parte de FUERZA.</p>
          <p>Ambas propuestas conservan su propósito y comparten una misma valoración del entrenamiento sostenido, el compromiso y el cuidado del proceso.</p>
          <p>Los días y horarios confirmados se encuentran en la página de la sede.</p>
          <a className="programas__cta" href="/sedes">CONOCÉ FUERZA Y SUS HORARIOS</a>
        </div>
      </section>

      <section className="programas__chapter programas__chapter--closing" aria-labelledby="programas-primer-paso-title">
        <span className="programas__number" aria-hidden="true">06</span>
        <header className="programas__heading">
          <h2 id="programas-primer-paso-title">EL PRIMER PASO</h2>
        </header>
        <div className="programas__body">
          <p className="programas__subtitle">No necesitás conocer todo el recorrido para comenzar.</p>
          <p>Todo recorrido empieza antes de saber hasta dónde puede llegar.</p>
          <p>No hace falta tener experiencia, conocer cada técnica ni decidir desde el comienzo qué lugar va a ocupar el Taekwon-Do en tu vida. Alcanza con estar dispuesto a aprender, entrenar y descubrir qué podés construir a partir de la práctica.</p>
          <p className="programas__closing-pause">El camino se define mientras se recorre.</p>
          <p>Si sentís que puede ser el momento de empezar, el primer paso es simple: acercarte, conocernos y entrenar.</p>
          <div className="programas__actions">
            <a className="programas__cta" href="https://wa.me/5493492611568" target="_blank" rel="noopener noreferrer">QUIERO HACER UNA CONSULTA</a>
          </div>
        </div>
      </section>
    </main>
  )
}
