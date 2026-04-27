import { portfolioData } from '@/lib/data'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-100">
            Let&apos;s <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Open to collaborations, consulting opportunities, and security discussions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-950/40 hover:border-cyan-400 transition-all p-6 group"
          >
            <div className="flex items-center justify-between mb-3">
              <Mail className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300" />
              <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">Email</h3>
            <p className="text-slate-400 text-sm break-all font-mono text-xs">{portfolioData.email}</p>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700/50 bg-slate-800/20 hover:bg-slate-800/40 hover:border-slate-400 transition-all p-6 group"
          >
            <div className="flex items-center justify-between mb-3">
              <Github className="w-8 h-8 text-slate-400 group-hover:text-slate-300" />
              <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm">@Mohamed-Aziz-Aguir</p>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-500/30 bg-blue-950/20 hover:bg-blue-950/40 hover:border-blue-400 transition-all p-6 group"
          >
            <div className="flex items-center justify-between mb-3">
              <Linkedin className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
              <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Visit Profile</p>
          </a>
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-blue-950/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-100 mb-3">Have a Project in Mind?</h3>
          <p className="text-slate-400 mb-6">
            I&apos;m always interested in hearing about new security challenges and opportunities to contribute my expertise.
          </p>
          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-block px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-colors"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
