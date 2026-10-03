import React from 'react';
import { FileText, Download, Eye, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { playWowSound } from '../utils/soundEffects';
import { triggerGrandWowBurst } from '../utils/burstEffect';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const handleClick = (e: React.MouseEvent) => {
    playWowSound();
    triggerGrandWowBurst();
    onOpenResume();
  };

  return (
    <section className="py-24 bg-[#070914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card3D maxTilt={6} glowColor="rgba(0, 242, 254, 0.45)">
          <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-950 via-[#0C1230] to-slate-950 text-white shadow-2xl border border-cyan-500/35 overflow-hidden">
            {/* Subtle cyber grid pattern & ambient glows */}
            <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-fuchsia-500/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Full Academic Dossier</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                WANT TO KNOW MORE ABOUT MY JOURNEY?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Explore my education, projects, internships, skills and certifications in a structured digital format.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-indigo-600" />
                  <span>VIEW RESUME</span>
                </button>

                <button
                  onClick={handleClick}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD RESUME</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-400 pt-2">
                resumeFile placeholder configured · Satya Institute of Technology and Management
              </div>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
};
