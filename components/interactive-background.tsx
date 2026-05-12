'use client'

import { useEffect, useRef } from 'react'

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const waveData = useRef<{ current: number[], previous: number[], damping: number }>({
    current: [],
    previous: [],
    damping: 0.995,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Reset wave data on resize
      const width = canvas.width
      waveData.current.current = new Array(width).fill(0)
      waveData.current.previous = new Array(width).fill(0)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      // Create wave disturbance at mouse position
      const width = canvas.width
      const x = Math.floor((e.clientX / width) * width)
      const spreadRadius = 30

      for (let i = -spreadRadius; i <= spreadRadius; i++) {
        const idx = x + i
        if (idx >= 0 && idx < width) {
          const distance = Math.abs(i)
          const force = Math.max(0, 1 - distance / spreadRadius) * 15
          waveData.current.current[idx] += force
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Wave simulation
    const simulateWaves = () => {
      const width = canvas.width
      const current = waveData.current.current
      const previous = waveData.current.previous
      const damping = waveData.current.damping

      // Wave equation simulation
      for (let i = 1; i < width - 1; i++) {
        const leftDelta = (current[i - 1] - current[i]) * 0.25
        const rightDelta = (current[i + 1] - current[i]) * 0.25
        const change = leftDelta + rightDelta

        previous[i] += change
        previous[i] *= damping
      }

      // Swap buffers
      const temp = waveData.current.current
      waveData.current.current = previous
      waveData.current.previous = temp

      // Add gravity (restore to zero)
      for (let i = 0; i < width; i++) {
        current[i] += (0 - current[i]) * 0.01
      }
    }

    // Animation loop
    const animate = () => {
      simulateWaves()

      // Clear canvas with gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, '#0f172a') // slate-900
      bgGradient.addColorStop(0.5, '#020817') // slate-950
      bgGradient.addColorStop(1, '#020817') // slate-950
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw water waves with gradient
      const waveGradient = ctx.createLinearGradient(0, canvas.height * 0.3, 0, canvas.height)
      waveGradient.addColorStop(0, 'rgba(6, 182, 212, 0.15)') // cyan-500 with transparency
      waveGradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)')
      waveGradient.addColorStop(0.6, 'rgba(3, 102, 214, 0.08)') // blue-600
      waveGradient.addColorStop(1, 'rgba(2, 8, 23, 0.3)') // slate-950

      ctx.fillStyle = waveGradient
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.5)

      // Draw wave path
      const current = waveData.current.current
      const waveHeight = canvas.height * 0.25
      const centerY = canvas.height * 0.5

      for (let x = 0; x < canvas.width; x++) {
        const waveOffset = (current[x] || 0) * 0.3
        ctx.lineTo(x, centerY + waveOffset)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fill()

      // Add wave line effect
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, centerY)

      for (let x = 0; x < canvas.width; x++) {
        const waveOffset = (current[x] || 0) * 0.3
        ctx.lineTo(x, centerY + waveOffset)
      }

      ctx.stroke()

      // Add glow at mouse position
      const gradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        200
      )
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.2)')
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.05)')
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0)')
      ctx.fillStyle = gradient
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
