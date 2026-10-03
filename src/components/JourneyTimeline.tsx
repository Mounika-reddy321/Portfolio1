import React, { useState } from 'react';
import { Milestone, Sparkles, CheckCircle2 } from 'lucide-react';
import { JOURNEY_TIMELINE } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const JourneyTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(JOURNEY_TIMELINE.length - 2);

  return (
    <section id="journey" className="py-24 bg-[#080C1D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5 text-indigo-400" />
            <span>Progress & Milestones</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MY JOURNEY
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            From algorithmic foundations to real-world software, internships, and computer vision systems.
          </p>
        </div>

        {/* Horizontal / Vertical Hybrid Milestone Flow */}
        <div className="relative">
          {/* Track neon line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 via-fuchsia-500 to-emerald-400 rounded-full shadow-sm shadow-cyan-400/40" />

          {/* Timeline Nodes Grid with 3D Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOURNEY_TIMELINE.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <Card3D
                  key={idx}
                  maxTilt={8}
                  glowColor={isSelected ? 'rgba(0, 242, 254, 0.4)' : 'rgba(121, 40, 202, 0.2)'}
                  className="h-full"
                >
                  <div
                    onClick={() => setActiveStep(idx)}
                    className={`h-full rounded-2xl p-6 border cursor-pointer transition-all duration-300 relative group flex flex-col justify-between ${
                      isSelected
                        ? 'border-cyan-400 bg-slate-900 shadow-xl shadow-cyan-950/50 ring-2 ring-cyan-400/30'
                        : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      {/* Top indicator dot */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800">
                          {step.year}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-base text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 mb-3">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Callout with 3D Glass */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0E1535] to-slate-900 border border-cyan-500/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-cyan-400 font-bold">CURRENT CHAPTER</p>
              <h4 className="font-display font-bold text-white text-sm sm:text-base">
                Synthesizing AI, Computer Vision & Low-Code into End-to-End Solutions
              </h4>
            </div>
          </div>
          <div className="text-xs font-mono font-semibold text-slate-300 bg-slate-950/80 px-3.5 py-1.5 rounded-lg border border-slate-700/80">
            Open for entry-level AI & Data roles · 2026 Graduating Cohort
          </div>
        </div>

      </div>
    </section>
  );
};
