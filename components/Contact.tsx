import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-slate-100">Let's Connect</h2>
        <p className="text-slate-400 text-lg">
          Interested in discussing Product Strategy, Voice AI System Architecture, or Growth Optimization? Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <a
            href="mailto:gangolus2020@email.iimcal.ac.in"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-blue-500 transition-all"
          >
            <span>Email Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sruja-gangolu-58605848/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-blue-500 transition-all"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/srujag"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-blue-500 transition-all"
          >
            <span>GitHub</span>
          </a>
        </div>

        <div className="pt-12 text-xs text-slate-600">
          © {new Date().getFullYear()} Sruja Gangolu. Built with Next.js & Tailwind CSS. Hosted on Vercel.
        </div>
      </div>
    </section>
  );
}
