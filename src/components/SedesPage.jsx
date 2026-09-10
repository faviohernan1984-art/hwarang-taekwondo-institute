import { useEffect } from 'react'
import '../styles/sedes.css'

const sede = {
  name: 'Gimnasio La Máquina',
  address: 'Bv. G. Lehmann 883, Rafaela, Santa Fe',
  contact: 'Favio Hernán',
  phone: '3492 611568',
  whatsapp: 'https://wa.me/5493492611568',
  maps: 'https://www.google.com/maps/search/?api=1&query=Gimnasio+La+Maquina%2C+Bv.+G.+Lehmann+883%2C+Rafaela%2C+Santa+Fe',
}

const activities = [
  {
    id: 'taekwon-do',
    title: 'Taekwon-Do',
    label: 'FORMACIÓN MARCIAL Y HUMANA',
    description: 'Formación marcial, desarrollo humano y preparación deportiva. Un camino de disciplina y crecimiento personal, con la pertenencia y el acompañamiento de Hwarang Taekwon-Do Institute.',
    schedule: [['Miércoles', '20:30', '22:00'], ['Viernes', '20:30', '22:00'], ['Sábados', '17:00', '18:00']],
    query: 'Taekwon-Do',
  },
  {
    id: 'fuerza',
    title: 'FUERZA',
    label: 'PREPARACIÓN Y ACONDICIONAMIENTO',
    description: 'Entrenamiento con pesas y aparatos, con identidad propia dentro de HTI. Un espacio de preparación, acondicionamiento y entrenamiento personal.',
    note: 'Abierto a deportistas y público general. No requiere practicar Taekwon-Do. También pensado para quienes no pueden entrenar durante la semana.',
    schedule: [['Sábados', '16:00', '17:00']],
    query: 'el espacio FUERZA',
  },
]

function consultation(topic) {
  return `${sede.whatsapp}?text=${encodeURIComponent(`Hola, ${sede.contact}. Vi el sitio de HTI y quiero consultar por ${topic}.`)}`
}

export default function SedesPage() {
  useEffect(() => {
    const previousTitle = document.title
    const existingDescription = document.querySelector('meta[name="description"]')
    const description = existingDescription || document.createElement('meta')
    const previousDescription = description.getAttribute('content')
    if (!existingDescription) {
      description.name = 'description'
      document.head.appendChild(description)
    }
    document.title = 'Sede Rafaela | Taekwon-Do y Fuerza | HTI'
    description.setAttribute('content', 'Conocé la sede de Hwarang Taekwon-Do Institute en Gimnasio La Máquina, Rafaela. Taekwon-Do y espacio FUERZA con atención de Favio Hernán.')
    return () => {
      document.title = previousTitle
      if (!existingDescription) description.remove()
      else if (previousDescription === null) description.removeAttribute('content')
      else description.setAttribute('content', previousDescription)
    }
  }, [])

  return (
    <main className="sedes" id="sedes-contenido">
      <header className="sedes__opening">
        <div className="sedes__opening-content">
          <div>
            <p className="sedes__eyebrow">SEDE RAFAELA</p>
            <h1>Tu camino<br />Nuestro lugar</h1>
          </div>
          <div className="sedes__introduction">
            <p className="sedes__venue">{sede.name}</p>
            <p className="sedes__address">{sede.address}</p>
            <p>Hwarang Taekwon-Do Institute desarrolla sus actividades presenciales en Gimnasio La Máquina, Rafaela.</p>
            <p>Dos propuestas para formarte, entrenar y crecer</p>
          </div>
        </div>
      </header>
      <div className="sedes__inner">
        <section className="sedes__activities" aria-label="Actividades y horarios">
          {activities.map((activity) => (
            <article className="sedes__activity" key={activity.id} aria-labelledby={`sedes-${activity.id}`}>
              <p className="sedes__eyebrow">{activity.label}</p>
              <h2 id={`sedes-${activity.id}`}>{activity.title}</h2>
              <p className="sedes__description">{activity.description}</p>
              {activity.note && <p className="sedes__note">{activity.note}</p>}
              <div className="sedes__schedule">
                <h3>Días y horarios</h3>
                <dl>
                  {activity.schedule.map(([day, start, end]) => (
                    <div className="sedes__time" key={day}>
                      <dt>{day}</dt>
                      <dd><time dateTime={start}>{start}</time> a <time dateTime={end}>{end}</time></dd>
                    </div>
                  ))}
                </dl>
              </div>
              <a className="sedes__consult" href={consultation(activity.query)} target="_blank" rel="noopener noreferrer">
                Consultá por {activity.title}<span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </section>

        <section className="sedes__location" aria-labelledby="sedes-location-title">
          <div>
            <p className="sedes__eyebrow">EL LUGAR DONDE NOS ENCONTRAMOS</p>
            <h2 id="sedes-location-title">{sede.name}</h2>
            <address>{sede.address}</address>
          </div>
          <a className="sedes__button sedes__button--secondary" href={sede.maps} target="_blank" rel="noopener noreferrer">CÓMO LLEGAR <span aria-hidden="true">↗</span></a>
        </section>

        <section className="sedes__closing" aria-labelledby="sedes-contact-title">
          <div>
            <p className="sedes__eyebrow">EMPEZÁ EN HTI</p>
            <h2 id="sedes-contact-title">El primer paso<br />es tuyo</h2>
          </div>
          <div className="sedes__contact">
            <p>Consultá por una clase de prueba y encontrá tu espacio para entrenar</p>
            <a className="sedes__button" href={consultation('una clase de prueba')} target="_blank" rel="noopener noreferrer">SOLICITÁ TU CLASE DE PRUEBA <span aria-hidden="true">↗</span></a>
            <p className="sedes__contact-details">Atención: {sede.contact}<br />WhatsApp · {sede.phone}</p>
          </div>
        </section>
      </div>
    </main>
  )
}
