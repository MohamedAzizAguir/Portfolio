'use client'

import { useEffect, useRef } from 'react'

type Ripple = {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
}

type Spark = {
  x: number
  y: number
  dx: number
  dy: number
  life: number
  alpha: number
  size: number
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripples = useRef<Ripple[]>([])
  const sparks = useRef<Spark[]>([])
  const lastMove = useRef<number>(0)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY }
      lastMove.current = performance.now()

      const movement = Math.hypot(event.movementX || 0, event.movementY || 0)
      const strength = Math.max(10, Math.min(22, movement * 0.9 + 10))

      ripples.current.push({
        x: event.clientX,
        y: event.clientY,
        radius: 0,
        opacity: 0.78,
        speed: strength,
      })

      const particleCount = Math.max(4, Math.min(10, Math.round(strength * 0.4)))
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 0.8 + Math.random() * 1.6
        sparks.current.push({
          x: event.clientX,
          y: event.clientY,
          dx: Math.cos(angle) * speed * (1 + movement * 0.03),
          dy: Math.sin(angle) * speed * (1 + movement * 0.03),
          life: 1,
          alpha: 0.7,
          size: 1 + Math.random() * 1.8,
        })
      }

      if (ripples.current.length > 8) {
        ripples.current.shift()
      }
      if (sparks.current.length > 80) {
        sparks.current.splice(0, sparks.current.length - 80)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      const width = canvas.width
      const height = canvas.height
      const now = performance.now()
      const idle = now - lastMove.current > 300

      ctx.clearRect(0, 0, width, height)

      const bg = ctx.createLinearGradient(0, 0, 0, height)
      bg.addColorStop(0, '#020101')
      bg.addColorStop(0.12, '#110404')
      bg.addColorStop(0.38, '#3c0608')
      bg.addColorStop(0.72, '#74090b')
      bg.addColorStop(1, '#140303')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, width, height)

      const subtleLines = ctx.createLinearGradient(0, 0, width, height)
      subtleLines.addColorStop(0, 'rgba(255,0,0,0)')
      subtleLines.addColorStop(0.5, 'rgba(255,0,0,0.018)')
      subtleLines.addColorStop(1, 'rgba(255,0,0,0)')
      ctx.fillStyle = subtleLines
      ctx.fillRect(0, 0, width, height)

      sparks.current = sparks.current
        .map((spark) => ({
          ...spark,
          x: spark.x + spark.dx,
          y: spark.y + spark.dy,
          dx: spark.dx * 0.94,
          dy: spark.dy * 0.94,
          life: spark.life - 0.038,
          alpha: spark.alpha * 0.94,
        }))
        .filter((spark) => spark.life > 0.06)

      ctx.globalCompositeOperation = 'lighter'
      sparks.current.forEach((spark) => {
        const glow = ctx.createRadialGradient(spark.x, spark.y, 0, spark.x, spark.y, spark.size * 6)
        glow.addColorStop(0, `rgba(255, 140, 140, ${spark.alpha})`)
        glow.addColorStop(1, 'rgba(255, 35, 35, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(spark.x - spark.size * 6, spark.y - spark.size * 6, spark.size * 12, spark.size * 12)

        ctx.fillStyle = `rgba(255, 80, 80, ${spark.alpha})`
        ctx.beginPath()
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalCompositeOperation = 'source-over'

      ripples.current = ripples.current
        .map((ripple) => ({
          ...ripple,
          radius: ripple.radius + ripple.speed * 0.7,
          opacity: ripple.opacity * 0.9,
        }))
        .filter((ripple) => ripple.opacity > 0.035 && ripple.radius < 420)

      ripples.current.forEach((ripple) => {
        const ringCount = 5
        for (let i = 0; i < ringCount; i++) {
          const ringRadius = ripple.radius + i * 16 + Math.sin(ripple.radius * 0.09 + i) * 2
          const ringAlpha = ripple.opacity * (1 - i / ringCount) * 0.45
          ctx.strokeStyle = `rgba(255, ${90 + i * 12}, ${90 + i * 8}, ${ringAlpha})`
          ctx.lineWidth = 1.3 * (1 - i / ringCount)
          ctx.beginPath()
          ctx.ellipse(ripple.x, ripple.y, ringRadius, ringRadius * 0.52, 0.12, 0, Math.PI * 2)
          ctx.stroke()
        }

        ctx.save()
        ctx.globalCompositeOperation = 'lighter'
        const glow = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          0,
          ripple.x,
          ripple.y,
          ripple.radius * 0.55
        )
        glow.addColorStop(0, `rgba(255, 120, 120, ${ripple.opacity * 0.22})`)
        glow.addColorStop(0.35, `rgba(255, 45, 45, ${ripple.opacity * 0.1})`)
        glow.addColorStop(1, 'rgba(120, 15, 15, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(
          ripple.x - ripple.radius * 0.55,
          ripple.y - ripple.radius * 0.55,
          ripple.radius * 1.1,
          ripple.radius * 1.1
        )
        ctx.restore()
      })

      if (!idle) {
        const spotlight = ctx.createRadialGradient(
          mousePos.current.x,
          mousePos.current.y,
          0,
          mousePos.current.x,
          mousePos.current.y,
          140
        )
        spotlight.addColorStop(0, 'rgba(255, 110, 110, 0.2)')
        spotlight.addColorStop(0.35, 'rgba(200, 30, 30, 0.12)')
        spotlight.addColorStop(1, 'rgba(80, 10, 10, 0)')
        ctx.fillStyle = spotlight
        ctx.fillRect(mousePos.current.x - 140, mousePos.current.y - 140, 280, 280)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
    }
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
