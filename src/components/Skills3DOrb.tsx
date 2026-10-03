import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
import { Sparkles, Compass, FolderGit2 } from 'lucide-react';
import { playNavClickSound } from '../utils/soundEffects';

interface TagPosition {
  skill: SkillItem;
  x: number;
  y: number;
  z: number;
}

export const Skills3DOrb: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[0]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Decreased radius for compact, elegant 3D animated orb (decreased from 175 to 110)
  const radius = 110;
  const skills = SKILLS_DATA;

  // Compute spherical coordinates using Fibonacci sphere algorithm
  const tags: TagPosition[] = skills.map((skill, i) => {
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;

    return {
      skill,
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi)
    };
  });

  // Auto-rotation loop
  useEffect(() => {
    let animId: number;
    const rotate = () => {
      if (!isDragging) {
        setRotation((prev) => ({
          x: prev.x + 0.002,
          y: prev.y + 0.004,
        }));
      }
      animId = requestAnimationFrame(rotate);
    };
    animId = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.008,
      y: prev.y + deltaX * 0.008,
    }));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="py-4 flex flex-col items-center">
      
      {/* 3D Sphere Interactive Viewport (Decreased size) */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-[280px] sm:w-[340px] h-[270px] sm:h-[310px] cursor-grab active:cursor-grabbing select-none flex items-center justify-center perspective-1000"
      >
        {/* Glowing holographic center core */}
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 blur-lg pointer-events-none animate-pulse" />

        {tags.map((tag, idx) => {
          // Rotate coordinates in 3D using Euler angles
          const cosY = Math.cos(rotation.y);
          const sinY = Math.sin(rotation.y);
          const x1 = tag.x * cosY + tag.z * sinY;
          const z1 = -tag.x * sinY + tag.z * cosY;

          const cosX = Math.cos(rotation.x);
          const sinX = Math.sin(rotation.x);
          const y2 = tag.y * cosX - z1 * sinX;
          const z2 = tag.y * sinX + z1 * cosX;

          // Perspective scale based on Z depth
          const scale = (z2 + radius * 1.5) / (radius * 2);
          const opacity = Math.max(0.25, (z2 + radius) / (radius * 1.8));
          const isSelected = selectedSkill.name === tag.skill.name;

          return (
            <div
              key={idx}
              onClick={() => {
                playNavClickSound();
                setSelectedSkill(tag.skill);
              }}
              style={{
                transform: `translate3d(${x1}px, ${y2}px, ${z2}px) scale(${scale})`,
                opacity: opacity,
                zIndex: Math.floor(z2 + radius),
              }}
              className={`absolute px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold transition-colors cursor-pointer whitespace-nowrap shadow-sm ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 font-extrabold ring-2 ring-cyan-300 scale-110'
                  : 'bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300'
              }`}
            >
              {tag.skill.name}
            </div>
          );
        })}
      </div>

      <p className="text-[10px] font-mono text-cyan-400 mb-5 flex items-center gap-1.5">
        <Compass className="w-3 h-3" />
        <span>Drag to rotate 3D skill globe · Click node to inspect</span>
      </p>

      {/* Selected Skill Holographic Card */}
      <div className="w-full max-w-lg p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3 pb-2.5 border-b border-slate-800">
          <div>
            <span className="text-[9px] font-mono uppercase text-cyan-400 font-bold">
              {selectedSkill.category}
            </span>
            <h4 className="font-display font-extrabold text-base sm:text-lg text-white">
              {selectedSkill.name}
            </h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
            {selectedSkill.status}
          </span>
        </div>

        <p className="mt-2.5 text-xs text-slate-300 font-mono leading-relaxed">
          {selectedSkill.description}
        </p>

        {selectedSkill.relatedProjects && selectedSkill.relatedProjects.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <FolderGit2 className="w-3 h-3 text-cyan-400" />
              Applied In:
            </span>
            {selectedSkill.relatedProjects.map((item: string, i: number) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
