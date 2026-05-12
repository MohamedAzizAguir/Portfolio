'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 opacity-40"></div>
      
      {/* Minimal accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Mohamed Aziz Aguir
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-medium mb-8">
            Cybersecurity Engineering Student
          </p>
          
          {/* Expertise Areas */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium hover:border-cyan-500/50 transition-colors">
              SOC Operations
            </span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium hover:border-cyan-500/50 transition-colors">
              Threat Intelligence
            </span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium hover:border-cyan-500/50 transition-colors">
              DevSecOps
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Specializing in Security Operations Center management, SIEM engineering, Cyber Threat Intelligence, and incident response automation. Hands-on experience building detection rules, automating workflows, and securing infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#projects"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/50 active:scale-95"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-slate-900/50 active:scale-95"
          >
            Get In Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce flex justify-center">
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </div>
      </div>
    </section>
  )
}
