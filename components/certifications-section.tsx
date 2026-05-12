import { portfolioData } from '@/lib/data'
import { ExternalLink, Award } from 'lucide-react'

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Certifications
          </h2>
          <p className="text-slate-400 text-lg">
            Industry-recognized credentials from leading cybersecurity organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all p-6 flex items-start gap-4 cursor-pointer"
            >
              {/* Icon */}
              <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700 transition-colors flex-shrink-0">
                <Award className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 text-sm">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
                <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
                
                {/* Verify Link */}
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  <span>Verify</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
