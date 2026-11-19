import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import { stagger, item, viewport } from '../lib/animations'

const icons = { server: '🖥️', zap: '⚡', layout: '🎨', database: '🗄️' }

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="py-24 bg-slate-900/30">
      <div className="container-x">
        <SectionHeading
          title={t.sections.services.title}
          subtitle={t.sections.services.subtitle}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl mb-4 inline-block"
              >
                {icons[s.icon]}
              </motion.div>
              <h3 className="font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}