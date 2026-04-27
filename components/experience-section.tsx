'use client'

import { portfolioData } from '@/lib/data'
import { motion } from 'framer-motion'

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="text-cyan-400">Background</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Journey through cybersecurity roles, projects, and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline connector */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-6 top-20 w-1 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-12 h-12 rounded-full border-2 border-cyan-500 bg-slate-950 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Experience Card */}
              <div className="ml-24 p-6 bg-slate-900/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
                    <p className="text-slate-300 font-medium">{item.company}</p>
                  </div>
                  <span className="text-sm text-slate-400 font-mono mt-2 sm:mt-0">{item.duration}</span>
                </div>

                <p className="text-slate-400 mb-4">{item.description}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-green-400 font-bold mt-0.5">▪</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
