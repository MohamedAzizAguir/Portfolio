'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine, Container } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

export function InteractiveBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    return container
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="vfx-background"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: '#050101' },
          },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ['grab', 'bubble'],
              },
              onClick: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 220,
                links: {
                  opacity: 0.3,
                },
              },
              bubble: {
                distance: 180,
                size: 14,
                duration: 2,
                opacity: 0.9,
              },
              repulse: {
                distance: 220,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 1200,
              },
            },
            color: {
              value: ['#ff1f1f', '#ff6b6b', '#8a0202'],
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.56,
              random: { enable: true, minimumValue: 0.2 },
              animation: {
                enable: true,
                speed: 0.9,
                minimumValue: 0.15,
                sync: false,
              },
            },
            size: {
              value: { min: 1.2, max: 4.2 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.8,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 140,
              color: '#ff1f1f',
              opacity: 0.12,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.4,
              direction: 'none',
              random: true,
              straight: false,
              outModes: {
                default: 'out',
              },
            },
          },
          retina_detect: true,
        }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </div>
  )
}
