import React, { useState } from 'react';
import { Cpu, Terminal, Database, Code, Eye, Layers, Sparkles, FolderGit2, Wrench, Orbit, LayoutGrid } from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { Skills3DOrb } from './Skills3DOrb';
import { playNavClickSound } from '../utils/soundEffects';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [skillsViewMode, setSkillsViewMode] = useState<'3d-grid' | '3d-orb'>('3d-grid');

  const categories = [
    'All',
    'AI / Machine Learning',
    'Programming',
    'Data Science',
    'Web',
    'Database',
    'Low Code',
    'Tools'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getStatusBadgeClass = (status: SkillItem['status']) => {
    switch (status) {
      case 'HANDS-ON':
        return 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50';
      case 'PRACTICING':
        return 'bg-cyan-950/90 text-cyan-300 border-cyan-500/50';
      case 'WORKING KNOWLEDGE':
        return 'bg-indigo-950/90 text-indigo-300 border-indigo-500/50';
      case 'LEARNING':
        return 'bg-amber-950/90 text-amber-300 border-amber-500/50';
      case 'EXPLORING':
        return 'bg-purple-950/90 text-purple-300 border-purple-500/50';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700';
    }
  };

  const handleToggleMode = (mode: '3d-orb' | '3d-grid') => {
    playNavClickSound();
    setSkillsViewMode(mode);
  };

  return (
    <section id="skills" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Skills & Competencies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              SKILLS
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl font-normal">
              Practical technologies explored through hands-on coursework, academic projects, and industry internships.
            </p>
          </div>

          {/* View Switcher: 3D Grid (Default, clean & compact) vs 3D Orb */}
          <div className="p-1 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-1 shadow-md self-start md:self-auto backdrop-blur-md">
            <button
              onClick={() => handleToggleMode('3d-grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                skillsViewMode === '3d-grid'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Compact 3D Cards</span>
            </button>

            <button
              onClick={() => handleToggleMode('3d-orb')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                skillsViewMode === '3d-orb'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>3D Orb</span>
            </button>
          </div>
        </div>

        {/* Display: 3D Filtered Cards Grid OR 3D Skills Orb */}
        {skillsViewMode === '3d-orb' ? (
          <Skills3DOrb />
        ) : (
          <div>
            {/* Filter Navigation Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    playNavClickSound();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 border border-cyan-400/40 scale-102'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80 backdrop-blur-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Small, Compact, Non-Clumsy 3D Skill Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-3.5">
              {filteredSkills.map((skill) => {
                const isHovered = hoveredSkill === skill.name;
                return (
                  <Card3D
                    key={skill.name}
                    maxTilt={8}
                    glowColor="rgba(0, 242, 254, 0.25)"
                    className="h-full"
                  >
                    <div
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`h-full rounded-xl p-3 sm:p-3.5 bg-slate-900/85 backdrop-blur-md border transition-all duration-200 relative overflow-hidden group flex flex-col justify-between ${
                        isHovered
                          ? 'border-cyan-400/60 shadow-lg shadow-cyan-500/10 bg-slate-900/95 -translate-y-0.5'
                          : 'border-slate-800/90 hover:border-slate-700'
                      }`}
                    >
                      {/* Top micro accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.accentColor}`} />

                      <div>
                        {/* Header: Category & Status */}
                        <div className="flex items-center justify-between gap-1.5 mb-1.5">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-semibold truncate">
                            {skill.category}
                          </span>
                          <span
                            className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-full border shrink-0 ${getStatusBadgeClass(
                              skill.status
                            )}`}
                          >
                            {skill.status}
                          </span>
                        </div>

                        {/* Skill Name (Clean, compact font) */}
                        <h3 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>

                        {/* Short clean description */}
                        <p className="text-[11px] text-slate-300 leading-snug mt-1.5 line-clamp-2">
                          {skill.description}
                        </p>
                      </div>

                      {/* Footer: Compact tags */}
                      <div className="pt-2 mt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                        {skill.relatedProjects.length > 0 ? (
                          <span className="truncate font-mono text-[9px] text-slate-400 flex items-center gap-1">
                            <FolderGit2 className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                            <span className="truncate">{skill.relatedProjects[0]}</span>
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono text-slate-500">Core Skill</span>
                        )}

                        {skill.relatedTools.length > 0 && (
                          <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/70 px-1 py-0.2 rounded border border-cyan-800/50 shrink-0">
                            {skill.relatedTools[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
