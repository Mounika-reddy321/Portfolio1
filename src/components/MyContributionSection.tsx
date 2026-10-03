import React from 'react';
import { UserCheck, Code, Cpu, Database, Eye } from 'lucide-react';
import { MY_CONTRIBUTIONS_BREAKDOWN } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const MyContributionSection: React.FC = () => {
  const icons = [
    <Code className="w-5 h-5 text-fuchsia-400" />,
    <Cpu className="w-5 h-5 text-cyan-400" />,
    <Database className="w-5 h-5 text-blue-400" />,
    <UserCheck className="w-5 h-5 text-purple-400" />,
    <Eye className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section className="py-24 bg-[#080C1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Honest Engineering Boundaries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            WHAT I ACTUALLY WORKED ON
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Transparently outlining my hands-on responsibilities, strengths, and specific module contributions across team and individual projects.
          </p>
        </div>

        {/* 5 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MY_CONTRIBUTIONS_BREAKDOWN.map((item, idx) => (
            <Card3D
              key={idx}
              maxTilt={8}
              glowColor="rgba(0, 242, 254, 0.3)"
              className="h-full"
            >
              <div className="h-full rounded-2xl p-6 bg-slate-900/90 border border-slate-800 shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform">
                      {icons[idx]}
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-extrabold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.area}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                    {item.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-800 text-cyan-300 border border-slate-700/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="text-[11px] text-cyan-400 font-medium pt-1 font-mono">
                    Demonstrated in: <span className="text-slate-400">{item.featuredIn}</span>
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
