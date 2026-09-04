import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <div className="home-photo">
          <img src="/images/hti-hero-original.jpg" alt="Alumnos de Hwarang practicando Taekwon-Do en el dojang" width="6000" height="4000" fetchPriority="high" />
        </div>
        <Hero />
        <section className="institute" id="institute" aria-labelledby="institute-title">
          <div className="institute__inner">
            <p className="eyebrow">Institute</p>
            <h2 id="institute-title">
              <span>Formación</span>{' '}
              <span>que</span>{' '}
              <span>trasciende</span>
            </h2>
            <p className="institute__copy">
              Taekwon-Do como camino de formación, disciplina y crecimiento.
            </p>
          </div>
        </section>
        <div className="future-anchors" aria-hidden="true">
          <span id="programas" /><span id="sedes" /><span id="historia" />
          <span id="galeria" />
        </div>
        <Contact />
      </main>
    </div>
  )
}
