import { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

// ⚠️ Reemplaza con tu Form ID real de Formspree
const FORMSPREE_ID = 'xyewjaye'

export default function ContactForm() {
  const { t } = useLanguage()
  const { contactForm } = t.sections.contact
  const [state, handleSubmit, reset] = useForm(FORMSPREE_ID)

  // Mostrar notificación cuando el envío termine (éxito o error)
  useEffect(() => {
    if (state.succeeded) {
      toast.success(contactForm.success, {
        style: {
          background: '#0a0a0a',
          color: '#fff',
          border: '1px solid rgba(255,87,34,0.4)',
        },
        iconTheme: { primary: '#ff5722', secondary: '#0a0a0a' },
      })
      reset() // Limpia el formulario después del éxito
    } else if (state.errors && state.errors.getAllFieldErrors().length > 0) {
      toast.error(contactForm.error, {
        style: {
          background: '#0a0a0a',
          color: '#fff',
          border: '1px solid rgba(239,68,68,0.5)',
        },
      })
    }
  }, [state.succeeded, state.errors, reset, contactForm.success, contactForm.error])

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4 text-left"
    >
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
          {contactForm.name}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder={contactForm.namePlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-coal-900/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-accent/70 focus:shadow-[0_0_0_3px_rgba(255,87,34,0.15)] transition-all"
        />
        <ValidationError
          prefix={contactForm.name}
          field="name"
          errors={state.errors}
          className="text-red-400 text-xs mt-1.5 block"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          {contactForm.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder={contactForm.emailPlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-coal-900/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-accent/70 focus:shadow-[0_0_0_3px_rgba(255,87,34,0.15)] transition-all"
        />
        <ValidationError
          prefix={contactForm.email}
          field="email"
          errors={state.errors}
          className="text-red-400 text-xs mt-1.5 block"
        />
      </div>

      {/* Asunto */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
          {contactForm.subject}
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          placeholder={contactForm.subjectPlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-coal-900/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-accent/70 focus:shadow-[0_0_0_3px_rgba(255,87,34,0.15)] transition-all"
        />
        <ValidationError
          prefix={contactForm.subject}
          field="subject"
          errors={state.errors}
          className="text-red-400 text-xs mt-1.5 block"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          {contactForm.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={contactForm.messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-coal-900/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-accent/70 focus:shadow-[0_0_0_3px_rgba(255,87,34,0.15)] transition-all resize-none"
        />
        <ValidationError
          prefix={contactForm.message}
          field="message"
          errors={state.errors}
          className="text-red-400 text-xs mt-1.5 block"
        />
      </div>

      {/* Error general (si no es de un campo específico) */}
      <ValidationError
        errors={state.errors}
        className="text-red-400 text-sm block"
      />

      {/* Botón de envío */}
      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: state.submitting ? 1 : 1.02 }}
        whileTap={{ scale: state.submitting ? 1 : 0.98 }}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? contactForm.submitting : contactForm.submit}
        {!state.submitting && <span>→</span>}
      </motion.button>
    </motion.form>
  )
}