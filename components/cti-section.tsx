import { portfolioData } from '@/lib/data'

export function CtiSection() {
  return (
    <section id="cti" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Cyber Threat Intelligence
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Advanced threat intelligence analysis to identify emerging threats, actor behavior patterns, and strategic insights.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Intelligence Analysis */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all p-8 animate-slide-up hover-lift">
            <h3 className="text-xl font-bold text-white mb-6">Intelligence Analysis</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Threat actor profiling and attribution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Attack campaign tracking and analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Malware reverse engineering and analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Vulnerability research and disclosure</span>
              </li>
            </ul>
          </div>

          {/* IOC & Reporting */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all p-8 animate-slide-up hover-lift" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-white mb-6">IOC & Reporting</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">IOC extraction and standardization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Threat intelligence report generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">STIX/TAXII feed management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Intelligence sharing and collaboration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Grid */}
        {portfolioData.ctiStats && portfolioData.ctiStats.length > 0 && (
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {portfolioData.ctiStats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-800 bg-slate-900/30 p-4 text-center hover:bg-slate-900/60 transition-all animate-slide-up hover-lift"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <p className="text-slate-400 text-xs font-medium mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
