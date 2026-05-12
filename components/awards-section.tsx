import { portfolioData } from '@/lib/data'
import { Star, Zap } from 'lucide-react'

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-100">
            Awards & <span className="text-red-400">Recognition</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Recognition from industry organizations for contributions to cybersecurity and threat intelligence.
          </p>
        </div>

        {/* Awards Timeline */}
        <div className="space-y-6">
          {portfolioData.awards.map((award, idx) => (
            <div
              key={award.id}
              className="rounded-xl border border-red-700/30 bg-red-950/20 hover:border-red-500/50 hover:bg-red-950/30 transition-all p-8 group animate-slide-up hover-lift"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  {/* Icon */}
                  <div className="rounded-lg bg-red-600/20 p-3 text-red-400 mt-1 group-hover:bg-red-600/30 transition-colors flex-shrink-0">
                    {idx === 0 ? (
                      <Star className="w-6 h-6" />
                    ) : (
                      <Zap className="w-6 h-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-red-400 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-red-400 font-semibold text-lg mb-1">{award.organization}</p>
                    <p className="text-slate-500 text-sm">{award.year}</p>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="px-4 py-2 rounded-lg bg-red-600/20 text-red-400 font-bold text-lg whitespace-nowrap ml-4">
                  {award.year}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed ml-16">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-100 mb-8 animate-slide-up">Professional Experience</h3>
          <div className="space-y-6">
            {portfolioData.experience.map((job, idx) => (
              <div
                key={job.id}
                className="rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50 transition-all p-6 animate-slide-up hover-lift"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-100 mb-1">{job.title}</h4>
                    <p className="text-cyan-400 font-semibold">{job.company}</p>
                  </div>
                  <span className="text-slate-500 text-sm whitespace-nowrap">{job.duration}</span>
                </div>

                <p className="text-slate-400 mb-4">{job.description}</p>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Key Achievements</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, aidx) => (
                      <li key={aidx} className="flex items-start gap-3 text-slate-400">
                        <span className="text-cyan-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
