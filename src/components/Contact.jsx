import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import ContactForm from './ContactForm'
import { Toaster } from 'react-hot-toast'
import { viewport } from '../lib/animations'

export default function Contact() {
  const { t } = useLanguage()
  const { sections, contact } = t

  return (
    <section id="contacto" className="py-24 relative overflow-hidden border-t border-slate-900">
      {/* Glow pulsante de fuego */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] -z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,87,34,0.5), rgba(255,0,102,0.2) 50%, transparent 75%)',
        }}
      />

      <div className="container-x max-w-3xl relative">
        <SectionHeading
          title={sections.contact.title}
          subtitle={sections.contact.subtitle}
          center
        />

        {/* Botones de contacto directo (se mantienen) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1 }}
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

        {/* Formulario */}
        <div className="card spotlight">
          <ContactForm />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ delay: 0.4 }}
          className="text-sm text-slate-500 text-center mt-6"
        >
          {sections.contact.response}
        </motion.p>
      </div>

      {/* Toaster para las notificaciones (puede ir aquí o en App.jsx) */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#0a0a0a',
            color: '#fff',
            border: '1px solid rgba(255,87,34,0.3)',
          },
        }}
      />
    </section>
  )
}