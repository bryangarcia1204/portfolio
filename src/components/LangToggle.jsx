import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function LangToggle({ id = 'main' }) {
  const { lang, toggle } = useLanguage()

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="relative inline-flex items-center p-1 rounded-full bg-slate-800/80 border border-slate-700/80 hover:border-accent/60 transition-colors"
    >
      {['es', 'en'].map((l) => (
        <span
          key={l}
          className={`relative px-2.5 py-1 text-[11px] font-mono font-bold uppercase transition-colors ${
            lang === l ? 'text-slate-950' : 'text-slate-400'
          }`}
        >
          <span className="relative z-10">{l}</span>
          {lang === l && (
            <motion.span
              layoutId={`lang-pill-${id}`}
              className="absolute inset-0 bg-accent rounded-full"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </span>
      ))}
    </button>
  )
}