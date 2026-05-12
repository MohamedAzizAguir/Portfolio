import { portfolioData } from '@/lib/data'
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg">
            Interested in discussing cybersecurity, collaborating on projects, or exploring opportunities.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="group rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all p-6 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
            </div>
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-slate-400 text-sm break-all">{portfolioData.email}</p>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all p-6 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <Github className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
            </div>
            <h3 className="font-semibold text-white mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm">View Profile</p>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all p-6 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
            </div>
            <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Connect</p>
          </a>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Let's Build Something</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Open to discussing security solutions, consulting on cybersecurity challenges, or collaborating on impactful projects.
          </p>
          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/50 active:scale-95"
          >
            Send Email <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
