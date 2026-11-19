import { useEffect, useRef } from 'react'

export default function CursorSpark() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      const count = 2
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6 - 0.4,
          life: 1,
          size: Math.random() * 2.6 + 1,
          hue: 15 + Math.random() * 20, // naranja -> rojo
        })
      }
      if (particlesRef.current.length > 350) {
        particlesRef.current.splice(0, particlesRef.current.length - 350)
      }
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const p = particlesRef.current
      for (let i = p.length - 1; i >= 0; i--) {
        const pt = p[i]
        pt.x += pt.vx
        pt.y += pt.vy
        pt.vy += 0.025
        pt.life -= 0.022
        if (pt.life <= 0) {
          p.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.fillStyle = `hsla(${pt.hue}, 100%, 60%, ${pt.life * 0.9})`
        ctx.shadowColor = `hsla(${pt.hue}, 100%, 60%, ${pt.life})`
        ctx.shadowBlur = 10
        ctx.arc(pt.x, pt.y, pt.size * pt.life, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[45] hidden md:block"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}