import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050711] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-slate-950 font-bold text-xs shadow-md">
                M
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.brand}
              </span>
            </div>
            <p className="text-xs text-cyan-300/80 font-mono">
              "{PERSONAL_INFO.tagline}"
            </p>
            <p className="text-xs text-slate-400 max-w-sm font-normal">
              Portfolio of Borapureddy Mounika, final-year B.Tech Artificial Intelligence & Data Science student at Satya Institute of Technology and Management.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
              PORTFOLIO SECTIONS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#about" className="hover:text-cyan-300 transition-colors">About Me</a>
              <a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a>
              <a href="#education" className="hover:text-cyan-300 transition-colors">Education Timeline</a>
              <a href="#architecture" className="hover:text-cyan-300 transition-colors">Attendance Architecture</a>
              <a href="#skills" className="hover:text-cyan-300 transition-colors">AI Skill Matrix</a>
              <a href="#internships" className="hover:text-cyan-300 transition-colors">Internships</a>
              <a href="#certifications" className="hover:text-cyan-300 transition-colors">Certifications</a>
              <a href="#learning-lab" className="hover:text-cyan-300 transition-colors">Learning Lab</a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block">
              CHANNELS
            </span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-500/50 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors pt-2 cursor-pointer font-mono"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Borapureddy Mounika. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">
            3D WebGL Neural Canvas · React 19 · Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
