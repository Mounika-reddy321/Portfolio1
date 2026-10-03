import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, Check } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const EducationSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section id="education" className="py-16 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            EDUCATION TIMELINE
          </h2>
          <p className="mt-1.5 text-slate-300 text-xs sm:text-sm">
            Academic foundation in artificial intelligence, computer science, and data engineering.
          </p>
        </div>

        {/* Timeline Layout (Decreased card sizes, compact & neat) */}
        <div className="relative">
          {/* Vertical Glowing Neon Connection Line */}
          <div className="hidden sm:block absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-sm shadow-cyan-400 opacity-60" />

          <div className="space-y-4">
            {EDUCATION_DATA.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="relative sm:pl-14 transition-all duration-200"
                >
                  {/* Timeline Glowing Node Dot */}
                  <div
                    className={`hidden sm:flex absolute left-4 top-5 -translate-x-1/2 w-5 h-5 rounded-full border items-center justify-center transition-all duration-200 ${
                      isHovered
                        ? 'border-cyan-400 bg-cyan-950 ring-2 ring-cyan-500/40 scale-110'
                        : 'border-slate-700 bg-slate-900'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isHovered ? 'bg-cyan-400 shadow-sm shadow-cyan-300' : 'bg-slate-500'
                      }`}
                    />
                  </div>

                  {/* Decreased Size 3D Education Card */}
                  <Card3D
                    maxTilt={5}
                    glowColor="rgba(0, 242, 254, 0.2)"
                  >
                    <div
                      className={`rounded-xl p-3.5 sm:p-4 border transition-all duration-200 shadow-md ${
                        isHovered
                          ? 'border-cyan-500/50 bg-[#0A0F26]/90 shadow-cyan-950/40'
                          : 'border-slate-800/90 bg-slate-900/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                              {item.level}
                            </span>
                            <span className="text-slate-600 text-xs">·</span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                              <Calendar className="w-2.5 h-2.5 text-cyan-400" />
                              {item.timeline}
                            </span>
                          </div>
                          
                          <h3 className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                            {item.institution}
                          </h3>
                          <p className="text-xs text-cyan-300 font-mono mt-0.5">
                            {item.degree}
                          </p>
                        </div>

                        {/* Compact Performance Metric Badge */}
                        <div className="px-2.5 py-1 rounded-lg bg-slate-950/90 border border-cyan-500/40 flex items-center gap-1.5 shrink-0">
                          <Award className="w-3 h-3 text-cyan-400" />
                          <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold">Score:</span>
                          <span className="font-mono font-bold text-xs sm:text-sm text-cyan-300">
                            {item.score}
                          </span>
                        </div>
                      </div>

                      <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal mb-2.5 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Highlights as compact micro chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] text-slate-300 bg-slate-800/70 border border-slate-700/60 px-2 py-0.5 rounded-md"
                          >
                            <Check className="w-2.5 h-2.5 text-emerald-400" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3D>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
