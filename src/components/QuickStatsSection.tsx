import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const QuickStatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#080C1D] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center">
          {QUICK_STATS.map((stat, idx) => (
            <Card3D
              key={idx}
              maxTilt={8}
              glowColor="rgba(0, 242, 254, 0.3)"
              className="h-full"
            >
              <div className="h-full p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 group flex flex-col justify-center">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-cyan-300 transition-colors font-mono tabular-nums glow-text-cyan">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-1.5 font-mono">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {stat.detail}
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};
