import React from 'react';
import { User, Sparkles, Target, Hammer, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const AboutSection: React.FC = () => {
  const profileCards = [
    {
      number: '01',
      title: 'CURRENT ROLE',
      subtitle: 'AI & Data Science Student',
      description: 'Final-year undergraduate at Satya Institute of Technology and Management, completing intensive curriculum in AI algorithms and data systems.',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      glow: 'rgba(0, 242, 254, 0.35)',
      icon: <User className="w-5 h-5 text-cyan-400" />
    },
    {
      number: '02',
      title: 'FOCUS',
      subtitle: 'AI • ML • Data • Python',
      description: 'Extracting actionable signals from messy datasets, training predictive models, and scripting automated workflows.',
      gradient: 'from-purple-400 via-violet-500 to-fuchsia-600',
      glow: 'rgba(168, 85, 247, 0.35)',
      icon: <Target className="w-5 h-5 text-purple-400" />
    },
    {
      number: '03',
      title: 'BUILDING',
      subtitle: 'Practical AI & Software Solutions',
      description: 'Designing real-world academic and project solutions: attendance monitors, predictive placement analyzers, and health classifiers.',
      gradient: 'from-fuchsia-400 via-pink-500 to-rose-600',
      glow: 'rgba(236, 72, 153, 0.35)',
      icon: <Hammer className="w-5 h-5 text-pink-400" />
    },
    {
      number: '04',
      title: 'EXPLORING',
      subtitle: 'Machine Learning • SQL • Data Analysis',
      description: 'Actively experimenting with predictive modeling, structured data pipelines, and Appian enterprise workflows.',
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      glow: 'rgba(251, 146, 60, 0.35)',
      icon: <Compass className="w-5 h-5 text-amber-400" />
    }
  ];

  const floatingCategories = [
    {
      title: 'WHAT I KNOW',
      accent: 'border-cyan-500/30 bg-gradient-to-br from-[#0B132B]/80 to-[#0A0E23]/90 text-cyan-300',
      badgeColor: 'text-cyan-300 bg-cyan-950/70 border border-cyan-800',
      glow: 'rgba(0, 242, 254, 0.25)',
      items: ['Python Programming', 'Machine Learning Algorithms', 'Data Analysis & Manipulation', 'Statistical Fundamentals']
    },
    {
      title: 'WHAT I BUILD',
      accent: 'border-purple-500/30 bg-gradient-to-br from-[#120B2B]/80 to-[#0A0E23]/90 text-purple-300',
      badgeColor: 'text-purple-300 bg-purple-950/70 border border-purple-800',
      glow: 'rgba(168, 85, 247, 0.25)',
      items: ['AI & Predictive Projects', 'Web Application Dashboards', 'Data-driven Solutions', 'Responsive Frontends']
    },
    {
      title: 'WHAT I AM LEARNING',
      accent: 'border-emerald-500/30 bg-gradient-to-br from-[#0B2B1B]/80 to-[#0A0E23]/90 text-emerald-300',
      badgeColor: 'text-emerald-300 bg-emerald-950/70 border border-emerald-800',
      glow: 'rgba(0, 245, 160, 0.25)',
      items: ['Advanced Machine Learning', 'Advanced SQL & Data Systems', 'Neural Network Architectures', 'Enterprise Appian Systems']
    }
  ];

  return (
    <section id="about" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ABOUT ME
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* 4 Colorful Interactive 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {profileCards.map((card) => (
            <Card3D
              key={card.number}
              glowColor={card.glow}
              maxTilt={10}
              className="h-full"
            >
              <div className="h-full rounded-2xl p-6 bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                {/* Top gradient highlight strip */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient}`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-extrabold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {card.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                  </div>

                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                    {card.title}
                  </p>
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.subtitle}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  {card.description}
                </p>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Floating Quick Introduction Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {floatingCategories.map((cat, i) => (
            <Card3D
              key={i}
              glowColor={cat.glow}
              maxTilt={8}
              className="h-full"
            >
              <div className={`h-full rounded-2xl p-6 border shadow-xl backdrop-blur-xl ${cat.accent}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-sm font-extrabold tracking-wider uppercase">
                    {cat.title}
                  </h4>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${cat.badgeColor}`}>
                    Active
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};
