import { useEffect, useRef, useState } from 'react'
import { formatAdvice, nextPhotoIndex, shareOrCopy, publicPhotoUrl } from '../data/galleryActions.js'
import { SITE_URL } from '../seo.js'

function ActionIcon({ kind }) {
  const paths = {
    instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM17.5 6.5h.01',
    facebook: 'M14 21v-9h3l.5-4H14V6c0-1 .5-2 2-2h2V1h-3c-3 0-5 2-5 5v2H7v4h3v9',
    whatsapp: 'M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5ZM8 7c0 5 4 9 8 9l1-3-3-1-1 1-2-2 1-1-1-3Z',
    tiktok: 'M14 3v13a4 4 0 1 1-4-4M14 3c1 4 3 5 6 5',
    copy: 'M9 9h12v12H9ZM15 9V3H3v12h6',
    download: 'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
  }
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>
}

export function PhotoActions({ photo, title }) {
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('')
  const [manualLink, setManualLink] = useState(false)
  const [busy, setBusy] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const url = publicPhotoUrl(photo.src, window.location.origin, SITE_URL)
  const advice = formatAdvice(photo.width, photo.height)

  useEffect(() => {
    if (!navigator.share || !navigator.canShare) return
    const controller = new AbortController()
    fetch(photo.src, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Image unavailable')
        return response.blob()
      })
      .then(blob => {
        if (!controller.signal.aborted) setFile(new File([blob], photo.src.split('/').pop(), { type: 'image/webp' }))
      })
      .catch(() => {})
    return () => controller.abort()
  }, [photo.src])

  async function distribute(destination) {
    setBusy(true)
    setStatus('')
    setManualLink(false)
    try {
      const native = destination !== 'copy'
      const result = await shareOrCopy({ file: native ? file : null, url, title, fileOnly: native }, navigator)
      if (result === 'shared') setStatus('Se completó la acción en el sistema de compartir.')
      if (result === 'copied') setStatus('Enlace público de la fotografía copiado.')
      if (result === 'download') setStatus(`Descargá la fotografía y abrí ${destination}. Creá una publicación y seleccioná el archivo descargado. Si la aplicación no admite WebP, utilizá una aplicación compatible para publicarlo.`)
      if (result === 'manual') {
        setManualLink(true)
        setStatus('Seleccioná y copiá el enlace público de la fotografía.')
      }
      if (result === 'unpublished') setStatus('El enlace público estará disponible al abrir la fotografía en el sitio publicado. Por ahora podés descargarla o compartir el archivo.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="hti-lightbox__details">
      <div className="hti-lightbox__actions">
        <button type="button" onClick={() => setExpanded(value => !value)} aria-expanded={expanded} aria-controls="hti-share-options">COMPARTIR</button>
        <a href={photo.src} download={photo.src.split('/').pop()}><ActionIcon kind="download" />DESCARGAR</a>
      </div>
      {expanded && <div id="hti-share-options" className="hti-lightbox__distribution" role="group" aria-label="Opciones para compartir">
        <button type="button" onClick={() => distribute('Instagram')} disabled={busy}><ActionIcon kind="instagram" />Instagram</button>
        {url ? <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"><ActionIcon kind="facebook" />Facebook</a>
          : <button type="button" onClick={() => distribute('copy')}><ActionIcon kind="facebook" />Facebook</button>}
        {url ? <a href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`} target="_blank" rel="noopener noreferrer"><ActionIcon kind="whatsapp" />WhatsApp</a>
          : <button type="button" onClick={() => distribute('copy')}><ActionIcon kind="whatsapp" />WhatsApp</button>}
        <button type="button" onClick={() => distribute('TikTok')} disabled={busy}><ActionIcon kind="tiktok" />TikTok</button>
        <button type="button" onClick={() => distribute('copy')} disabled={busy}><ActionIcon kind="copy" />Copiar enlace</button>
        <a href={photo.src} download={photo.src.split('/').pop()}><ActionIcon kind="download" />Descargar fotografía</a>
        <p>Instagram y TikTok: elegí la aplicación en el menú de tu dispositivo, si aparece. También podés descargar la foto y publicarla desde la aplicación.</p>
        {!url && <p>Vista local: los enlaces para redes estarán disponibles desde el sitio publicado.</p>}
      </div>}
      <p className="hti-lightbox__status" role="status">{status}</p>
      {manualLink && <label className="hti-lightbox__copy">Enlace de la fotografía
        <input readOnly value={url} onFocus={event => event.target.select()} onClick={event => event.currentTarget.select()} />
      </label>}
      <details className="hti-lightbox__advice" open>
        <summary>¿DÓNDE QUEDA MEJOR ESTA FOTO?</summary>
        <dl className="hti-lightbox__facts">
          <div><dt>Orientación</dt><dd>{advice.orientation}</dd></div>
          <div><dt>Dimensiones</dt><dd>{photo.width} × {photo.height} px</dd></div>
          <div><dt>Proporción</dt><dd>{advice.ratio}</dd></div>
        </dl>
        <p><strong>Recomendado:</strong> {advice.recommended}</p>
        <p><strong>Instagram:</strong> {advice.instagram}</p>
        <p><strong>Stories:</strong> {advice.stories}</p>
      </details>
    </div>
  )
}

export default function GalleryLightbox({ photos, initialIndex, title, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const dialog = useRef(null)
  const gesture = useRef(null)
  const photo = photos[index]
  const move = delta => setIndex(current => nextPhotoIndex(current, delta, photos.length))

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    const element = dialog.current
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus()
    }
  }, [])

  return (
    <dialog ref={dialog} className="hti-lightbox" aria-labelledby="hti-lightbox-title"
      onCancel={event => { event.preventDefault(); onClose() }}
      onKeyDown={event => {
        if (event.target instanceof HTMLInputElement) return
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
      }}>
      <header className="hti-lightbox__header">
        <h2 id="hti-lightbox-title">{title}</h2>
        <button type="button" onClick={onClose} autoFocus aria-label="Cerrar visualización ampliada">CERRAR ×</button>
      </header>
      <div className="hti-lightbox__image"
        onPointerDown={event => {
          if (event.pointerType !== 'touch' || !event.isPrimary) return
          gesture.current = { x: event.clientX, y: event.clientY }
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerCancel={() => { gesture.current = null }}
        onPointerUp={event => {
          const start = gesture.current
          gesture.current = null
          if (!start) return
          const dx = event.clientX - start.x, dy = event.clientY - start.y
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1)
        }}>
        <img key={photo.id} src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} draggable="false" />
      </div>
      <nav className="hti-lightbox__navigation" aria-label="Navegación fotográfica">
        <button type="button" onClick={() => move(-1)} aria-label="Fotografía anterior">← ANTERIOR</button>
        <span aria-live="polite" aria-atomic="true">{index + 1} / {photos.length}</span>
        <button type="button" onClick={() => move(1)} aria-label="Fotografía siguiente">SIGUIENTE →</button>
      </nav>
      <PhotoActions key={photo.id} photo={photo} title={title} />
    </dialog>
  )
}
