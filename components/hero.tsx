'use client'

import Link from 'next/link'
import { ChevronDown, MapPin, BookOpen, Briefcase } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Badge */}
        <div className="mb-8 inline-block animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-300 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span>DevSecOps Internship • DOT IT Sousse, Tunisia</span>
        {/* Main Heading */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Mohamed Aziz Aguir
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-semibold mb-4">
            DevSecOps & Cybersecurity Engineering Student
          </p>
          <p className="text-base sm:text-lg text-slate-400 mb-6">
            Securing CI/CD, hardening infrastructure, and automating threat response in Sousse.
          </p>
        </div>

        {/* Current Role Info */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="px-6 py-4 bg-slate-900/40 border border-slate-800/50 rounded-lg backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-400 text-sm font-medium">Final Year</span>
            </div>
            <p className="text-slate-300 text-sm">Cybersecurity Engineering</p>
          </div>
          <div className="px-6 py-4 bg-slate-900/40 border border-slate-800/50 rounded-lg backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-400 text-sm font-medium">Internship</span>
            </div>
            <p className="text-slate-300 text-sm">DevSecOps Engineering</p>
          </div>
          <div className="px-6 py-4 bg-slate-900/40 border border-slate-800/50 rounded-lg backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-400 text-sm font-medium">Location</span>
            </div>
            <p className="text-slate-300 text-sm">Sousse, Tunisia</p>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium hover:border-cyan-500/50 transition-all duration-300 cursor-default">
            SOC Operations
          </span>
          <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium hover:border-cyan-500/50 transition-all duration-300 cursor-default">
            Threat Intelligence
          </span>
          <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium hover:border-cyan-500/50 transition-all duration-300 cursor-default">
            DevSecOps
          </span>
          <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium hover:border-cyan-500/50 transition-all duration-300 cursor-default">
            Detection Engineering
          </span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Passionate cybersecurity student specializing in Security Operations Center management, SIEM engineering, Cyber Threat Intelligence, and incident response automation. Currently gaining hands-on experience at DOT IT Sousse, building detection rules, automating workflows, and securing infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/50 active:scale-95 transform hover:-translate-y-1"
          >
            Explore My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-slate-900/50 active:scale-95 transform hover:-translate-y-1"
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
