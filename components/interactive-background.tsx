'use client'

import { useEffect, useRef } from 'react'

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const gridResolution = useRef(25)
  const waveBuffers = useRef<{ current: number[][]; previous: number[][] }>({ current: [], previous: [] })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const initGrid = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const cols = Math.ceil(canvas.width / gridResolution.current)
      const rows = Math.ceil(canvas.height / gridResolution.current)

      waveBuffers.current.current = Array.from({ length: rows }, () => Array(cols).fill(0))
      waveBuffers.current.previous = Array.from({ length: rows }, () => Array(cols).fill(0))
    }

    initGrid()
    window.addEventListener('resize', initGrid)

    const disturb = (gridX: number, gridY: number, radius: number, strength: number) => {
      const current = waveBuffers.current.current
      for (let y = gridY - radius; y <= gridY + radius; y++) {
        for (let x = gridX - radius; x <= gridX + radius; x++) {
          if (current[y]?.[x] !== undefined) {
            const dist = Math.hypot(x - gridX, y - gridY)
            if (dist <= radius) {
              current[y][x] += strength * (1 - dist / radius)
            }
          }
        }
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY }
      const gridX = Math.floor(event.clientX / gridResolution.current)
      const gridY = Math.floor(event.clientY / gridResolution.current)
      disturb(gridX, gridY, 3, 18)
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      const current = waveBuffers.current.current
      const previous = waveBuffers.current.previous
      const damping = 0.99
      const rows = current.length
      const cols = current[0]?.length || 0

      if (rows === 0 || cols === 0) {
        requestAnimationFrame(animate)
        return
      }

      for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < cols - 1; x++) {
          const newValue =
            (current[y][x - 1] +
              current[y][x + 1] +
              current[y - 1][x] +
              current[y + 1][x]) /
              2 -
            previous[y][x]
          previous[y][x] = newValue * damping
        }
      }

      const temp = waveBuffers.current.current
      waveBuffers.current.current = waveBuffers.current.previous
      waveBuffers.current.previous = temp

      const width = canvas.width
      const height = canvas.height

      const bg = ctx.createLinearGradient(0, 0, 0, height)
      bg.addColorStop(0, '#0d4783')
      bg.addColorStop(0.25, '#0b5f9a')
      bg.addColorStop(0.5, '#0c7bb1')
      bg.addColorStop(0.75, '#0a8ac0')
      bg.addColorStop(1, '#0d5d7b')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, width, height)

      ctx.lineWidth = 1.2
      for (let y = 0; y < rows; y++) {
        const alpha = 0.35 + (y / rows) * 0.2
        ctx.strokeStyle = `rgba(173, 216, 230, ${alpha})`
        ctx.beginPath()
        for (let x = 0; x < cols; x++) {
          const px = x * gridResolution.current
          const py = y * gridResolution.current + current[y][x] * 5
          if (x === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      // Top-down ripple highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 1
      for (let y = 2; y < rows - 2; y += 2) {
        ctx.beginPath()
        for (let x = 0; x < cols; x++) {
          const px = x * gridResolution.current
          const py = y * gridResolution.current + current[y][x] * 3
          if (x === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      // Mouse ripple glow
      const glow = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        250
      )
      glow.addColorStop(0, 'rgba(173, 216, 230, 0.18)')
      glow.addColorStop(0.4, 'rgba(173, 216, 230, 0.08)')
      glow.addColorStop(1, 'rgba(173, 216, 230, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', initGrid)
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
