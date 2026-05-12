'use client'

import { portfolioData } from '@/lib/data'

export function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-lg">
            Technical proficiencies across security operations, threat intelligence, and DevSecOps.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-8">
          <h3 className="text-xl font-bold text-white mb-8">Proficiency Matrix</h3>

          <div className="space-y-6">
            {portfolioData.skillsMatrix.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-slate-200 text-sm">{skill.skill}</span>
                  <span className="text-xs text-cyan-400 font-medium">{skill.level}%</span>
                </div>

                {/* Skill Bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
