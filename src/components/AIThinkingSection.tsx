import React from 'react';
import { Lightbulb, Database, LineChart, Code2, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { AI_THINKING_APPROACH } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const AIThinkingSection: React.FC = () => {
  const stepIcons = [
    <Lightbulb className="w-5 h-5 text-amber-400" />,
    <Database className="w-5 h-5 text-cyan-400" />,
    <LineChart className="w-5 h-5 text-blue-400" />,
    <Code2 className="w-5 h-5 text-indigo-400" />,
    <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    <TrendingUp className="w-5 h-5 text-fuchsia-400" />
  ];

  return (
    <section className="py-24 bg-[#080C1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Problem-Solving Mindset</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            HOW I APPROACH A PROBLEM
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            The learning and development methodology I follow when tackling academic challenges, machine learning tasks, and software builds.
          </p>
        </div>

        {/* 6 Steps Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_THINKING_APPROACH.map((step, idx) => (
            <Card3D
              key={step.step}
              maxTilt={8}
              glowColor="rgba(0, 242, 254, 0.3)"
              className="h-full"
            >
              <div className="h-full rounded-2xl p-6 bg-slate-900/90 border border-slate-800 shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-extrabold text-cyan-300 bg-cyan-950 border border-cyan-800 px-2 py-0.5 rounded">
                      STEP {step.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform">
                      {stepIcons[idx]}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    {step.phase}
                  </span>

                  <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};
