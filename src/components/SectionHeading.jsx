import { motion } from 'framer-motion'
import { viewport } from '../lib/animations'

export default function SectionHeading({ title, subtitle, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1 rounded-full mb-6 bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 shadow-[0_0_10px_rgba(249,115,22,0.6)] ${
          center ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-slate-400 mb-10 max-w-2xl ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}