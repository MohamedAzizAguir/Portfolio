'use client'

import { useEffect, useRef } from 'react'

type Ripple = {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripples = useRef<Ripple[]>([])
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

      if (ripples.current.length > 8) {
        ripples.current.shift()
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
      bg.addColorStop(0, '#0d4f8b')
      bg.addColorStop(0.35, '#0c739f')
      bg.addColorStop(0.62, '#0d89b3')
      bg.addColorStop(1, '#0b5b7f')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, width, height)

      ripples.current = ripples.current
        .map((ripple) => ({
          ...ripple,
          radius: ripple.radius + ripple.speed * 0.65,
          opacity: ripple.opacity * 0.92,
        }))
        .filter((ripple) => ripple.opacity > 0.03 && ripple.radius < 360)

      ripples.current.forEach((ripple) => {
        const ringCount = 4
        for (let i = 0; i < ringCount; i++) {
          const ringRadius = ripple.radius + i * 18
          const ringAlpha = ripple.opacity * (1 - i / ringCount) * 0.38
          ctx.strokeStyle = `rgba(235, 245, 255, ${ringAlpha})`
          ctx.lineWidth = 1.2 * (1 - i / ringCount)
          ctx.beginPath()
          ctx.ellipse(ripple.x, ripple.y, ringRadius, ringRadius * 0.52, 0, 0, Math.PI * 2)
          ctx.stroke()
        }

        const glow = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          0,
          ripple.x,
          ripple.y,
          ripple.radius * 0.6
        )
        glow.addColorStop(0, `rgba(255,255,255,${ripple.opacity * 0.16})`)
        glow.addColorStop(0.45, `rgba(173,216,230,${ripple.opacity * 0.06})`)
        glow.addColorStop(1, 'rgba(173,216,230,0)')
        ctx.fillStyle = glow
        ctx.fillRect(
          ripple.x - ripple.radius * 0.65,
          ripple.y - ripple.radius * 0.65,
          ripple.radius * 1.3,
          ripple.radius * 1.3
        )
      })

      if (!idle) {
        const spotlight = ctx.createRadialGradient(
          mousePos.current.x,
          mousePos.current.y,
          0,
          mousePos.current.x,
          mousePos.current.y,
          120
        )
        spotlight.addColorStop(0, 'rgba(255, 255, 255, 0.16)')
        spotlight.addColorStop(0.35, 'rgba(173, 216, 230, 0.08)')
        spotlight.addColorStop(1, 'rgba(173, 216, 230, 0)')
        ctx.fillStyle = spotlight
        ctx.fillRect(mousePos.current.x - 120, mousePos.current.y - 120, 240, 240)
      }

      requestAnimationFrame(animate)
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
