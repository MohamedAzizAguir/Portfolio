'use client'

import { portfolioData } from '@/lib/data'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
          <p className="text-slate-400 text-lg">
            Professional roles and hands-on experience in cybersecurity.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {portfolioData.experience.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300 p-6 hover:border-slate-700 animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 font-medium text-sm">{item.company}</p>
                </div>
                <span className="text-slate-500 text-sm mt-2 sm:mt-0">{item.duration}</span>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-4 leading-relaxed">{item.description}</p>

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-slate-800">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
