import '../styles/gallery-guide.css'

function FramingDiagram({ tight = false }) {
  return (
    <figure className="hti-gallery-guide__example">
      <div className={`hti-gallery-guide__frame${tight ? ' hti-gallery-guide__frame--tight' : ''}`} aria-hidden="true">
        <div className="hti-gallery-guide__person"><i /><span /><b /><em /></div>
      </div>
      <figcaption><strong>{tight ? 'MAL' : 'BIEN'}</strong>{tight ? 'El encuadre corta la acción.' : 'La acción tiene aire alrededor.'}</figcaption>
    </figure>
  )
}

export default function GalleryGuidePage() {
  return (
    <main className="hti-gallery-guide">
      <div className="hti-gallery-guide__inner">
        <header className="hti-gallery-guide__opening">
          <a className="hti-gallery-guide__back" href="/galeria">← VOLVER A GALERÍA</a>
          <p className="hti-gallery-guide__eyebrow">GUÍA FOTOGRÁFICA HTI</p>
          <h1>REGISTRÁ<br />EL MOMENTO</h1>
          <div className="hti-gallery-guide__intro">
            <p className="hti-gallery-guide__lead">No necesitás ser fotógrafo.</p>
            <p>Con algunas decisiones simples podés ayudarnos a conservar los momentos que construyen la historia de Hwarang.</p>
          </div>
        </header>

        <section className="hti-gallery-guide__section" aria-labelledby="guide-look">
          <div>
            <p className="hti-gallery-guide__eyebrow">01 — MIRÁ ANTES DE FOTOGRAFIAR</p>
            <h2 id="guide-look">NO TODO<br />ES EL PODIO.</h2>
          </div>
          <div className="hti-gallery-guide__body">
            <p>La historia también ocurre antes y después.</p>
            <ul className="hti-gallery-guide__moments">
              {['Preparación.', 'Concentración.', 'Compañeros.', 'Familias.', 'Entrenamiento.', 'Emoción.', 'Encuentros.'].map((moment) => <li key={moment}>{moment}</li>)}
            </ul>
            <p>Buscá esos momentos auténticos, además de las fotos posadas.</p>
          </div>
        </section>

        <section className="hti-gallery-guide__section" aria-labelledby="guide-space">
          <div>
            <p className="hti-gallery-guide__eyebrow">02 — NO CORTES LA ACCIÓN</p>
            <h2 id="guide-space">DEJÁ AIRE.</h2>
          </div>
          <div className="hti-gallery-guide__body">
            <p>Cuando fotografíes una técnica o una persona, evitá cortar cabeza, manos, pies o elementos importantes.</p>
            <p>Dejá espacio alrededor de la acción.</p>
            <div className="hti-gallery-guide__diagrams"><FramingDiagram tight /><FramingDiagram /></div>
          </div>
        </section>

        <section className="hti-gallery-guide__section" aria-labelledby="guide-orientation">
          <div>
            <p className="hti-gallery-guide__eyebrow">03 — VERTICAL + HORIZONTAL</p>
            <h2 id="guide-orientation">SI EL MOMENTO LO PERMITE,<br />HACÉ LAS DOS.</h2>
          </div>
          <div className="hti-gallery-guide__body">
            <div className="hti-gallery-guide__diagrams">
              <figure className="hti-gallery-guide__example">
                <div className="hti-gallery-guide__orientation" aria-hidden="true"><span className="hti-gallery-guide__portrait" /></div>
                <figcaption><strong>VERTICAL</strong>Funciona especialmente bien en teléfonos.</figcaption>
              </figure>
              <figure className="hti-gallery-guide__example">
                <div className="hti-gallery-guide__orientation" aria-hidden="true"><span className="hti-gallery-guide__landscape" /></div>
                <figcaption><strong>HORIZONTAL</strong>Conserva mejor escenas amplias, grupos y acciones.</figcaption>
              </figure>
            </div>
            <p className="hti-gallery-guide__note">HTI realizará después las adaptaciones necesarias.</p>
          </div>
        </section>

        <section className="hti-gallery-guide__section" aria-labelledby="guide-quality">
          <div>
            <p className="hti-gallery-guide__eyebrow">04 — CALIDAD ANTES QUE ZOOM</p>
            <h2 id="guide-quality">ACERCATE VOS,<br />NO LA IMAGEN.</h2>
          </div>
          <div className="hti-gallery-guide__body">
            <ul className="hti-gallery-guide__quality">
              <li>Usá la máxima calidad disponible.</li>
              <li>Evitá el zoom digital cuando sea posible.</li>
              <li>Conservá el archivo original.</li>
              <li>No envíes capturas de pantalla.</li>
              <li>No apliques filtros fuertes antes de compartir.</li>
            </ul>
          </div>
        </section>

        <section className="hti-gallery-guide__section" aria-labelledby="guide-moments">
          <div>
            <p className="hti-gallery-guide__eyebrow">05 — CAPTURÁ LO QUE PASA</p>
            <h2 id="guide-moments">BUSCAMOS MOMENTOS,<br />NO PERFECCIÓN.</h2>
          </div>
          <div className="hti-gallery-guide__body">
            <ul className="hti-gallery-guide__moments">
              {['Una mirada.', 'Una espera.', 'Un abrazo.', 'Una indicación.', 'Una técnica.', 'Una celebración.', 'Una familia acompañando.', 'Un grupo preparándose.'].map((moment) => <li key={moment}>{moment}</li>)}
            </ul>
            <p>Vos estuviste ahí. El valor está en conservar la experiencia real de Hwarang.</p>
          </div>
        </section>

        <section className="hti-gallery-guide__closing" aria-labelledby="guide-community">
          <p className="hti-gallery-guide__eyebrow">NUESTRA HISTORIA</p>
          <h2 id="guide-community">TU MIRADA TAMBIÉN<br />FORMA PARTE DE HWARANG.</h2>
          <p>Si acompañaste un torneo, examen, seminario, exhibición o actividad de Hwarang, tus fotografías pueden ayudarnos a conservar nuestra historia.</p>
          {/* Recepción futura, aún no habilitada:
              ENVIAR → CONDICIONES / AUTORIZACIÓN → ACEPTACIÓN EXPRESA → CARGA.
              La aceptación será obligatoria, mediante una acción afirmativa;
              sin ella no se permitirá continuar ni acceder a la carga.
              Antes de habilitar la recepción, elaborar y revisar los términos:
              aporte voluntario; identificación de HWARANG TAEKWON-DO INSTITUTE
              como receptor autorizado; uso de fotografías aceptadas en sitio web,
              Galería, redes sociales, comunicación y archivo institucional;
              adaptación de tamaño, encuadre, formato e identificación institucional;
              autoría/créditos; condiciones sobre personas retratadas y menores;
              mecanismo para consultas y solicitudes posteriores.
              Esta previsión no constituye una autorización ni texto jurídico.
          */}
          <button className="hti-gallery-guide__submit" type="button" disabled aria-describedby="guide-coming-soon">ENVIAR MIS FOTOGRAFÍAS</button>
          <p id="guide-coming-soon" className="hti-gallery-guide__soon">PRÓXIMAMENTE</p>
        </section>
      </div>
    </main>
  )
}
