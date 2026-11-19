import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import { stagger, item, viewport } from '../lib/animations'

function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="text-gradient font-extrabold">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { t } = useLanguage()
  const { stats } = t

  return (
    <section id="impacto" className="py-24 relative">
      <div className="container-x">
        <SectionHeading title={stats.title} subtitle={stats.subtitle} center />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.items.map((s, i) => (
            <motion.div key={i} variants={item}>
              <SpotlightCard className="card text-center h-full">
                <p className="text-4xl md:text-5xl mb-2">
                  <Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
                </p>
                <p className="text-xs md:text-sm text-slate-400 leading-snug">{s.label}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}