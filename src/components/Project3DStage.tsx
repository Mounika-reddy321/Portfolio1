import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { PROJECT_3D_IMAGES } from '../data/imageAssets';
import { playNavClickSound } from '../utils/soundEffects';

interface Project3DStageProps {
  projects: Project[];
  onOpenModal: (project: Project, e: React.MouseEvent) => void;
}

export const Project3DStage: React.FC<Project3DStageProps> = ({ projects, onOpenModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = projects.length;
  const anglePerItem = 360 / total;

  const handleNext = () => {
    playNavClickSound();
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    playNavClickSound();
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="relative py-8 px-4 select-none">
      
      {/* 3D Holo-Stage Stage Floor & Ambient Lighting (Decreased size) */}
      <div className="relative max-w-3xl mx-auto h-[380px] sm:h-[430px] flex items-center justify-center perspective-1000">
        
        {/* Holographic Glowing 3D Base Disc */}
        <div
          style={{
            transform: 'rotateX(75deg) translateZ(-120px)',
          }}
          className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-cyan-400/40 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 shadow-[0_0_60px_rgba(0,242,254,0.25)] animate-pulse pointer-events-none"
        />

        {/* 3D Cylindrical Ring Container (Decreased size) */}
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${-activeIndex * anglePerItem}deg)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative w-[240px] sm:w-[280px] h-[340px] sm:h-[380px]"
        >
          {projects.map((project, idx) => {
            const itemAngle = idx * anglePerItem;
            const isCurrent = idx === activeIndex;
            const projectImg = PROJECT_3D_IMAGES[project.id];

            return (
              <div
                key={project.id}
                onClick={(e) => {
                  if (isCurrent) {
                    onOpenModal(project, e);
                  } else {
                    playNavClickSound();
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(250px)`,
                  transformStyle: 'preserve-3d',
                }}
                className={`absolute inset-0 rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#0B1028]/95 border-cyan-400 shadow-[0_0_35px_rgba(0,242,254,0.35)] opacity-100 scale-102 z-30'
                    : 'bg-[#080C1D]/80 border-slate-800/90 shadow-lg opacity-40 hover:opacity-75 scale-90 z-10'
                }`}
              >
                {/* Visual Thumbnail */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-950">
                  {projectImg ? (
                    <img
                      src={projectImg}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-slate-900 flex items-center justify-center font-mono text-cyan-400 font-bold text-lg">
                      #{project.number}
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1028] via-transparent to-transparent" />

                  {/* Project Number */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-700 font-mono text-[10px] font-bold text-cyan-300">
                    #{project.number}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/40 font-mono text-[9px] font-bold text-purple-300">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-slate-300 font-mono line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold truncate max-w-[130px]">
                      {project.status || 'Verified'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenModal(project, e);
                      }}
                      className="px-2 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800 hover:border-cyan-400 text-[10px] font-mono font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Eye className="w-2.5 h-2.5" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Stage Carousel Controls */}
        <button
          onClick={handlePrev}
          title="Previous Project"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-slate-800 hover:scale-105 transition-all shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={handleNext}
          title="Next Project"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-slate-800 hover:scale-105 transition-all shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Pagination indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              playNavClickSound();
              setActiveIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === activeIndex
                ? 'w-6 bg-cyan-400 shadow-sm shadow-cyan-400'
                : 'w-1.5 bg-slate-700 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
