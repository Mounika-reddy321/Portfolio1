import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowRight, Eye, Box, LayoutGrid } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { PROJECT_3D_IMAGES } from '../data/imageAssets';
import { ProjectModal } from './ProjectModal';
import { Card3D } from './Card3D';
import { Project3DStage } from './Project3DStage';
import { playWowSound, playNavClickSound } from '../utils/soundEffects';
import { triggerCyberBurst } from '../utils/burstEffect';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'3d-stage' | '3d-grid'>('3d-stage');

  const filters = ['ALL', 'AI / ML', 'COMPUTER VISION', 'APPIAN'];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const openProjectModal = (p: Project, e: React.MouseEvent) => {
    playWowSound();
    triggerCyberBurst(e.clientX, e.clientY);
    setActiveModalProject(p);
  };

  const toggleViewMode = (mode: '3d-stage' | '3d-grid') => {
    playNavClickSound();
    setViewMode(mode);
  };

  return (
    <section id="projects" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Projects</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              PROJECTS
            </h2>
            <p className="mt-3 text-slate-300 text-base max-w-2xl font-normal">
              Turning ideas, problems, and data into practical machine learning, computer vision, and software implementations.
            </p>
          </div>

          {/* View Switcher: 3D Holo-Stage vs 3D Grid */}
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1 shadow-md self-start md:self-auto">
            <button
              onClick={() => toggleViewMode('3d-stage')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === '3d-stage'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Holo-Stage</span>
            </button>

            <button
              onClick={() => toggleViewMode('3d-grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === '3d-grid'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>3D Grid</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                playNavClickSound();
                setSelectedFilter(filter);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/50 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Display: 3D Stage Carousel OR 3D Bento Grid */}
        {viewMode === '3d-stage' ? (
          <Project3DStage
            projects={filteredProjects}
            onOpenModal={openProjectModal}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const projectImg = PROJECT_3D_IMAGES[project.id];

              return (
                <Card3D
                  key={project.id}
                  maxTilt={9}
                  glowColor="rgba(0, 242, 254, 0.35)"
                  className="h-full"
                >
                  <div className="h-full rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                    
                    {/* 3D Visual Header Image */}
                    {projectImg ? (
                      <div className="relative h-48 w-full overflow-hidden border-b border-slate-800">
                        <img
                          src={projectImg}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded bg-black/75 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                            #{project.number}
                          </span>
                        </div>

                        <span className="absolute top-3 right-3 text-[10px] font-mono tracking-wider text-slate-200 uppercase font-semibold px-2 py-0.5 rounded bg-black/75 border border-white/10 backdrop-blur-md">
                          {project.category}
                        </span>

                        {project.status && (
                          <div className="absolute bottom-3 left-3 text-[10px] font-mono font-bold text-amber-300 bg-black/80 border border-amber-400/40 px-2 py-0.5 rounded backdrop-blur-md">
                            {project.status}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-6 bg-gradient-to-br from-slate-950 via-[#0B1028] to-slate-950 border-b border-slate-800">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800">
                            #{project.number}
                          </span>
                          <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div>
                        <h3 className="font-display font-extrabold text-xl text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {project.shortDescription}
                        </p>

                        <div className="mt-4 pt-3 border-t border-slate-800/80">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                            MY CONTRIBUTION:
                          </span>
                          <p className="text-xs text-slate-200 line-clamp-2">
                            {project.myContribution[0]}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tags.slice(0, 4).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between gap-2">
                      <button
                        onClick={(e) => openProjectModal(project, e)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group-hover:scale-105"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-1.5">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                            title="View GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-cyan-400 hover:text-cyan-300 bg-cyan-950/80 hover:bg-cyan-900 rounded-lg border border-cyan-800 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}

                        {!project.githubLink && !project.demoLink && (
                          <button
                            onClick={(e) => openProjectModal(project, e)}
                            className="text-[11px] font-mono text-slate-500 hover:text-slate-300 cursor-pointer"
                          >
                            [Details]
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                </Card3D>
              );
            })}
          </div>
        )}

      </div>

      {/* Case Study Fullscreen Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
