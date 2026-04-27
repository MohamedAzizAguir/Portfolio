'use client'

import { portfolioData } from '@/lib/data'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Booting SOC Interface..."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-5"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Terminal-style top bar */}
        <div className="mb-12 inline-block">
          <div className="bg-slate-900/50 border border-cyan-500/50 rounded-t-lg px-4 py-2 text-xs text-cyan-400 font-mono backdrop-blur-sm">
            $ <span className="text-green-400">portfolio_interface</span> --init
          </div>
        </div>

        {/* Main Title with typing effect */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-mono tracking-wider mb-6">
            <span className="text-cyan-400">{displayText}</span>
            <span className="animate-pulse text-cyan-400">▊</span>
          </h1>

          {/* Name and Role */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Mohamed Aziz Aguir
          </h2>
          <p className="text-lg md:text-xl text-cyan-300 font-mono mb-4">
            Cybersecurity Engineering Student
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded text-purple-300 text-sm font-mono">SOC</span>
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded text-blue-300 text-sm font-mono">SIEM</span>
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded text-green-300 text-sm font-mono">CTI</span>
            <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded text-orange-300 text-sm font-mono">DevSecOps</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Cybersecurity engineering student specializing in SOC operations, SIEM engineering, Cyber Threat Intelligence, and DevSecOps. 
          Strong hands-on experience with detection engineering, incident response automation, and security infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#projects"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all duration-200 font-semibold border border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Explore Systems
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-cyan-500/50 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 font-semibold"
          >
            Get In Touch
          </Link>
        </div>

        {/* System Status */}
        <div className="text-xs text-slate-400 font-mono inline-block bg-slate-900/50 border border-slate-700 rounded px-4 py-2">
          <span className="text-green-400">●</span> All Systems Online
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-16">
          <svg className="w-6 h-6 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
