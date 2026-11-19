import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import Embers from './Embers'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const { t } = useLanguage()
  const { profile, hero } = t
  const nameWords = profile.name.split(' ')

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden pt-16 bg-radial-fade"
    >
      <div className="absolute inset-0 bg-grid opacity-60 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <Embers count={45} />

      {/* Orbes FUERTES */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] -z-10"
        style={{ background: 'radial-gradient(circle, rgba(255,87,34,0.35), transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full blur-[100px] -z-10"
        style={{ background: 'radial-gradient(circle, rgba(255,0,102,0.28), transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full blur-[100px] -z-10"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.15), transparent 70%)' }}
      />

      {/* Resplandor inferior tipo fuego */}
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5], scaleY: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-72 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(255,87,34,0.55), rgba(255,61,0,0.25) 40%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-x py-20 relative"
      >
        <motion.p variants={item} className="font-mono text-accent mb-4 text-sm flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-electric animate-pulse" />
          {hero.whoami}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          {nameWords.slice(0, 2).join(' ')}{' '}
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(255,87,34,0.6)]">
            {nameWords.slice(2).join(' ')}
          </span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-xl md:text-2xl text-amber-300 font-semibold mb-6"
        >
          {profile.role}
        </motion.h2>

        <motion.p
          variants={item}
          className="text-slate-300 max-w-2xl mb-8 text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-2 mb-10">
          {['Python', 'Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'Git'].map(
            (tag) => (
              <span key={tag} className="tag">{tag}</span>
            ),
          )}
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <a href="#proyectos" className="btn-primary group">
            {hero.ctaProjects}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#contacto" className="btn-ghost">{hero.ctaContact}</a>
        </motion.div>

        <motion.p variants={item} className="mt-10 text-sm text-slate-500">
          📍 {profile.location}
        </motion.p>
      </motion.div>

      <motion.a
        href="#proyectos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-accent transition-colors z-10"
      >
        <span className="text-xs font-mono tracking-widest uppercase">{hero.scroll}</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-xl"
        >↓</motion.span>
      </motion.a>
    </section>
  )
}