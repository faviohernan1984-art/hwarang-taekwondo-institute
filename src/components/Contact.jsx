import '../styles/contact.css'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.53 14.75L2 22l5.38-1.41A9.98 9.98 0 0 0 12.04 22 10 10 0 0 0 12.04 2Zm0 18.31a8.25 8.25 0 0 1-4.2-1.15l-.3-.18-3.2.84.86-3.11-.2-.32a8.15 8.15 0 1 1 7.04 3.92Zm4.48-6.1c-.24-.12-1.45-.71-1.67-.79-.23-.08-.39-.12-.55.12-.17.25-.63.8-.78.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.97-1.22a7.35 7.35 0 0 1-1.36-1.69c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.43.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.85.83-.85 2.03 0 1.19.87 2.35.99 2.51.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.17.21-.57.21-1.06.15-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="contact__inner">
        <p className="eyebrow">Contacto</p>
        <h2 id="contact-title">Comenzá tu camino</h2>
        <p className="contact__copy">Escribinos para conocer horarios, sedes y comenzar Taekwon-Do en Hwarang.</p>
        <a className="whatsapp-link" href="https://wa.me/5493492611568" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <p className="contact__number">+54 9 3492 611568</p>
      </div>
    </section>
  )
}
