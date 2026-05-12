'use client'

import { portfolioData } from '@/lib/data'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Real-world security solutions and tools built to solve cybersecurity challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300 hover:border-slate-700 p-6 cursor-pointer animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {project.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-4 space-y-2">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xs mt-1">▪</span>
                      <span className="text-slate-400 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800/50">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 text-xs font-medium hover:bg-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
