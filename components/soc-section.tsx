import { portfolioData } from '@/lib/data'
import { BarChart3, AlertCircle, TrendingUp, Clock } from 'lucide-react'

const statIcons = [
  <BarChart3 key="1" className="w-8 h-8" />,
  <Clock key="2" className="w-8 h-8" />,
  <AlertCircle key="3" className="w-8 h-8" />,
  <TrendingUp key="4" className="w-8 h-8" />,
]

export function SocSection() {
  return (
    <section id="soc" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-950/50 border border-blue-700/50 text-blue-300 text-sm font-medium">
              Security Operations Center
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-100">
            SOC Operations & <span className="text-blue-400">Incident Response</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Managing security operations at scale with focus on automation, threat detection, and rapid incident response.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {portfolioData.socStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-blue-700/30 bg-blue-950/20 p-6 hover:border-blue-500/50 hover:bg-blue-950/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
                </div>
                <div className="text-blue-400/30">
                  {statIcons[idx]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-blue-700/30 bg-blue-950/20 p-8 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Threat Detection</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>Real-time SIEM monitoring and log analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>Advanced threat hunting techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>Behavioral analytics and anomaly detection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>Custom detection rules and signatures</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-700/30 bg-blue-950/20 p-8 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Incident Response</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>Automated incident triage and escalation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>Rapid response playbooks and orchestration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>Forensic analysis and root cause investigation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>Compliance reporting and metrics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
