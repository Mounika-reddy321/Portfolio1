import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const NeonScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('HERO');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
      setScrollProgress(progress);

      // Detect which section is currently active matching navbar order
      const sectionIds = [
        { id: 'hero', name: 'HERO' },
        { id: 'about', name: 'ABOUT' },
        { id: 'education', name: 'EDUCATION' },
        { id: 'skills', name: 'SKILLS' },
        { id: 'internships', name: 'INTERNSHIPS' },
        { id: 'projects', name: 'PROJECTS' },
        { id: 'certifications', name: 'CERTIFICATES' },
        { id: 'contact', name: 'CONTACT' },
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionIds[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Background track track */}
      <div className="w-full h-1 bg-slate-900/60 backdrop-blur-md">
        {/* Glowing Neon Bar */}
        <div
          style={{ width: `${scrollProgress}%` }}
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-fuchsia-500 transition-all duration-100 ease-out relative"
        >
          {/* Intense Glowing Leading Edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-300 blur-xs shadow-[0_0_16px_#00F2FE,0_0_30px_#FF0080]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
        </div>
      </div>

      {/* Floating Section Progress Pill (Visible during scroll) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          style={{
            opacity: scrollProgress > 1 ? 1 : 0,
            transform: scrollProgress > 1 ? 'translateY(0)' : 'translateY(-10px)',
          }}
          className="absolute right-4 top-2 pointer-events-auto transition-all duration-300 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#080C22]/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,242,254,0.2)] backdrop-blur-xl text-[10px] font-mono"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-300 font-bold">{activeSection}</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300 font-semibold">{Math.round(scrollProgress)}%</span>
        </div>
      </div>
    </div>
  );
};
