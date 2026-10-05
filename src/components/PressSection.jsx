import { pressArticles } from '../data/pressArticles.js'
import '../styles/press.css'

function PressArticle({ article, featured = false }) {
  const dateLabel = article.date.split('-').reverse().join('/')

  return (
    <article className={`hti-press__article${featured ? ' hti-press__article--featured' : ''}`}>
      <div className="hti-press__metadata">
        <span className="hti-press__outlet">{article.outlet}</span>
        <time dateTime={article.date}>{dateLabel}</time>
      </div>
      <h3>{article.title}</h3>
      <div className="hti-press__article-detail">
        <p className="hti-press__summary">{article.summary}</p>
        <a className="hti-press__link" href={article.url} target="_blank" rel="noopener noreferrer">
          Leer nota <span aria-hidden="true">↗</span>
          <span className="sr-only">: {article.title}. Abre en una nueva pestaña.</span>
        </a>
      </div>
    </article>
  )
}

export default function PressSection() {
  const featuredArticle = pressArticles.find(article => article.featured)
  const archiveArticles = pressArticles
    .filter(article => article.id !== featuredArticle?.id)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section className="hti-press" id="hti-en-los-medios" aria-labelledby="hti-press-title">
      <div className="hti-press__inner">
        <div className="hti-press__front">
          <header className="hti-press__header">
            <p className="hti-press__eyebrow">Prensa · Rafaela</p>
            <h2 id="hti-press-title">
              <span className="hti-press__monogram">HTI</span>
              <span className="hti-press__title-line">EN LOS MEDIOS</span>
            </h2>
            <p className="hti-press__intro">El recorrido de Hwarang Taekwon-Do Institute, sus alumnos y su comunidad también queda registrado en la prensa local.</p>
          </header>
          <figure className="hti-press__visual">
            <div className="hti-press__photo">
              <img src="/images/press/hti-mundial-taekwondo-argentina-2025.jpg"
                alt="Integrantes de Hwarang en el Mundial de Taekwon-Do Argentina 2025."
                width="6000" height="4000" loading="lazy" decoding="async" />
            </div>
            <figcaption>Hwarang Taekwon-Do Institute · Mundial Argentina 2025 · Archivo institucional</figcaption>
          </figure>
          {featuredArticle && (
            <div className="hti-press__lead">
              <p className="hti-press__label hti-press__label--featured">Nota destacada</p>
              <PressArticle article={featuredArticle} featured />
            </div>
          )}
        </div>
        {archiveArticles.length > 0 && (
          <div className="hti-press__archive" role="group" aria-labelledby="hti-press-archive-label">
            <p className="hti-press__label" id="hti-press-archive-label">Archivo de prensa</p>
            {archiveArticles.map(article => <PressArticle key={article.id} article={article} />)}
          </div>
        )}
      </div>
    </section>
  )
}
