'use client'

import { useEffect, useRef } from 'react'

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const gridResolution = useRef(50) // Grid resolution for wave simulation
  const waveGrid = useRef<{
    current: number[][]
    previous: number[][]
  }>({ current: [], previous: [] })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Initialize 2D wave grid
      const resolution = gridResolution.current
      const gridWidth = Math.ceil(canvas.width / resolution)
      const gridHeight = Math.ceil(canvas.height / resolution)

      waveGrid.current.current = Array(gridWidth)
        .fill(0)
        .map(() => Array(gridHeight).fill(0))
      waveGrid.current.previous = Array(gridWidth)
        .fill(0)
        .map(() => Array(gridHeight).fill(0))
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      // Create circular wave disturbance at mouse position
      const resolution = gridResolution.current
      const gridX = Math.floor(e.clientX / resolution)
      const gridY = Math.floor(e.clientY / resolution)
      const spreadRadius = 2

      const current = waveGrid.current.current

      for (let gx = gridX - spreadRadius; gx <= gridX + spreadRadius; gx++) {
        for (let gy = gridY - spreadRadius; gy <= gridY + spreadRadius; gy++) {
          if (current[gx] && current[gx][gy] !== undefined) {
            const distance = Math.hypot(gx - gridX, gy - gridY)
            const force = Math.max(0, 1 - distance / spreadRadius) * 15
            current[gx][gy] += force
          }
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      const current = waveGrid.current.current
      const previous = waveGrid.current.previous
      const resolution = gridResolution.current
      const k = 0.2 // Wave speed
      const damping = 0.96 // Energy loss

      if (!current[0]) {
        requestAnimationFrame(animate)
        return
      }

      const width = current.length
      const height = current[0].length

      // Wave equation simulation - propagate in all directions
      for (let x = 1; x < width - 1; x++) {
        for (let y = 1; y < height - 1; y++) {
          const left = current[x - 1][y]
          const right = current[x + 1][y]
          const up = current[x][y - 1]
          const down = current[x][y + 1]
          const center = current[x][y]

          // Calculate wave propagation from neighbors
          const delta =
            (left - center) * k +
            (right - center) * k +
            (up - center) * k +
            (down - center) * k

          previous[x][y] += delta
          previous[x][y] *= damping
        }
      }

      // Add gravity - restore to zero
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          current[x][y] += (0 - current[x][y]) * 0.01
        }
      }

      // Swap buffers
      const temp = waveGrid.current.current
      waveGrid.current.current = previous
      waveGrid.current.previous = temp

      // Clear canvas with water gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, '#064e89')
      bgGradient.addColorStop(0.3, '#0e5a97')
      bgGradient.addColorStop(0.5, '#087aa2')
      bgGradient.addColorStop(0.7, '#0d7fa8')
      bgGradient.addColorStop(1, '#0a4d6d')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw water surface as 2D height map
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let px = 0; px < canvas.width; px++) {
        for (let py = 0; py < canvas.height; py++) {
          const gridX = Math.floor(px / resolution)
          const gridY = Math.floor(py / resolution)

          let waveHeight = 0
          if (current[gridX] && current[gridX][gridY] !== undefined) {
            waveHeight = current[gridX][gridY] * 2
          }

          // Calculate lighting based on wave height and angle
          const normalX =
            gridX > 0
              ? (current[gridX - 1]?.[gridY] || 0) -
                (current[gridX + 1]?.[gridY] || 0)
              : 0
          const normalY =
            gridY > 0
              ? (current[gridX]?.[gridY - 1] || 0) -
                (current[gridX]?.[gridY + 1] || 0)
              : 0

          // Depth-based color
          const depth = Math.min(1, py / canvas.height)
          const baseColor = {
            r: Math.floor(6 + depth * 10),
            g: Math.floor(182 - depth * 50),
            b: Math.floor(212 - depth * 100),
          }

          // Light reflection from wave surface
          const light = Math.max(0, Math.sin(normalX * 0.1) * 0.3 + 0.7)
          const idx = (py * canvas.width + px) * 4

          data[idx] = Math.floor(baseColor.r * light)
          data[idx + 1] = Math.floor(baseColor.g * light)
          data[idx + 2] = Math.floor(baseColor.b * light)
          data[idx + 3] = 255
        }
      }

      ctx.putImageData(imageData, 0, 0)

      // Draw wave surface outline
      ctx.beginPath()
      for (let px = 0; px < canvas.width; px += resolution) {
        for (let py = 0; py < canvas.height; py += resolution) {
          const gridX = Math.floor(px / resolution)
          const gridY = Math.floor(py / resolution)

          const waveHeight = current[gridX]?.[gridY] || 0
          const y = py + waveHeight * 2

          if (px === 0 && py === 0) {
            ctx.moveTo(px, y)
          } else {
            ctx.lineTo(px, y)
          }
        }
      }
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)'
      ctx.lineWidth = 0.5
      ctx.stroke()

      // Add water shimmer
      const shineGradient = ctx.createLinearGradient(0, -50, 0, 80)
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      shineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.04)')
      shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = shineGradient
      ctx.fillRect(0, -50, canvas.width, 130)

      // Add glow around mouse
      const glowGradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        350
      )
      glowGradient.addColorStop(0, 'rgba(6, 182, 212, 0.15)')
      glowGradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.06)')
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
