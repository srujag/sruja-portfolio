import React from 'react';

const experiences = [
  {
    role: "Senior Product Manager / POD Lead",
    company: "Hitwicket",
    period: "08/2025 - Present",
    points: [
      "Led a 15-member New Users POD (4 APMs, 2 Analysts, 2 Designers, 6 Devs, 1 QA)[cite: 8].",
      "Boosted RPI3 (Revenue) by 30%, PUC3 (Conversions) by 20%, and D1 retention by 2% through 100+ A/B experiments[cite: 8].",
      "Conducted 600+ user interviews, 50+ playtests, and 30+ competitor deconstructs to form product roadmaps[cite: 8].",
      "Optimized dev bandwidth by up to 25% by refining scoping frameworks[cite: 8]."
    ]
  },
  {
    role: "Lead Product Manager",
    company: "A23 (Head Digital Works Pvt Ltd)",
    period: "10/2022 - 08/2025",
    points: [
      "Managed product features across a ₹1,800 Cr revenue mobile gaming platform with 500k MAU and 150k DAU[cite: 8].",
      "Architected an AI/ML redeem propensity model (60% accuracy, 80% recall) saving ~1 Cr/month in targeted offers[cite: 8].",
      "Conceptualized PlayPass and Missions features, boosting 7-day user retention by 12%[cite: 8].",
      "Delivered GST savings of 5 Lakhs/day via redeem cancellation journey and wallet booster optimizations[cite: 8]."
    ]
  },
  {
    role: "Product Manager",
    company: "Turtlemint",
    period: "02/2021 - 10/2022",
    points: [
      "Automated policy renewal pipelines across 8 insurers processing 100k quotes/month, reducing TAT from 10+ days to 1 day[cite: 8].",
      "Integrated third-party chatbot resolving up to 50% of 80k+ monthly support tickets without human agents[cite: 8]."
    ]
  },
  {
    role: "Product Manager",
    company: "Trueno (EV Startup)",
    period: "08/2020 - 01/2021",
    points: [
      "Developed MVP app for EV subscriptions featuring IoT smart riding, keyless unlocking, and real-time tracking[cite: 8]."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto text-slate-100">
      <h2 className="text-3xl font-bold mb-12">Professional History</h2>
      
      <div className="space-y-8 border-l-2 border-slate-800 pl-6 ml-2 sm:ml-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-100">{exp.role} — <span className="text-blue-400">{exp.company}</span></h3>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
