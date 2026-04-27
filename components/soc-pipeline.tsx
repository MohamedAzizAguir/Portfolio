'use client'

import { portfolioData } from '@/lib/data'
import { motion } from 'framer-motion'

export function SOCPipeline() {
  const pipeline = portfolioData.socPipeline

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            SOC <span className="text-cyan-400">Pipeline Flow</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            End-to-end security operations workflow from log ingestion to automated response
          </p>
        </motion.div>

        {/* Pipeline Visualization */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 transform -translate-y-1/2 hidden lg:block"></div>

          {/* Pipeline Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pipeline.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Arrow connector */}
                {index < pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="text-cyan-500 text-2xl">→</div>
                  </div>
                )}

                {/* Stage Card */}
                <div className={`relative p-6 rounded-lg border transition-all duration-300 hover:shadow-lg group ${
                  index % 2 === 0 
                    ? 'bg-slate-900/50 border-cyan-500/50 hover:border-cyan-400 hover:shadow-cyan-500/20' 
                    : 'bg-slate-900/50 border-purple-500/50 hover:border-purple-400 hover:shadow-purple-500/20'
                }`}>
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stage.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{stage.stage}</h3>

                  {/* Stage Number */}
                  <div className="absolute top-2 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Stage Description */}
                  <div className="text-xs text-slate-400 mt-4 border-t border-slate-700/50 pt-3">
                    {index === 0 && "Collect from all sources"}
                    {index === 1 && "Centralized analysis"}
                    {index === 2 && "Threat detection"}
                    {index === 3 && "Manual review"}
                    {index === 4 && "Automated action"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-slate-900/50 border border-slate-700/50 rounded-lg"
          >
            <p className="text-slate-300 text-center text-sm">
              <span className="text-cyan-400 font-semibold">Key Principle:</span> Automated detection and response reduces MTTR, 
              improves accuracy, and allows analysts to focus on advanced threats and threat hunting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
