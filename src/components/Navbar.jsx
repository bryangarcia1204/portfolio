import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import LangToggle from './LangToggle'

const links = [
  { href: '#proyectos', key: 'projects' },
  { href: '#servicios', key: 'services' },
  { href: '#sobre-mi', key: 'about' },
  { href: '#habilidades', key: 'skills' },
  { href: '#experiencia', key: 'experience' },
  { href: '#contacto', key: 'contact' },
]

export default function Navbar() {
  const { t } = useLanguage()
  const { contact } = t
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-accent/20 shadow-[0_4px_30px_rgba(255,87,34,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16">
        <a href="#inicio" className="font-mono font-bold text-lg text-white group">
          <span className="text-accent">&lt;</span>BG
          <span className="text-accent group-hover:animate-pulse">/&gt;</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const isActive = active === l.href.slice(1)
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={`relative px-3 py-2 rounded-md transition-colors ${
                    isActive ? 'text-accent' : 'text-slate-300 hover:text-accent'
                  }`}
                >
                  {t.nav[l.key]}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 bg-accent/15 rounded-md border border-accent/40 shadow-[0_0_14px_rgba(255,87,34,0.45)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
          <li className="ml-2">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-sm"
            >
              GitHub ↗
            </a>
          </li>
          <li className="ml-2">
            <LangToggle id="desktop" />
          </li>
        </ul>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle id="mobile" />
          <button
            className="text-slate-200 text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur border-t border-accent/20 px-6 py-4 space-y-3"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate-300 hover:text-accent"
              >
                {t.nav[l.key]}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-accent"
            >
              GitHub ↗
            </a>
          </li>
        </motion.ul>
      )}
    </motion.header>
  )
}