import '../styles/history.css'

const competitions = [
  ['Panamericano', 'ITF Union Open Argentina — 2024'],
  ['Nacional', 'FEDART — 2025'],
  ['World Championship Argentina', 'ITFU Open — 2025'],
]

export default function HistoryPage() {
  return (
    <main className="hti-history" aria-labelledby="history-title">
      <section className="hti-history__opening" aria-labelledby="history-title">
        {/* Reserved for a future approved historical photograph; intentionally empty. */}
        <div className="hti-history__archive" aria-hidden="true" />
        <div className="hti-history__opening-copy">
          <h1 className="hti-history__label" id="history-title">Historia</h1>
          <p className="hti-history__opening-statement">Antes del Instituto<br />hubo un practicante.<span>Antes del director<br />hubo un alumno.</span></p>
          <div className="hti-history__origin-note">
            <p className="hti-history__label">1998 — Rafaela</p>
            <p>Comenzó un recorrido que todavía continúa.</p>
          </div>
        </div>
        <a className="hti-history__read" href="#historia-comienzo">Recorrer la historia <span aria-hidden="true">↓</span></a>
      </section>

      <div className="hti-history__chapters">
        <section className="hti-history__chapter hti-history__beginning" id="historia-comienzo" aria-labelledby="history-beginning" tabIndex={-1}>
          <div><p className="hti-history__label">1998 — El comienzo</p><p className="hti-history__year" aria-hidden="true">1998<span>Rafaela, octubre</span></p></div>
          <div className="hti-history__copy">
            <h2 id="history-beginning">Aprender.</h2>
            <p>En octubre de 1998, Favio H. Albornoz comenzó la práctica del Taekwon-Do en Rafaela.</p>
            <p className="hti-history__aside">Antes de enseñar hubo que aprender.<br />Antes de dirigir hubo que permanecer.</p>
          </div>
        </section>

        <section className="hti-history__chapter hti-history__permanence" aria-labelledby="history-permanence">
          <div><p className="hti-history__label">2004 — Permanecer</p><h2 id="history-permanence">Seguir<br />entrenando.</h2></div>
          <div className="hti-history__copy">
            <p>A partir de 2004 comenzó una extensa etapa de continuidad y formación atravesada por cambios en la conducción técnica.</p>
            <p>Durante aproximadamente diez años, el camino continuó sin una dirección superior estable.</p>
            <p className="hti-history__aside">Todavía no existía una institución propia. El recorrido seguía tomando forma.</p>
          </div>
        </section>

        <section className="hti-history__chapter hti-history__advance" aria-labelledby="history-advance">
          <p className="hti-history__label">2014 — Volver a avanzar</p>
          <div className="hti-history__copy"><h2 id="history-advance">Retomar una dirección.</h2><p>En 2014 comienza una nueva etapa de formación estructurada. El recorrido vuelve a expresarse también a través de graduaciones sucesivas.</p></div>
        </section>

        <section className="hti-history__responsibility" aria-labelledby="history-responsibility">
          <p className="hti-history__label">2017 — I Dan</p>
          <h2 id="history-responsibility">El cinturón negro<br />no cerró una etapa.<span>Cambió la responsabilidad.</span></h2>
          <p>El <time dateTime="2017-12-06">6 de diciembre de 2017</time>, Favio alcanza la graduación de I Dan.</p>
          <p>La práctica abre paso a una nueva responsabilidad: enseñar.</p>
        </section>
      </div>

      <section className="hti-history__foundation" aria-labelledby="history-foundation">
        <div className="hti-history__foundation-inner">
          <p className="hti-history__label">2019 — Nace Hwa-Rang</p>
          <h2 id="history-foundation">De aprender<br />a compartir<br /><span>lo aprendido.</span></h2>
          <div className="hti-history__foundation-detail"><p className="hti-history__date">09.04.2019</p><div className="hti-history__copy"><p>El 9 de abril de 2019 comienza formalmente la actividad de la Academia Hwa-Rang en Rafaela.</p><p>Favio comienza a dar clases siendo I Dan. Al recorrido del practicante se suma el del fundador y el instructor.</p></div></div>
        </div>
      </section>

      <div className="hti-history__chapters">
        <section className="hti-history__chapter hti-history__formation" aria-labelledby="history-formation">
          <div className="hti-history__copy"><p className="hti-history__label">Formar</p><h2 id="history-formation">El camino<br />continúa en otros.</h2><p>Con el crecimiento de la escuela comenzaron las graduaciones de sus propios alumnos.</p><p>Hasta el presente se han formado:</p></div>
          <p className="hti-history__number"><span>11</span>cinturones negros</p>
        </section>

        <section className="hti-history__competition" aria-labelledby="history-competition">
          <div className="hti-history__chapter"><div><p className="hti-history__label">2024–2025 — Más allá del dojang</p><h2 id="history-competition">También se aprende<br />al competir.</h2></div><p className="hti-history__copy">La competencia es parte del proceso formativo. Una forma de poner en práctica lo aprendido y seguir creciendo.</p></div>
          <ul className="hti-history__events">{competitions.map(([title, detail]) => <li key={title}><h3>{title}</h3><p>{detail}</p><p>Participación con campeones.</p></li>)}</ul>
        </section>

        <section className="hti-history__chapter hti-history__learning" aria-labelledby="history-learning">
          <div><p className="hti-history__label">2020–2023 — Continuar aprendiendo</p><h2 id="history-learning">Seguir siendo<br />alumno.</h2></div>
          <div className="hti-history__copy"><p className="hti-history__aside">La enseñanza no reemplazó la condición de alumno.</p><p>Mientras la escuela crecía, la formación personal continuaba.</p><dl className="hti-history__degrees"><div><dt>II Dan</dt><dd><time dateTime="2020-12-16">16 de diciembre de 2020</time></dd></div><div><dt>III Dan</dt><dd><time dateTime="2023-11-25">25 de noviembre de 2023</time></dd></div></dl></div>
        </section>

        <section className="hti-history__chapter hti-history__present" aria-labelledby="history-present">
          <div><p className="hti-history__label">2025 → Presente — Transformación</p><h2 id="history-present">Una historia<br />abierta.</h2></div>
          <div className="hti-history__copy"><p>Durante 2025 comienza una nueva etapa técnica e institucional que posteriormente desemboca en el presente de HTI.</p><p>El vínculo actual con el maestro Sebastián Pinto, VII Dan, y el Círculo Cerrado de Competición forma parte de este presente.</p></div>
        </section>
      </div>

      <footer className="hti-history__closing">
        <p className="hti-history__label">Hwarang Taekwon-Do Institute</p>
        <h2>La historia no termina<br />en el presente.</h2>
        <p>El presente es la parte que estamos escribiendo ahora.</p>
        <a className="hti-history__cta" href="/institute">Conocé el Instituto <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  )
}
