import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 max-w-6xl mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Lead Product Manager | IIM Calcutta & IIT Kharagpur[cite: 8]
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Building High-Impact <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Gaming, AI & Digital</span> Products
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            7+ years of experience driving growth ($RPI_3$, retention, $PUC_3$ optimization) through quantitative experimentation and qualitative user discovery[cite: 8]. Specialized in monetization loops, AI voice agents, and high-scale consumer digital platforms[cite: 8, 9].
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25">
              Explore Case Studies
            </a>
            <a href="https://birdeye-voice-ai-pms-mock.vercel.app" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-all flex items-center gap-2">
              Try Voice Agent Maya Demo
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <div className="pt-4 flex items-center gap-6 text-sm text-slate-400 border-t border-slate-800/80">
            <div>Published Author (1 Novel, 20+ Short Stories)[cite: 8]</div>
            <div>100+ A/B Tests Executed[cite: 8]</div>
          </div>
        </div>
      </div>
    </section>
  );
}
