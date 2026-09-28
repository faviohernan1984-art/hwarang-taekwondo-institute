export function nextPhotoIndex(index, delta, length) {
  return ((index + delta) % length + length) % length
}

export function formatAdvice(width, height) {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0) throw new RangeError('Dimensiones inválidas')
  let a = width, b = height
  while (b) [a, b] = [b, a % b]
  const ratio = `${width / a}:${height / a}`
  const orientation = width === height ? 'Cuadrada' : width > height ? 'Horizontal' : 'Vertical'
  const vertical = width < height
  const recommended = ratio === '9:16'
    ? 'Instagram Stories, Facebook Stories y estados de WhatsApp.'
    : ratio === '4:5' || ratio === '1:1'
      ? 'Feed de Instagram y Facebook.'
      : vertical ? 'Stories y publicaciones verticales.'
        : 'Publicaciones de Facebook y álbumes fotográficos.'
  const instagram = ratio === '4:5' || ratio === '1:1'
    ? 'Formato ideal para publicaciones del feed.'
    : vertical ? 'Compatible con publicaciones verticales; adaptá el encuadre con márgenes cuando sea necesario.'
      : 'Compatible con publicaciones horizontales; una composición con márgenes permite conservar la imagen completa.'
  const stories = ratio === '9:16'
    ? 'Formato ideal: ocupa la pantalla vertical sin adaptar la proporción.'
    : ratio === '2:3'
      ? 'Compatible. Puede necesitar márgenes o una adaptación para aprovechar la pantalla sin recortar la imagen.'
      : ratio === '4:5'
        ? 'También compatible mediante una adaptación con márgenes.'
        : ratio === '1:1'
          ? 'Compatible incorporando márgenes sobre y debajo de la fotografía.'
          : vertical ? 'Compatible mediante una adaptación que conserve el encuadre completo.'
            : 'Compatible mediante una composición vertical adaptada, con espacio alrededor de la fotografía.'
  return { orientation, ratio, title: `${orientation} — ${ratio}`, recommended, instagram, stories }
}

export function filterCollections(collections, category) {
  return category === 'todas' ? collections : collections.filter(collection => collection.category === category)
}

export function publicPhotoUrl(src, currentOrigin, siteUrl) {
  const published = new URL(siteUrl)
  if (new URL(currentOrigin).origin !== published.origin) return null
  const url = new URL(src, published)
  return url.origin === published.origin ? url.href : null
}

export async function shareOrCopy({ file, url, title, fileOnly = false }, platform) {
  try {
    if (file && platform.share && platform.canShare?.({ files: [file] })) {
      await platform.share({ files: [file], title })
      return 'shared'
    }
  } catch (error) {
    if (error.name === 'AbortError') return 'cancelled'
  }
  if (fileOnly) return 'download'
  if (!url) return 'unpublished'
  try {
    if (platform.clipboard?.writeText) {
      await platform.clipboard.writeText(url)
      return 'copied'
    }
  } catch {
    // A selectable link is provided if clipboard permission is denied.
  }
  return 'manual'
}
