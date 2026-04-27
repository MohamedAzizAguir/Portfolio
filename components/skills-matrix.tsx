'use client'

import { portfolioData } from '@/lib/data'
import { motion } from 'framer-motion'

export function SkillsMatrix() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
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
            Technical <span className="text-cyan-400">Proficiencies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Expertise across SOC operations, threat intelligence, and DevSecOps domains
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4 text-center">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-8 bg-slate-900/50 border border-slate-700/50 rounded-lg"
        >
          <h3 className="text-lg font-bold text-cyan-400 mb-6">Proficiency Levels</h3>

          <div className="space-y-5">
            {portfolioData.skillsMatrix.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-300">{skill.skill}</span>
                  <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
                </div>

                {/* Skill Bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
