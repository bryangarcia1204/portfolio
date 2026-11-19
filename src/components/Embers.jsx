import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function Embers({ count = 40, className = '' }) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3.5 + 1.5,
        duration: Math.random() * 7 + 6,
        delay: Math.random() * 7,
        drift: (Math.random() - 0.5) * 160,
        hue: 15 + Math.random() * 25, // 15-40 (naranja-rojo-amarillo)
      })),
    [count],
  )

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}
      aria-hidden="true"
    >
      {embers.map((e) => {
        const color = `hsl(${e.hue}, 100%, 60%)`
        return (
          <motion.span
            key={e.id}
            initial={{ y: '105vh', x: 0, opacity: 0, scale: 0.5 }}
            animate={{
              y: '-10vh',
              x: [0, e.drift, 0],
              opacity: [0, 1, 1, 0.6, 0],
              scale: [0.5, 1.2, 1, 0.6, 0],
            }}
            transition={{
              duration: e.duration,
              delay: e.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className="absolute rounded-full"
            style={{
              left: `${e.left}%`,
              width: e.size,
              height: e.size,
              background: `radial-gradient(circle, #fff 0%, ${color} 35%, ${color}80 60%, transparent 90%)`,
              boxShadow: `0 0 10px 2px ${color}, 0 0 20px 4px ${color}80`,
              filter: 'blur(0.4px)',
            }}
          />
        )
      })}
    </div>
  )
}