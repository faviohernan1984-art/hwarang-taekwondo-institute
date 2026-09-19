export const SITE_URL = 'https://www.hwarangtaekwondo.com.ar'

export const SEO_BY_ROUTE = {
  '/': {
    title: 'Hwarang Taekwon-Do Institute | Rafaela, Santa Fe',
    description: 'Formación de Taekwon-Do en Rafaela, Santa Fe. En Hwarang Taekwon-Do Institute acompañamos cada camino con disciplina, crecimiento y comunidad.',
  },
  '/sedes': {
    title: 'Taekwon-Do en Rafaela | Hwarang Taekwon-Do Institute',
    description: 'Clases de Taekwon-Do en Rafaela, Santa Fe. Conocé la sede de Hwarang Taekwon-Do Institute en Gimnasio La Máquina, Bv. G. Lehmann 883.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#organization`,
      name: 'Hwarang Taekwon-Do Institute',
      url: `${SITE_URL}/sedes`,
      telephone: '+5493492611568',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bv. G. Lehmann 883',
        addressLocality: 'Rafaela',
        addressRegion: 'Santa Fe',
        addressCountry: 'AR',
      },
    },
  },
  '/evolucion': {
    title: 'Evolución institucional | Hwarang Taekwon-Do Institute',
    description: 'Conocé la evolución de Hwarang Taekwon-Do Institute: origen, formación, identidad e innovación, con la misma esencia y un propósito más grande.',
  },
  '/institute': {
    title: 'Hwarang Taekwon-Do Institute | Formación en Rafaela',
    description: 'Conocé la visión de Hwarang Taekwon-Do Institute y su propuesta de formación marcial, humana y deportiva en Rafaela, Santa Fe.',
  },
  '/programas': {
    title: 'Programas de Taekwon-Do en Rafaela | HTI',
    description: 'Conocé los caminos de formación de HTI en Rafaela, Santa Fe: Taekwon-Do, formación integral, defensa personal, competencia, arbitraje e instructores.',
  },
}
