import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-100">Interactive Case Studies & AI Prototypes</h2>
          <p className="text-slate-400 max-w-2xl">
            A deep-dive into product architecture, growth loops, and tech-driven optimization projects I have conceptualized and shipped[cite: 8, 9, 10].
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Maya Voice Agent */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all group">
            <div>
              <div className="h-48 overflow-hidden bg-slate-950">
                <img
                  src="/maya-agent.jpg"
                  alt="Maya Voice AI Agent"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                  Healthcare Voice AI Receptionist "Maya"[cite: 9]
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Low-latency, interruption-aware Voice AI frontdesk prototype built for healthcare and dental practice management systems[cite: 9, 10].
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-800/60 text-xs text-slate-300">
                  <div><strong>End-to-End Latency:</strong> &lt;700ms total turnaround[cite: 10]</div>
                  <div><strong>Stack:</strong> WebRTC, Deepgram, Groq/Llama-3, ElevenLabs[cite: 10, 11]</div>
                  <div><strong>Barge-in VAD:</strong> &lt;50ms audio buffer flush[cite: 11]</div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href="https://birdeye-voice-ai-pms-mock.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-sm font-medium flex items-center justify-center gap-2"
              >
                Launch Live Prototype
                <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: A23 PlayPass */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-teal-500/50 transition-all group">
            <div>
              <div className="h-48 overflow-hidden bg-slate-950">
                <img
                  src="/playpass.jpg"
                  alt="A23 PlayPass UI"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
                  A23 Rummy: PlayPass Retention Engine[cite: 7]
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Personalized discount voucher mechanics built to prevent loss-driven churn during losing streaks and build habit loops[cite: 7].
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-800/60 text-xs text-slate-300">
                  <div><strong>Retention Lift:</strong> Month-1 retention increased 28% → 35%[cite: 7]</div>
                  <div><strong>Conversion:</strong> 85% targeted awareness, 42% adoption[cite: 7]</div>
                  <div><strong>Rake Lift:</strong> +8% average rake per player[cite: 8]</div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="text-xs text-slate-500 font-mono">Framework: RICE Prioritization & Funnel Analysis[cite: 7]</div>
            </div>
          </div>

          {/* Card 3: Hitwicket Onboarding */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-purple-500/50 transition-all group">
            <div>
              <div className="h-48 overflow-hidden bg-slate-950">
                <img
                  src="/hitwicket.jpg"
                  alt="Hitwicket Onboarding"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                  Hitwicket: Onboarding Conversion[cite: 1]
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Strategic overhaul of early user journeys to increase install-to-purchase conversions within the initial 3 days of registration[cite: 1, 2].
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-800/60 text-xs text-slate-300">
                  <div><strong>Special Ability Trial:</strong> 1-match trial with premium finisher[cite: 4]</div>
                  <div><strong>Emotional Anchors:</strong> Story mode & dynamic commentary[cite: 4, 5]</div>
                  <div><strong>Metrics Lift:</strong> +30% RPI3, +20% PUC3, +2% D1 Retention[cite: 8]</div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="text-xs text-slate-500 font-mono">Methodology: 600+ User Interviews & 100+ A/B Experiments[cite: 8]</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
