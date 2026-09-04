import { useEffect, useState } from 'react'
import '../styles/header.css'

const links = [
  ['Inicio', '#inicio'], ['Institute', '#institute'], ['Programas', '#programas'],
  ['Sedes', '#sedes'], ['Historia', '#historia'], ['Galería', '#galeria'],
  ['Contacto', '#contacto'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Hwarang Taekwon-Do Institute, inicio">
        <span>Hwarang</span><small>Taekwon-Do Institute</small>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        <i /><i />
      </button>
      <nav id="main-nav" className={open ? 'nav nav--open' : 'nav'} aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  )
}
