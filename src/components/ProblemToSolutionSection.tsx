import React, { useState } from 'react';
import { RefreshCw, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PROBLEM_TO_SOLUTION_CARDS } from '../data/portfolioData';
import { PROJECT_3D_IMAGES } from '../data/imageAssets';
import { Card3D } from './Card3D';
import { playNavClickSound } from '../utils/soundEffects';

export const ProblemToSolutionSection: React.FC = () => {
  const [activeSolutions, setActiveSolutions] = useState<Record<string, boolean>>({
    'problem-1': true,
    'problem-2': true,
    'problem-3': false,
    'problem-4': false,
  });

  const toggleSolution = (id: string) => {
    playNavClickSound();
    setActiveSolutions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="problem-solution" className="py-24 bg-[#070914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Applied Engineering Thinking</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            FROM PROBLEM → SOLUTION
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Every project begins with a clear real-world friction point. Hover or toggle each card to observe how computational models and clean interfaces resolve the challenge.
          </p>
        </div>

        {/* 4 Transformation 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEM_TO_SOLUTION_CARDS.map((card) => {
            const isSolution = activeSolutions[card.id];
            const projectImg = PROJECT_3D_IMAGES[card.projectRef];

            return (
              <Card3D
                key={card.id}
                maxTilt={9}
                glowColor={isSolution ? 'rgba(0, 245, 160, 0.35)' : 'rgba(244, 63, 94, 0.35)'}
                className="h-full"
              >
                <div
                  onMouseEnter={() => {
                    setActiveSolutions((prev) => ({ ...prev, [card.id]: true }));
                  }}
                  className={`h-full rounded-3xl p-7 border transition-all duration-500 relative overflow-hidden group shadow-xl flex flex-col justify-between ${
                    isSolution
                      ? 'bg-slate-900/90 border-emerald-500/40 ring-1 ring-emerald-500/30'
                      : 'bg-slate-900/90 border-rose-500/40 ring-1 ring-rose-500/30'
                  }`}
                >
                  <div>
                    {/* Top Banner Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-extrabold text-slate-500">
                          CASE {card.number}
                        </span>
                        <span className="text-slate-700">/</span>
                        <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                          {card.domain}
                        </span>
                      </div>

                      {/* Mode Toggle Button */}
                      <button
                        onClick={() => toggleSolution(card.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                          isSolution
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                            : 'bg-rose-950 text-rose-300 border border-rose-700'
                        }`}
                      >
                        <span>{isSolution ? 'SOLUTION VIEW' : 'PROBLEM VIEW'}</span>
                        <RefreshCw className="w-3 h-3 transition-transform group-hover:rotate-180 duration-500" />
                      </button>
                    </div>

                    {/* Morphing Content State */}
                    <div className="min-h-[170px] flex flex-col justify-between">
                      {isSolution ? (
                        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                          <div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>The Engineered Solution</span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-4 items-start">
                            {projectImg && (
                              <div className="w-full sm:w-28 h-20 rounded-xl overflow-hidden border border-emerald-500/30 shrink-0">
                                <img
                                  src={projectImg}
                                  alt={card.solutionTitle}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <h3 className="font-display font-bold text-xl text-white leading-snug">
                                {card.solutionTitle}
                              </h3>
                              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mt-1">
                                {card.solutionDescription}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-rose-400 uppercase tracking-wider">
                            <AlertCircle className="w-4 h-4 text-rose-400" />
                            <span>The Real-World Friction</span>
                          </div>
                          <h3 className="font-display font-bold text-xl text-white leading-snug">
                            {card.problemTitle}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            {card.problemDescription}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Interactive Prompt */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="text-[11px]">
                      {isSolution ? 'Hover/Click to inspect root problem' : 'Hover to reveal engineering solution'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

      </div>
    </section>
  );
};
