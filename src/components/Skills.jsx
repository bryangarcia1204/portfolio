import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import { stagger, item, viewport } from '../lib/animations'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="habilidades" className="py-24 relative">
      <div className="container-x">
        <SectionHeading
          title={t.sections.skills.title}
          subtitle={t.sections.skills.subtitle}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.skills.groups.map((group, i) => (
            <motion.div key={i} variants={item} whileHover={{ y: -4 }}>
              <SpotlightCard className="card h-full">
                <h3 className="font-mono text-sm text-amber-300 mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="tag cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}