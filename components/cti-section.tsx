import { portfolioData } from '@/lib/data'
import { Globe, FileText, Bug, Eye } from 'lucide-react'

const statIcons = [
  <Globe key="1" className="w-8 h-8" />,
  <Eye key="2" className="w-8 h-8" />,
  <FileText key="3" className="w-8 h-8" />,
  <Bug key="4" className="w-8 h-8" />,
]

export function CtiSection() {
  return (
    <section id="cti" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-purple-950/50 border border-purple-700/50 text-purple-300 text-sm font-medium">
              Cyber Threat Intelligence
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-100">
            CTI & Threat <span className="text-purple-400">Analysis</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Advanced threat intelligence analysis to identify emerging threats and actor behavior patterns.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {portfolioData.ctiStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-purple-700/30 bg-purple-950/20 p-6 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-purple-400">{stat.value}</p>
                </div>
                <div className="text-purple-400/30">
                  {statIcons[idx]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-purple-700/30 bg-purple-950/20 p-8 hover:border-purple-500/50 transition-all">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Intelligence Analysis</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>Threat actor profiling and attribution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>Attack campaign tracking and analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>Malware reverse engineering and analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>Vulnerability research and disclosure</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-purple-700/30 bg-purple-950/20 p-8 hover:border-purple-500/50 transition-all">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">IOC & Reporting</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>IOC extraction and standardization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>Threat intelligence report generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>STIX/TAXII feed management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>Intelligence sharing and collaboration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
