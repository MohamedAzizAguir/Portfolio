'use client'

import { portfolioData } from '@/lib/data'

export function SOCPipeline() {
  const pipeline = portfolioData.socPipeline

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            SOC Pipeline Flow
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            End-to-end security operations workflow from data collection through automated response
          </p>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative">
          {/* Pipeline Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pipeline.map((stage, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Arrow connector for desktop */}
                {index < pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="text-slate-500 text-2xl group-hover:text-cyan-400 transition-colors">→</div>
                  </div>
                )}

                {/* Stage Card */}
                <div className="relative p-6 rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300">
                  {/* Stage Number */}
                  <div className="absolute -top-3 left-4 w-6 h-6 rounded-full bg-cyan-500 text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">
                    {stage.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">{stage.stage}</h3>

                  {/* Description */}
                  <div className="text-xs text-slate-400">
                    {index === 0 && "Collect logs from all security tools"}
                    {index === 1 && "Normalize and correlate events"}
                    {index === 2 && "Detect threats with rules"}
                    {index === 3 && "Alert and review findings"}
                    {index === 4 && "Execute automated responses"}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Principle */}
          <div className="mt-12 p-6 bg-slate-900/30 border border-slate-800 rounded-lg text-center">
            <p className="text-slate-300 text-sm">
              <span className="text-cyan-400 font-semibold">Key Principle:</span> Automation reduces MTTR and improves threat detection accuracy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
