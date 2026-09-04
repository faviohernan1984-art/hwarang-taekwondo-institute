import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__wash" aria-hidden="true" />
      <div className="hero__content">
        <h1 id="hero-title">Hwarang</h1>
        <p className="hero__institute">Taekwon-Do Institute</p>
        <div className="hero__rule" />
        <p className="hero__statement">Formación que trasciende.</p>
      </div>
      <a className="scroll-cue" href="#institute"><span>Descubrir</span><i /></a>
    </section>
  )
}
