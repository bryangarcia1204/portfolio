import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import { viewport } from '../lib/animations'

export default function Contact() {
  const { t } = useLanguage()
  const { sections, contact } = t

  return (
    <section id="contacto" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent rounded-full blur-3xl -z-0"
      />

      <div className="container-x max-w-3xl text-center relative">
        <SectionHeading
          title={sections.contact.title}
          subtitle={sections.contact.subtitle}
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${contact.email}`}
            className="btn-primary"
          >
            ✉️ {contact.email}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            GitHub ↗
          </motion.a>
          {contact.linkedin && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn ↗
            </motion.a>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ delay: 0.4 }}
          className="text-sm text-slate-500"
        >
          {sections.contact.response}
        </motion.p>
      </div>
    </section>
  )
}