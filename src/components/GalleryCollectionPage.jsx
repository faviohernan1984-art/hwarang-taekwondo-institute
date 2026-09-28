import { useState } from 'react'
import GalleryLightbox from './GalleryLightbox.jsx'
import { getCollectionPhotos, galleryCategoryLabels } from '../data/galleryCollections.js'
import '../styles/gallery.css'

export default function GalleryCollectionPage({ collection }) {
  const [selected, setSelected] = useState(null)
  const photos = getCollectionPhotos(collection.id)
  return (
    <main className="hti-gallery">
      <div className="hti-gallery__inner">
        <a className="hti-gallery__back" href="/galeria">← VOLVER A GALERÍA</a>
        <header className="hti-gallery__collection-opening">
          <p className="hti-gallery__eyebrow">{galleryCategoryLabels[collection.category].toLocaleUpperCase('es')} · {photos.length} FOTOGRAFÍAS</p>
          <h1>{collection.title}</h1>
          <p className="hti-gallery__collection-description">{collection.description}</p>
        </header>
        <div className="hti-gallery__grid">
          {photos.map((photo, index) => (
            <button className="hti-gallery__photo-button" key={photo.id} type="button" onClick={() => setSelected(index)}
              aria-label={`Ampliar fotografía ${index + 1}: ${photo.alt}`} aria-haspopup="dialog">
              <img className="hti-gallery__photo" src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
                loading={index < 4 ? 'eager' : 'lazy'} decoding="async" />
            </button>
          ))}
        </div>
        <a className="hti-gallery__guide" href="/galeria/guia">GUÍA FOTOGRÁFICA HTI</a>
      </div>
      {selected !== null && <GalleryLightbox photos={photos} initialIndex={selected} title={collection.title} onClose={() => setSelected(null)} />}
    </main>
  )
}
