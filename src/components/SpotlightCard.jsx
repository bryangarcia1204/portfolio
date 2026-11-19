import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function SpotlightCard({ children, className = '', ...props }) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div ref={ref} onMouseMove={onMove} className={`spotlight ${className}`} {...props}>
      {children}
    </motion.div>
  )
}