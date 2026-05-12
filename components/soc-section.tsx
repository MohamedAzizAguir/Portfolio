import { portfolioData } from '@/lib/data'

export function SocSection() {
  return (
    <section id="soc" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            SOC Operations
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Expertise in security operations management, threat detection, incident response, and security automation.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Threat Detection */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all p-8 animate-slide-up hover-lift">
            <h3 className="text-xl font-bold text-white mb-6">Threat Detection</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Real-time SIEM monitoring and log analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Advanced threat hunting techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Behavioral analytics and anomaly detection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Custom detection rules and signatures</span>
              </li>
            </ul>
          </div>

          {/* Incident Response */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all p-8 animate-slide-up hover-lift" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-white mb-6">Incident Response</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Automated incident triage and escalation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Rapid response playbooks and orchestration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Forensic analysis and root cause investigation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xs mt-1.5">▪</span>
                <span className="text-slate-400 text-sm">Compliance reporting and metrics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Grid */}
        {portfolioData.socStats && portfolioData.socStats.length > 0 && (
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {portfolioData.socStats.map((stat, idx) => (
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
