'use client'

import { useEffect, useRef } from 'react'

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const wavePoints = useRef<{ height: number; velocity: number }[]>([])
  const time = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Initialize wave points
      const numPoints = canvas.width
      wavePoints.current = Array(numPoints).fill(0).map(() => ({
        height: 0,
        velocity: 0,
      }))
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      // Create wave disturbance at mouse position
      const x = Math.floor(e.clientX)
      const spreadRadius = 40

      for (let i = -spreadRadius; i <= spreadRadius; i++) {
        const idx = x + i
        if (idx >= 0 && idx < wavePoints.current.length) {
          const distance = Math.abs(i)
          const force = Math.max(0, 1 - distance / spreadRadius) * 8
          wavePoints.current[idx].velocity += force
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      time.current += 0.016 // ~60fps

      // Update wave physics
      const points = wavePoints.current
      const k = 0.025 // Spring constant
      const damping = 0.98 // Damping factor
      const spread = 0.25 // Spread to neighbors

      // Update velocities and positions
      for (let i = 0; i < points.length; i++) {
        // Spring force - pull back to zero
        const force = -k * points[i].height
        points[i].velocity += force
        
        // Apply velocity
        points[i].height += points[i].velocity
        
        // Apply damping
        points[i].velocity *= damping
      }

      // Spread to neighbors
      const leftDeltas = new Array(points.length).fill(0)
      const rightDeltas = new Array(points.length).fill(0)

      for (let i = 0; i < points.length - 1; i++) {
        const delta = spread * (points[i].height - points[i + 1].height)
        leftDeltas[i + 1] += delta
        rightDeltas[i] -= delta
      }

      for (let i = 0; i < points.length; i++) {
        points[i].height += leftDeltas[i] + rightDeltas[i]
      }

      // Clear canvas
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, '#0f172a') // slate-900
      bgGradient.addColorStop(0.5, '#020817') // slate-950
      bgGradient.addColorStop(1, '#020817')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw water surface
      const waveBaseY = canvas.height * 0.45
      const waveAmplitude = 30

      ctx.beginPath()
      ctx.moveTo(0, waveBaseY)

      for (let i = 0; i < points.length; i++) {
        const y = waveBaseY + points[i].height
        ctx.lineTo(i, y)
      }

      // Fill water
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()

      // Water gradient fill
      const waterGradient = ctx.createLinearGradient(0, waveBaseY, 0, canvas.height)
      waterGradient.addColorStop(0, 'rgba(6, 182, 212, 0.25)')
      waterGradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.15)')
      waterGradient.addColorStop(0.7, 'rgba(3, 102, 214, 0.1)')
      waterGradient.addColorStop(1, 'rgba(2, 8, 23, 0.4)')
      ctx.fillStyle = waterGradient
      ctx.fill()

      // Draw wave outline
      ctx.beginPath()
      ctx.moveTo(0, waveBaseY)
      for (let i = 0; i < points.length; i++) {
        const y = waveBaseY + points[i].height
        ctx.lineTo(i, y)
      }
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)'
      ctx.lineWidth = 2.5
      ctx.stroke()

      // Add subtle shimmer/light
      const shineGradient = ctx.createLinearGradient(0, waveBaseY - 20, 0, waveBaseY + 20)
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      shineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)')
      shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = shineGradient
      ctx.fillRect(0, waveBaseY - 20, canvas.width, 40)

      // Add mouse glow
      const glowGradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        250
      )
      glowGradient.addColorStop(0, 'rgba(6, 182, 212, 0.15)')
      glowGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.05)')
      glowGradient.addColorStop(1, 'rgba(6, 182, 212, 0)')
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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
