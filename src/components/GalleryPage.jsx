import '../styles/gallery.css'

// Copy provisional de la apertura, pendiente de validación editorial.
const opening = {
  eyebrow: 'GALERÍA',
  title: ['MOMENTOS QUE', 'NOS DEFINEN'],
  description: 'Imágenes que reflejan nuestro camino, nuestra comunidad y la esencia del Taekwon-Do en Hwarang.',
}

const categories = ['TODAS', 'ENTRENAMIENTO', 'GRADUACIONES', 'COMPETENCIA', 'SEMINARIOS', 'COMUNIDAD', 'EVENTOS']
// Geometría temporal para evaluar el ritmo; no define el futuro catálogo.
const placeholderShapes = ['wide', 'vertical', 'square', 'horizontal', 'vertical']

export default function GalleryPage() {
  return (
    <main className="hti-gallery">
      <div className="hti-gallery__inner">
        <header className="hti-gallery__opening">
          <div>
            <p className="hti-gallery__eyebrow">{opening.eyebrow}</p>
            <h1>{opening.title.map((line) => <span key={line}>{line}</span>)}</h1>
          </div>
          <p className="hti-gallery__intro">{opening.description}</p>
        </header>

        <section className="hti-gallery__archive" aria-label="Archivo visual HTI">
          <div className="hti-gallery__filters" role="group" aria-label="Categorías — próximamente disponibles">
            {categories.map((category, index) => (
              <button key={category} type="button" disabled aria-pressed={index === 0}
                className={index === 0 ? 'hti-gallery__filter hti-gallery__filter--selected' : 'hti-gallery__filter'}>
                {category}
              </button>
            ))}
          </div>
          <p className="hti-gallery__archive-note">El archivo visual está en preparación.</p>
          <div className="hti-gallery__grid" aria-hidden="true">
            {placeholderShapes.map((shape, index) => (
              <div key={index} className={`hti-gallery__placeholder hti-gallery__placeholder--${shape}`} />
            ))}
          </div>
        </section>

        <section className="hti-gallery__community" aria-labelledby="gallery-community-title">
          <div>
            <p className="hti-gallery__eyebrow">COMUNIDAD</p>
            <h2 id="gallery-community-title">VOS TAMBIÉN PODÉS SER PARTE DE NUESTRA HISTORIA</h2>
          </div>
          <div className="hti-gallery__community-copy">
            <p>¿Vas a acompañarnos a un torneo, examen, seminario o exhibición?</p>
            <p>Tu mirada también puede formar parte de la historia de Hwarang.</p>
            <a className="hti-gallery__guide" href="/galeria/guia">
              APRENDÉ A REGISTRAR UN MOMENTO HTI
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
