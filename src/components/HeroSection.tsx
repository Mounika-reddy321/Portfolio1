import React from 'react';
import { Github, Linkedin, Mail, FileText, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DProfileCard } from './Hero3DProfileCard';
import { playWowSound } from '../utils/soundEffects';
import { triggerGrandWowBurst } from '../utils/burstEffect';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    playWowSound();
    triggerGrandWowBurst();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    playWowSound();
    triggerGrandWowBurst();
    onOpenResume();
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-radial-cyber">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      
      {/* Ambient Grid overlay */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Clean & Balanced Personal Intro (Unnecessary matter removed, name font decreased properly) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Clean Status indicator tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                {PERSONAL_INFO.currentStatus}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs font-mono text-cyan-300">Final-Year B.Tech</span>
            </div>

            {/* Decreased Name Font to Proper Proportional Size */}
            <div className="space-y-1.5">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-medium text-cyan-400 font-mono">
                Artificial Intelligence & Data Science Engineer
              </p>
            </div>

            {/* Concise Clean Summary (Unnecessary matter removed) */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              Final-year B.Tech AI & Data Science student at Satya Institute of Technology and Management. Passionate about Machine Learning, Computer Vision, and Enterprise Low-Code Solutions.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 hover:from-cyan-400 hover:via-blue-500 hover:to-fuchsia-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <Compass className="w-4 h-4 text-cyan-200 group-hover:rotate-45 transition-transform" />
                <span>EXPLORE MY WORK</span>
              </button>

              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-slate-400">
              <span className="font-mono uppercase tracking-wider text-slate-500 text-[11px]">CONNECT:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all shadow-xs"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono font-medium">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-300 transition-all shadow-xs"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono font-medium">LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-rose-500/50 text-slate-300 hover:text-rose-300 transition-all shadow-xs"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                <span className="font-mono font-medium">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean 3D Profile Photo Card (No unnecessary switcher) */}
          <div className="lg:col-span-5 flex justify-center">
            <Hero3DProfileCard />
          </div>

        </div>
      </div>
    </section>
  );
};
