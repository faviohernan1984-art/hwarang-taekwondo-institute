import { useState } from 'react'
import { filterCollections } from '../data/galleryActions.js'
import '../styles/gallery.css'
import { galleryCollections, getCollectionPhotos, galleryCategoryLabels } from '../data/galleryCollections.js'

// Copy provisional de la apertura, pendiente de validación editorial.
const opening = {
  eyebrow: 'GALERÍA',
  title: ['MOMENTOS QUE', 'NOS DEFINEN'],
  description: 'Imágenes que reflejan nuestro camino, nuestra comunidad y la esencia del Taekwon-Do en Hwarang.',
}

const categories = [['todas', 'Todas'], ...Object.entries(galleryCategoryLabels)]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('todas')
  const visibleCollections = filterCollections(galleryCollections, selectedCategory)
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
          <div className="hti-gallery__filters" role="group" aria-label="Categorías de colecciones">
            {categories.map(([category, label]) => (
              <button key={category} type="button" onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category}
                className={selectedCategory === category ? 'hti-gallery__filter hti-gallery__filter--selected' : 'hti-gallery__filter'}>
                {label.toLocaleUpperCase('es')}
              </button>
            ))}
          </div>
          <p className="hti-gallery__archive-note">Una colección de momentos compartidos en Hwarang.</p>
          <p className="hti-gallery__archive-note" role="status">{visibleCollections.length ? `${visibleCollections.length} ${visibleCollections.length === 1 ? 'colección disponible' : 'colecciones disponibles'}` : 'Todavía no hay colecciones en esta categoría. Nuevos momentos de nuestra historia se sumarán al archivo.'}</p>
          <div className="hti-gallery__collections">
            {visibleCollections.map(collection => {
              const photos = getCollectionPhotos(collection.id)
              const cover = photos.find(photo => photo.id === collection.coverId) || photos[0]
              return (
                <a className="hti-gallery__collection-card" key={collection.id} href={`/galeria/${collection.id}`}>
                  <img className="hti-gallery__photo" src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} decoding="async" />
                  <div>
                    <p className="hti-gallery__eyebrow">{galleryCategoryLabels[collection.category].toLocaleUpperCase('es')}{collection.locationLabel && ` · ${collection.locationLabel.toLocaleUpperCase('es')}`} · {photos.length} FOTOGRAFÍAS</p>
                    <h2>{collection.title.toLocaleUpperCase('es')}</h2>
                    <p>{collection.description}</p>
                    <span>VER COLECCIÓN →</span>
                  </div>
                </a>
              )
            })}
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
