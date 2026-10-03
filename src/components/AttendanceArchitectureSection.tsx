import React, { useState } from 'react';
import { Camera, Film, ScanFace, Sparkles, UserCheck, CheckCircle2, Database, LayoutDashboard, Bell } from 'lucide-react';
import { ATTENDANCE_ARCHITECTURE_STEPS } from '../data/portfolioData';
import { PROJECT_3D_IMAGES } from '../data/imageAssets';
import { Card3D } from './Card3D';

export const AttendanceArchitectureSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(7); // Default to Dashboard (Mounika's primary contribution)

  const stepIcons = [
    <Camera className="w-4 h-4 text-cyan-400" />,
    <Film className="w-4 h-4 text-blue-400" />,
    <ScanFace className="w-4 h-4 text-indigo-400" />,
    <Sparkles className="w-4 h-4 text-purple-400" />,
    <UserCheck className="w-4 h-4 text-fuchsia-400" />,
    <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    <Database className="w-4 h-4 text-sky-400" />,
    <LayoutDashboard className="w-4 h-4 text-amber-400" />,
    <Bell className="w-4 h-4 text-rose-400" />
  ];

  const currentStepData = ATTENDANCE_ARCHITECTURE_STEPS[selectedStep];
  const cctv3DImg = PROJECT_3D_IMAGES['cctv-rtsp-attendance-system'];

  return (
    <section id="architecture" className="py-24 bg-[#080C1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <ScanFace className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive System Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            HOW MY ATTENDANCE SYSTEM THINKS
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            End-to-end pipeline of the CCTV/RTSP-based automated attendance monitoring system, highlighting the computer vision flow into the responsive faculty dashboard (my primary contribution).
          </p>
        </div>

        {/* Pipeline Steps Flow */}
        <div className="relative mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
            {ATTENDANCE_ARCHITECTURE_STEPS.map((step, idx) => {
              const isSelected = selectedStep === idx;
              const isMyContribution = idx === 7; // Dashboard

              return (
                <div
                  key={step.step}
                  onClick={() => setSelectedStep(idx)}
                  onMouseEnter={() => setSelectedStep(idx)}
                  className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer text-center relative flex flex-col items-center justify-between ${
                    isSelected
                      ? 'border-cyan-400 bg-gradient-to-b from-[#0F1B38] to-[#0A0F24] shadow-lg shadow-cyan-950/60 ring-2 ring-cyan-400/40 -translate-y-1'
                      : 'border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  {isMyContribution && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                      MY CONTRIBUTION
                    </span>
                  )}

                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-200 mb-2">
                    {stepIcons[idx]}
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 font-bold block">
                    STEP {step.step}
                  </span>

                  <h4 className="font-display font-bold text-xs text-white mt-1 line-clamp-2">
                    {step.name}
                  </h4>

                  <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                    {step.short}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Inspector Panel with 3D Cyber Glass and 3D Graphic */}
        <Card3D maxTilt={6} glowColor="rgba(0, 242, 254, 0.35)">
          <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-slate-950 via-[#0B122C] to-slate-950 text-white border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    PIPELINE STAGE {currentStepData.step} / 09
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {currentStepData.short}
                  </span>
                  {selectedStep === 7 && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-950 text-indigo-300 border border-indigo-700">
                      Borapureddy Mounika's Core Role
                    </span>
                  )}
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {currentStepData.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {currentStepData.description}
                </p>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-cyan-100 font-mono">
                  <span className="text-cyan-400 font-bold block mb-1">TECHNICAL SPECIFICATION:</span>
                  {currentStepData.details}
                </div>
              </div>

              {/* 3D CCTV Model Image & Nav controls */}
              <div className="lg:col-span-5 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-6">
                {cctv3DImg && (
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-lg">
                    <img
                      src={cctv3DImg}
                      alt="CCTV 3D Facial Recognition"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-3 text-[10px] font-mono text-cyan-300 bg-black/75 px-2 py-0.5 rounded border border-cyan-500/30">
                      CCTV / RTSP Stream Node
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Navigate Flow
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={selectedStep === 0}
                      onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      Prev
                    </button>
                    <button
                      disabled={selectedStep === ATTENDANCE_ARCHITECTURE_STEPS.length - 1}
                      onClick={() => setSelectedStep((prev) => Math.min(ATTENDANCE_ARCHITECTURE_STEPS.length - 1, prev + 1))}
                      className="px-4 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 font-mono">
                  Step 8 is where Mounika engineered the responsive web dashboard using HTML, CSS & JavaScript.
                </div>
              </div>
            </div>
          </div>
        </Card3D>

      </div>
    </section>
  );
};
