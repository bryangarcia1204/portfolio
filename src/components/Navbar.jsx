import { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Skills' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'bg-slate-950/90 backdrop-blur border-b border-slate-800' : ''
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16">
        <a href="#inicio" className="font-mono font-bold text-lg text-white">
          <span className="text-accent">&lt;</span>BG<span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-300 hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
              GitHub ↗
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-slate-200 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-4 space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate-300 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}