import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Workflow, Lightbulb, UserCheck, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { PROJECT_3D_IMAGES } from '../data/imageAssets';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectImg = PROJECT_3D_IMAGES[project.id];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container with 3D Cyber Glass */}
      <div className="relative w-full max-w-4xl bg-[#090D22] text-white rounded-3xl shadow-2xl border border-cyan-500/30 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
              PROJECT {project.number}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              {project.category}
            </span>
            {project.status && (
              <span className="hidden sm:inline-block text-[11px] font-mono text-amber-300 bg-amber-950/80 border border-amber-800/80 px-2 py-0.5 rounded">
                {project.status}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* 3D Project Render Hero Banner */}
          {projectImg && (
            <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden border border-cyan-500/30 shadow-xl">
              <img
                src={projectImg}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D22] via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono font-bold uppercase text-cyan-300 bg-black/70 px-2.5 py-1 rounded backdrop-blur-md border border-cyan-500/30">
                  3D VISUAL PROTOTYPE
                </span>
              </div>
            </div>
          )}

          {/* Title & Overview */}
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed font-normal">
              {project.shortDescription}
            </p>
            {project.purpose && (
              <div className="mt-4 p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 font-medium">
                <span className="font-bold font-mono text-cyan-400 uppercase mr-1">Project Purpose:</span>
                {project.purpose}
              </div>
            )}
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30">
              <div className="flex items-center gap-2 mb-2 text-rose-400 font-bold text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Role & Detailed Contribution */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0C1230] to-slate-900 border border-cyan-500/30">
            <div className="flex items-center gap-2 mb-3 text-white font-display font-bold text-sm sm:text-base">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <span>MY CONTRIBUTION & ROLE</span>
              {project.myRole && (
                <span className="text-xs font-mono font-normal text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-800">
                  {project.myRole}
                </span>
              )}
            </div>
            <ul className="space-y-2 mt-2">
              {project.myContribution.map((contrib, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture / Workflow Steps if available */}
          {project.workflow && project.workflow.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-white font-display font-bold text-sm sm:text-base">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span>EXECUTION WORKFLOW</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {project.workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 text-xs font-medium text-slate-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-[10px] flex items-center justify-center shrink-0 font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-mono text-[11px] truncate text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Learnings */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white font-display font-bold text-sm sm:text-base">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>WHAT I LEARNED</span>
            </div>
            <ul className="space-y-2">
              {project.whatILearned.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-white font-display font-bold text-sm">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>TECHNOLOGIES & TOOLS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono font-medium border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs text-slate-400 font-mono">
            {project.projectLink || project.githubLink || project.demoLink
              ? 'External project repositories connected.'
              : 'Central link placeholder configured.'}
          </div>

          <div className="flex items-center gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg shadow-sm"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>VIEW GITHUB</span>
              </a>
            )}

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>LIVE DEMO</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
