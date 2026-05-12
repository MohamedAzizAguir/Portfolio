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

      // Clear canvas with water-like gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, '#064e89') // deep water at top
      bgGradient.addColorStop(0.3, '#0e5a97')
      bgGradient.addColorStop(0.5, '#087aa2')
      bgGradient.addColorStop(0.7, '#0d7fa8')
      bgGradient.addColorStop(1, '#0a4d6d') // darkest at bottom
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw main water surface across entire screen
      ctx.beginPath()
      ctx.moveTo(0, 0)

      for (let i = 0; i < points.length; i++) {
        const y = points[i].height * 0.5
        ctx.lineTo(i, y)
      }

      ctx.lineTo(canvas.width, 0)
      ctx.closePath()

      // Main water fill - full screen
      const mainWaterGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      mainWaterGradient.addColorStop(0, 'rgba(6, 182, 212, 0.3)')
      mainWaterGradient.addColorStop(0.2, 'rgba(6, 182, 212, 0.25)')
      mainWaterGradient.addColorStop(0.4, 'rgba(6, 182, 212, 0.15)')
      mainWaterGradient.addColorStop(0.6, 'rgba(3, 102, 214, 0.1)')
      mainWaterGradient.addColorStop(0.8, 'rgba(3, 102, 214, 0.05)')
      mainWaterGradient.addColorStop(1, 'rgba(2, 8, 23, 0)')
      ctx.fillStyle = mainWaterGradient
      ctx.fill()

      // Wave surface line
      ctx.beginPath()
      ctx.moveTo(0, 0)
      for (let i = 0; i < points.length; i++) {
        const y = points[i].height * 0.5
        ctx.lineTo(i, y)
      }
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)'
      ctx.lineWidth = 2.5
      ctx.stroke()

      // Add caustic/refraction patterns for depth perception
      for (let y = 0; y < canvas.height; y += 80) {
        const depthFactor = y / canvas.height
        const waveOffset = Math.sin(time.current * 0.5 + y * 0.01) * 3
        
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - depthFactor * 0.5)})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, y + waveOffset)
        
        for (let x = 0; x < canvas.width; x += 40) {
          const height = Math.sin(x * 0.02 + time.current * 0.3) * 4
          ctx.lineTo(x, y + height + waveOffset)
        }
        ctx.lineTo(canvas.width, y + waveOffset)
        ctx.stroke()
      }

      // Add shimmer/highlights on water surface
      const shineGradient = ctx.createLinearGradient(0, -20, 0, 40)
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      shineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)')
      shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = shineGradient
      ctx.fillRect(0, -20, canvas.width, 60)

      // Add mouse glow
      const glowGradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        300
      )
      glowGradient.addColorStop(0, 'rgba(6, 182, 212, 0.2)')
      glowGradient.addColorStop(0.4, 'rgba(6, 182, 212, 0.08)')
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
