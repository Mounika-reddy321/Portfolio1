import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, Layers } from 'lucide-react';
import { INTERNSHIPS, Internship } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const InternshipsSection: React.FC = () => {
  const [selectedInternship, setSelectedInternship] = useState<Internship>(INTERNSHIPS[0]);

  const experiencePathSteps = [
    { title: 'Learning', label: 'Coursework & Fundamentals' },
    { title: 'Internship', label: 'Industry Exposure & Mentorship' },
    { title: 'Practice', label: 'Code Automation & Scripting' },
    { title: 'Project', label: 'End-to-End Application Delivery' },
    { title: 'Improvement', label: 'Refining Code & Optimization' }
  ];

  return (
    <section id="internships" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Internships</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            INTERNSHIPS & EXPERIENCE
          </h2>
          <p className="mt-3 text-slate-300 text-base font-normal">
            Industry internships and practical developer cohorts reinforcing machine learning, Appian low-code, and Python skills.
          </p>
        </div>

        {/* Animated Experience Path Ribbons */}
        <div className="mb-14 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-4 text-center sm:text-left">
            THE APPLIED EXPERIENCE PATH
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {experiencePathSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center relative group hover:border-cyan-500/50 transition-all"
              >
                <span className="w-5 h-5 mx-auto mb-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-[10px] flex items-center justify-center font-bold">
                  0{idx + 1}
                </span>
                <h5 className="font-display font-bold text-xs text-white">
                  {step.title}
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1 font-mono">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Experience Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Internship List Cards */}
          <div className="lg:col-span-5 space-y-4">
            {INTERNSHIPS.map((internship) => {
              const isSelected = selectedInternship.id === internship.id;
              const isOfferOnly = internship.statusLabel === 'Opportunity / Offer';

              return (
                <div
                  key={internship.id}
                  onClick={() => setSelectedInternship(internship)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-cyan-400 bg-slate-900 shadow-xl shadow-cyan-950/50 ring-1 ring-cyan-400/40 -translate-y-0.5'
                      : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-display font-bold text-base text-white">
                        {internship.company}
                      </h4>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5 font-mono">
                        {internship.role}
                      </p>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold whitespace-nowrap ${
                        isOfferOnly
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      }`}
                    >
                      {internship.statusLabel}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-2">
                    {internship.description}
                  </p>

                  <div className="flex items-center gap-1.5 mt-3 text-[11px] text-slate-500 font-mono">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{internship.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Internship Detail Inspector with 3D Cyber Card */}
          <div className="lg:col-span-7">
            <Card3D maxTilt={6} glowColor="rgba(0, 242, 254, 0.35)">
              <div className="rounded-3xl p-7 bg-gradient-to-br from-slate-950 via-[#0B122C] to-slate-950 border border-cyan-500/30 shadow-2xl space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                      INTERNSHIP DOSSIER
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      {selectedInternship.company}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-300 mt-0.5">
                      {selectedInternship.role} · <span className="font-normal text-slate-400">{selectedInternship.type}</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800">
                      {selectedInternship.duration}
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                    OVERVIEW
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {selectedInternship.description}
                  </p>
                </div>

                {/* Tools Used */}
                <div>
                  <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                    TOOLS & TECHNOLOGIES
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedInternship.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 text-xs font-mono font-medium border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What I Worked On */}
                <div>
                  <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                    KEY RESPONSIBILITIES & CONTRIBUTIONS
                  </h5>
                  <ul className="space-y-2">
                    {selectedInternship.experiencePoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What I Learned */}
                <div>
                  <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                    PRACTICAL LEARNING OUTCOMES
                  </h5>
                  <ul className="space-y-1.5 pl-4 list-disc marker:text-cyan-400 text-xs sm:text-sm text-slate-400">
                    {selectedInternship.learnings.map((l, idx) => (
                      <li key={idx}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
};
