import React, { useState } from 'react';
import { Network } from 'lucide-react';
import { TECH_ECOSYSTEM_NODES, PROJECTS, INTERNSHIPS } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { playNavClickSound } from '../utils/soundEffects';

export const TechEcosystemSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('python');

  const activeNode = TECH_ECOSYSTEM_NODES.find((n) => n.id === selectedTech) || TECH_ECOSYSTEM_NODES[0];

  const relatedProjects = PROJECTS.filter((p) => activeNode.related.includes(p.id));
  const relatedInternships = INTERNSHIPS.filter((i) => activeNode.related.includes(i.id));

  const handleSelectTech = (id: string) => {
    playNavClickSound();
    setSelectedTech(id);
  };

  return (
    <section id="ecosystem" className="py-24 bg-[#080C1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Network className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Technology Graph</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MOUNIKA.AI TECHNOLOGY ECOSYSTEM
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Click any technology node to see how it integrates directly into my academic projects, internships, and developer workflows.
          </p>
        </div>

        {/* Ecosystem Interactive Grid & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Node Hubs */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                SELECT A TECHNOLOGY NODE
              </span>
              <span className="text-[11px] font-mono text-cyan-400">
                Hub: MOUNIKA.AI
              </span>
            </div>

            {/* Central Holographic Core Badge */}
            <div className="text-center py-4 bg-gradient-to-r from-cyan-950 via-[#0E1535] to-purple-950 rounded-2xl border border-cyan-500/30 shadow-inner">
              <span className="font-display font-extrabold text-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                MOUNIKA.AI
              </span>
              <p className="text-[11px] text-cyan-200/70 font-mono mt-0.5">
                Central Skill & Project Convergence Core
              </p>
            </div>

            {/* Interactive Nodes Palette */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {TECH_ECOSYSTEM_NODES.map((node) => {
                const isSelected = selectedTech === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => handleSelectTech(node.id)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-cyan-400 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/30 -translate-y-0.5 scale-105'
                        : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-display block">{node.label}</span>
                    <span className={`text-[9px] font-mono mt-0.5 block ${isSelected ? 'text-cyan-100' : 'text-slate-500'}`}>
                      {node.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Connected Work Highlight Panel with 3D Card */}
          <div className="lg:col-span-6">
            <Card3D maxTilt={7} glowColor="rgba(0, 242, 254, 0.35)">
              <div className="rounded-3xl p-7 bg-gradient-to-br from-slate-950 via-[#0C1230] to-slate-950 border border-cyan-500/30 shadow-2xl space-y-6">
                <div className="pb-4 border-b border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block mb-1">
                      CONNECTED ARTIFACTS
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      {activeNode.label}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {activeNode.category}
                  </span>
                </div>

                {/* Related Projects */}
                <div>
                  <h4 className="font-mono text-xs uppercase text-slate-400 font-bold mb-3">
                    ASSOCIATED PROJECTS
                  </h4>
                  {relatedProjects.length > 0 ? (
                    <div className="space-y-2.5">
                      {relatedProjects.map((p) => (
                        <div
                          key={p.id}
                          className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start justify-between gap-3"
                        >
                          <div>
                            <h5 className="font-display font-bold text-sm text-white">
                              {p.title}
                            </h5>
                            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {p.shortDescription}
                            </p>
                          </div>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 shrink-0">
                            #{p.number}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 italic">
                      Explored through foundational coursework and learning labs.
                    </p>
                  )}
                </div>

                {/* Related Internships */}
                {relatedInternships.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs uppercase text-slate-400 font-bold mb-3">
                      PRACTICAL INTERNSHIPS
                    </h4>
                    <div className="space-y-2.5">
                      {relatedInternships.map((i) => (
                        <div
                          key={i.id}
                          className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start justify-between gap-3"
                        >
                          <div>
                            <h5 className="font-display font-bold text-sm text-indigo-200">
                              {i.company}
                            </h5>
                            <p className="text-xs text-slate-400 mt-0.5 font-mono">
                              {i.role} · {i.duration}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
};
