import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { SEO_BY_ROUTE, SITE_URL } from './src/seo.js'

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function withRouteSeo(html, route, seo) {
  const descriptionPattern = /<meta name="description" content="[^"]*" \/>/
  const canonicalPattern = /<link rel="canonical" href="[^"]*" \/>/
  const titlePattern = /<title>[^<]*<\/title>/

  if (!descriptionPattern.test(html) || !titlePattern.test(html)) {
    throw new Error('SEO prerender could not find the base description or title')
  }

  const routeHtml = html
    .replace(descriptionPattern, `<meta name="description" content="${escapeAttribute(seo.description)}" />`)
    .replace(titlePattern, `<title>${seo.title}</title>`)

  const canonical = `<link rel="canonical" href="${SITE_URL}${route}" />`
  const canonicalHtml = canonicalPattern.test(routeHtml)
    ? routeHtml.replace(canonicalPattern, canonical)
    : routeHtml.replace(`<title>${seo.title}</title>`, `${canonical}\n    <title>${seo.title}</title>`)

  if (!seo.structuredData) return canonicalHtml

  // Escape '<' so data cannot terminate the script element in HTML.
  const jsonLd = JSON.stringify(seo.structuredData, null, 2).replaceAll('<', '\\u003c')
  return canonicalHtml.replace('</head>', () => `<script type="application/ld+json">\n${jsonLd}\n    </script>\n  </head>`)
}

function routeSeoHtml() {
  return {
    name: 'route-seo-html',
    transformIndexHtml(html) {
      return withRouteSeo(html, '/', SEO_BY_ROUTE['/'])
    },
    apply: 'build',
    async closeBundle() {
      const outputDirectory = resolve('dist')
      const indexPath = resolve(outputDirectory, 'index.html')
      const baseHtml = await readFile(indexPath, 'utf8')

      await writeFile(indexPath, withRouteSeo(baseHtml, '/', SEO_BY_ROUTE['/']))

      for (const route of ['/sedes', '/evolucion', '/institute', '/programas']) {
        const routePath = resolve(outputDirectory, route.slice(1), 'index.html')
        await mkdir(dirname(routePath), { recursive: true })
        await writeFile(routePath, withRouteSeo(baseHtml, route, SEO_BY_ROUTE[route]))
      }
    },
  }
}

export default {
  plugins: [routeSeoHtml()],
}
