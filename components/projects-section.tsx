'use client'

import { portfolioData } from '@/lib/data'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-100">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Security solutions and tools I&apos;ve built to solve real-world cybersecurity challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group rounded-lg border bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Project Card */}
              <div className="p-6">
                {/* Category and Period Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded text-xs font-mono text-cyan-300 bg-cyan-500/20 border border-cyan-500/50">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{project.period}</span>
                </div>

                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights - Key achievements */}
                <div className="mb-5 border-l-2 border-cyan-500/50 pl-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-sm text-slate-300 mb-2 flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">▪</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest font-mono">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded bg-slate-800/50 text-slate-300 text-xs font-mono border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-slate-700/50">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded text-cyan-400 hover:text-cyan-300 text-sm font-medium hover:bg-cyan-500/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
