import { portfolioData } from '@/lib/data'
import { ExternalLink, Award, Shield, Lock, Zap } from 'lucide-react'

// Badge color mapping by issuer
const getBadgeColor = (issuer: string) => {
  switch (issuer.toLowerCase()) {
    case 'amazon web services':
    case 'aws':
      return { bg: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-500/50', icon: 'text-orange-400', text: 'text-orange-400' }
    case 'cisco':
      return { bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/50', icon: 'text-blue-400', text: 'text-blue-400' }
    case 'fortinet':
      return { bg: 'from-red-500/20 to-red-600/20', border: 'border-red-500/50', icon: 'text-red-400', text: 'text-red-400' }
    default:
      return { bg: 'from-cyan-500/20 to-cyan-600/20', border: 'border-cyan-500/50', icon: 'text-cyan-400', text: 'text-cyan-400' }
  }
}

// Icon mapping by badge name
const getBadgeIcon = (name: string) => {
  if (name.includes('Cloud')) return Shield
  if (name.includes('Network')) return Zap
  if (name.includes('Threat')) return Lock
  return Award
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-100">
            <span className="text-cyan-400">Certifications</span> & Badges
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Industry-recognized credentials from AWS, Cisco, Fortinet, and other leading cybersecurity organizations.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {portfolioData.certifications.map((cert) => {
            const colors = getBadgeColor(cert.issuer)
            const IconComponent = getBadgeIcon(cert.name)
            
            return (
              <a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-lg border ${colors.border} bg-gradient-to-br ${colors.bg} hover:shadow-lg hover:shadow-cyan-500/20 transition-all p-6 flex items-start gap-4`}
              >
                {/* Badge Icon */}
                <div className={`p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700 transition-colors flex-shrink-0`}>
                  <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Badge Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-bold text-slate-100 group-hover:${colors.text} transition-colors line-clamp-2 text-sm`}>
                    {cert.name}
                  </h3>
                  <p className={`text-xs ${colors.text} mt-1 font-medium`}>{cert.issuer}</p>
                  <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
                  
                  {/* Verify Link */}
                  <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-slate-800/50 group-hover:bg-slate-700 text-slate-300 group-hover:text-slate-100 transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    <span>Verify</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-8">
            <span className="text-cyan-400">Core</span> Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.skills.map((skillGroup, idx) => (
              <div key={idx} className="rounded-lg border border-cyan-500/20 bg-slate-900/50 hover:bg-slate-900 hover:border-cyan-500/50 p-6 transition-all">
                <h4 className="font-bold text-slate-100 mb-4 text-cyan-400">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1 rounded-lg bg-slate-700/50 text-slate-300 text-sm border border-slate-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
