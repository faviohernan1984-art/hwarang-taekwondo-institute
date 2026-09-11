import '../styles/contact.css'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.53 14.75L2 22l5.38-1.41A9.98 9.98 0 0 0 12.04 22 10 10 0 0 0 12.04 2Zm0 18.31a8.25 8.25 0 0 1-4.2-1.15l-.3-.18-3.2.84.86-3.11-.2-.32a8.15 8.15 0 1 1 7.04 3.92Zm4.48-6.1c-.24-.12-1.45-.71-1.67-.79-.23-.08-.39-.12-.55.12-.17.25-.63.8-.78.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.97-1.22a7.35 7.35 0 0 1-1.36-1.69c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.43.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.85.83-.85 2.03 0 1.19.87 2.35.99 2.51.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.17.21-.57.21-1.06.15-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

// Destinos proporcionados para Contacto; conservar los parámetros originales.
const socialLinks = [
  { id: 'instagram', name: 'Instagram', icon: 'instagram', label: 'Instagram de Favio Hernán', href: 'https://www.instagram.com/faviohernan?stkn=MTBhbHVlb2JlOThyMA%3D%3D&utm_source=qr' },
  { id: 'facebook-profile', name: 'Facebook', detail: 'Perfil', icon: 'facebook', label: 'Facebook perfil de Favio Hernán', href: 'https://www.facebook.com/share/1C563zcw2i/?mibextid=wwXIfr' },
  { id: 'facebook-page', name: 'Facebook', detail: 'Página', icon: 'facebook', label: 'Facebook página de Hwarang', href: 'https://www.facebook.com/share/1HfCXgd3Zx/?mibextid=wwXIfr' },
  { id: 'youtube', name: 'YouTube', icon: 'youtube', label: 'YouTube de Favio Hernán', href: 'https://youtube.com/@faviohernan_iiidan?si=QLs3XOxylg4Wn64J' },
  { id: 'tiktok', name: 'TikTok', icon: 'tiktok', label: 'TikTok de Favio Hernán', href: 'https://www.tiktok.com/@faviohernan333?_r=1&_t=ZS-99eLaKlCZvg' },
]

const contactScenes = [
  { id: 'rest', title: 'HTI', copy: 'ELEGÍ CÓMO ENTRAR A HTI', index: 'CONECTÁ' },
  { id: 'instagram', title: 'INSTAGRAM', copy: 'ENTRENAMIENTO · HISTORIAS · COMUNIDAD', index: '01 / 05' },
  { id: 'facebook-profile', title: 'FACEBOOK · PERFIL', copy: 'TRAYECTORIA · EXPERIENCIA · COMUNIDAD', index: '02 / 05' },
  { id: 'facebook-page', title: 'FACEBOOK · PÁGINA', copy: 'INSTITUTO · NOVEDADES · ACTIVIDAD', index: '03 / 05' },
  { id: 'youtube', title: 'YOUTUBE', copy: 'TÉCNICA · EXPERIENCIA · MOVIMIENTO', index: '04 / 05' },
  { id: 'tiktok', title: 'TIKTOK', copy: 'ENERGÍA · ENTRENAMIENTO · MOMENTOS', index: '05 / 05' },
  { id: 'whatsapp', title: 'EMPEZÁ HOY', copy: 'Tu primera conversación puede empezar acá.', index: 'HABLEMOS' },
  { id: 'sedes', title: 'SEDES', copy: 'ENCONTRÁ TU LUGAR', index: 'EXPLORÁ / 01' },
  { id: 'evolucion', title: 'EVOLUCIÓN', copy: 'CONOCÉ NUESTRA HISTORIA', index: 'EXPLORÁ / 02' },
  { id: 'programas', title: 'PROGRAMAS', copy: 'DESCUBRÍ TU CAMINO', index: 'EXPLORÁ / 03' },
]

function SocialIcon({ name, label }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label={label}>
      {name === 'instagram' && <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></>}
      {name === 'facebook' && <path d="M14 21v-8h3l.5-4H14V7c0-1.1.4-2 2-2h2V2.5c-.7-.2-1.7-.3-2.7-.3C12.1 2.2 10 4.1 10 7v2H7v4h3v8" />}
      {name === 'youtube' && <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3Z" /></>}
      {name === 'tiktok' && <path d="M14 3h3c.3 2.3 1.6 3.7 4 4v3a8 8 0 0 1-4-1.3V16a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2Z" />}
    </svg>
  )
}

export default function Contact() {
  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="contact__scenes" aria-hidden="true">
        {contactScenes.map(({ id, title, copy, index }) => (
          <div key={id} className="contact__scene" data-scene={id}>
            <span className="contact__scene-word">{title}</span>
            <div className="contact__scene-caption">
              <span className="contact__scene-index">{index}</span>
              <span>{copy}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="contact__inner">
        <p className="eyebrow">Contacto</p>
        <h2 id="contact-title">Comenzá tu camino</h2>
        <p className="contact__copy">Escribinos para conocer horarios, sedes y comenzar Taekwon-Do en Hwarang.</p>
        <div className="contact__actions">
          <a className="whatsapp-link" data-contact-option="whatsapp" href="https://wa.me/5493492611568" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <ul className="contact__socials" aria-label="Redes sociales">
            {socialLinks.map(({ id, name, detail, icon, label, href }) => (
              <li key={id}>
                <a className="contact__social" data-contact-option={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <SocialIcon name={icon} label={name} />
                  <span className="contact__action-name">{name}{detail && <small>{detail}</small>}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav className="contact__explore" aria-label="Seguí conociendo Hwarang">
          <a data-contact-option="sedes" href="/sedes"><span className="contact__route-detail contact__route-index" aria-hidden="true">01</span>Sedes <span aria-hidden="true">↗</span><span className="contact__route-detail contact__route-copy">ENCONTRÁ TU LUGAR</span></a>
          <a data-contact-option="evolucion" href="/evolucion"><span className="contact__route-detail contact__route-index" aria-hidden="true">02</span>Evolución <span aria-hidden="true">↗</span><span className="contact__route-detail contact__route-copy">CONOCÉ EL RECORRIDO</span></a>
          <a data-contact-option="programas" href="/programas"><span className="contact__route-detail contact__route-index" aria-hidden="true">03</span>Programas <span aria-hidden="true">↗</span><span className="contact__route-detail contact__route-copy">DESCUBRÍ TU CAMINO</span></a>
        </nav>
      </div>
    </section>
  )
}
