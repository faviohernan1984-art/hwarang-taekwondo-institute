const siteUrl = 'https://www.hwarangtaekwondo.com.ar'

const seoByRoute = {
  '/': {
    title: 'Hwarang Taekwon-Do Institute',
    description: 'Hwarang Taekwon-Do Institute — Formación que trasciende.',
  },
  '/sedes': {
    title: 'Sede Rafaela | Taekwon-Do y Fuerza | HTI',
    description: 'Conocé la sede de Hwarang Taekwon-Do Institute en Gimnasio La Máquina, Rafaela. Taekwon-Do y espacio FUERZA con atención de Favio Hernán.',
  },
  '/evolucion': {
    title: 'Evolución institucional | Hwarang Taekwon-Do Institute',
    description: 'Conocé la evolución de Hwarang Taekwon-Do Institute: origen, formación, identidad e innovación, con la misma esencia y un propósito más grande.',
  },
  '/institute': {
    title: 'Institute | Hwarang Taekwon-Do Institute',
    description: 'Hwarang Taekwon-Do Institute: formación marcial, humana y deportiva, e innovación para acompañar a cada persona en la construcción de su propio camino.',
  },
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function withRouteSeo(html, route, seo) {
  const descriptionPattern = /<meta name="description" content="[^"]*" \/>/
  const titlePattern = /<title>[^<]*<\/title>/

  if (!descriptionPattern.test(html) || !titlePattern.test(html)) {
    throw new Error('SEO prerender could not find the base description or title')
  }

  return html
    .replace(descriptionPattern, `<meta name="description" content="${escapeAttribute(seo.description)}" />`)
    .replace(titlePattern, `<link rel="canonical" href="${siteUrl}${route}" />\n    <title>${seo.title}</title>`)
}

function routeSeoHtml() {
  return {
    name: 'route-seo-html',
    apply: 'build',
    async closeBundle() {
      const outputDirectory = resolve('dist')
      const indexPath = resolve(outputDirectory, 'index.html')
      const baseHtml = await readFile(indexPath, 'utf8')

      await writeFile(indexPath, withRouteSeo(baseHtml, '/', seoByRoute['/']))

      for (const route of ['/sedes', '/evolucion', '/institute']) {
        const routePath = resolve(outputDirectory, route.slice(1), 'index.html')
        await mkdir(dirname(routePath), { recursive: true })
        await writeFile(routePath, withRouteSeo(baseHtml, route, seoByRoute[route]))
      }
    },
  }
}

export default {
  plugins: [routeSeoHtml()],
}
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
