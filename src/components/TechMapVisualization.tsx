import React, { useState } from 'react';
import { Orbit } from 'lucide-react';

interface TechBubble {
  id: string;
  name: string;
  size: number;
  color: string;
  gradient: string;
  related: string;
  animationDelay: string;
}

export const TechMapVisualization: React.FC = () => {
  const [activeBubble, setActiveBubble] = useState<TechBubble | null>(null);

  const bubbles: TechBubble[] = [
    {
      id: 'python',
      name: 'Python',
      size: 110,
      color: '#00F2FE',
      gradient: 'from-cyan-400 to-blue-600',
      related: 'Placement Predictor, Axcentra & Corizo Internships',
      animationDelay: '0s'
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      size: 124,
      color: '#A855F7',
      gradient: 'from-purple-400 to-violet-600',
      related: 'Cardiovascular Risk Study & Placement Predictor',
      animationDelay: '1s'
    },
    {
      id: 'cv',
      name: 'Computer Vision',
      size: 118,
      color: '#FF0080',
      gradient: 'from-pink-500 to-rose-600',
      related: 'CCTV / RTSP Automated Attendance Monitoring',
      animationDelay: '2s'
    },
    {
      id: 'sql',
      name: 'MySQL & SQL',
      size: 104,
      color: '#38BDF8',
      gradient: 'from-sky-400 to-blue-500',
      related: 'Attendance Database & Hospital Schemas',
      animationDelay: '1.5s'
    },
    {
      id: 'data',
      name: 'Data Science',
      size: 110,
      color: '#00F5A0',
      gradient: 'from-emerald-400 to-teal-500',
      related: 'Pandas, NumPy & Matplotlib Analytics',
      animationDelay: '0.5s'
    },
    {
      id: 'web',
      name: 'Web Frontend',
      size: 108,
      color: '#FB7185',
      gradient: 'from-rose-400 to-pink-600',
      related: 'Attendance UI, HTML5, CSS3 & JavaScript',
      animationDelay: '2.5s'
    },
    {
      id: 'appian',
      name: 'Appian Platform',
      size: 104,
      color: '#FB923C',
      gradient: 'from-orange-400 to-amber-500',
      related: 'Enterprise Hospital Management System',
      animationDelay: '3s'
    },
    {
      id: 'java',
      name: 'Java & OOP',
      size: 100,
      color: '#818CF8',
      gradient: 'from-indigo-400 to-purple-600',
      related: 'NPTEL Elite Java & Data Structures',
      animationDelay: '1.2s'
    }
  ];

  return (
    <section className="py-24 bg-[#070914] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Orbit className="w-3.5 h-3.5 text-cyan-400" />
            <span>Visual Concept Space</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MY TECHNOLOGY MAP
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Floating visual clusters representing core practical domains. Hover any bubble to reveal its applied project connection.
          </p>
        </div>

        {/* Bubbles Interactive Canvas Container with Cyber Glow */}
        <div className="relative min-h-[400px] sm:min-h-[460px] rounded-3xl bg-slate-900/90 border border-cyan-500/30 shadow-2xl p-6 sm:p-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 overflow-hidden">
          {/* Subtle cyber grid */}
          <div className="absolute inset-0 bg-grid-cyber opacity-25 pointer-events-none" />

          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              onMouseEnter={() => setActiveBubble(bubble)}
              onMouseLeave={() => setActiveBubble(null)}
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animationDelay: bubble.animationDelay,
              }}
              className="relative rounded-full flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all duration-500 hover:scale-120 hover:z-20 shadow-xl bg-slate-950/90 border border-slate-700/80 group animate-pulse"
            >
              {/* Outer soft glowing neon halo on hover */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-tr ${bubble.gradient} opacity-20 group-hover:opacity-40 transition-opacity blur-sm`}
              />

              <div
                className="w-2.5 h-2.5 rounded-full mb-1.5 shadow-sm"
                style={{ backgroundColor: bubble.color, boxShadow: `0 0 8px ${bubble.color}` }}
              />

              <span className="font-display font-bold text-xs sm:text-sm text-slate-200 leading-tight group-hover:text-cyan-300 transition-colors">
                {bubble.name}
              </span>
            </div>
          ))}

          {/* Floating Tooltip Box in Cyber HUD Style */}
          <div className="absolute bottom-5 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 p-4 rounded-2xl bg-black/95 text-white backdrop-blur-xl shadow-2xl border border-cyan-500/40 transition-all duration-300">
            {activeBubble ? (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: activeBubble.color }}
                  />
                  <h4 className="font-display font-bold text-sm text-white">
                    {activeBubble.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 font-normal font-mono">
                  Connected in: <span className="text-cyan-300 font-semibold">{activeBubble.related}</span>
                </p>
              </div>
            ) : (
              <p className="text-xs text-slate-400 text-center font-mono">
                Hover over any technology cluster above to reveal applied connections
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
