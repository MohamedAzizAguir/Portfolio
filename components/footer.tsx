import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 animate-slide-up">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Open to discussing cybersecurity opportunities, collaboration projects, or security engineering topics.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Start a conversation <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-start md:items-end justify-start">
            <p className="text-slate-400 text-sm mb-4">Connect with me on</p>
            <div className="flex gap-6">
              <a
                href="https://github.com/Mohamed-Aziz-Aguir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {currentYear} Mohamed Aziz Aguir. All rights reserved.</p>
            <p>Crafted with attention to detail.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
