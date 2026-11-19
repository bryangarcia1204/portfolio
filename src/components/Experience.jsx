import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import { stagger, item, viewport } from '../lib/animations'

export default function Experience() {
  const { t } = useLanguage()
  const { sections, experience, education } = t

  return (
    <section id="experiencia" className="py-24">
      <div className="container-x">
        <SectionHeading
          title={sections.experience.title}
          subtitle={sections.experience.subtitle}
        />

        <div className="relative border-l border-slate-800 pl-8 space-y-10 mb-16">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewport}
                transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
                className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-slate-950"
              />
              <p className="text-sm font-mono text-emerald-300 mb-1">{e.period}</p>
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <p className="text-sm text-slate-500 mb-3">{e.company}</p>
              <ul className="space-y-2 text-sm text-slate-400">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="text-2xl font-bold text-white mb-6"
        >
          {sections.experience.educationTitle}
        </motion.h3>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 gap-4"
        >
          {education.map((ed, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="card"
            >
              <p className="text-sm font-mono text-emerald-300 mb-1">{ed.period}</p>
              <h4 className="font-semibold text-white">{ed.title}</h4>
              <p className="text-sm text-slate-500">{ed.place}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}