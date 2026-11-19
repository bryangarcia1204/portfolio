import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
    >
      <div className="h-full w-full bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 shadow-[0_0_12px_rgba(249,115,22,0.7)]" />
    </motion.div>
  )
}