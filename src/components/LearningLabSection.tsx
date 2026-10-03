import React, { useState } from 'react';
import { FlaskConical, Play, Sparkles, Volume2, Calculator } from 'lucide-react';
import { LEARNING_LAB_AREAS } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { playWowSound } from '../utils/soundEffects';
import { triggerCyberBurst } from '../utils/burstEffect';

export const LearningLabSection: React.FC = () => {
  // Interactive Lab Sandbox state (Placement diagnostic preview)
  const [cgpa, setCgpa] = useState<number>(8.2);
  const [skillLevel, setSkillLevel] = useState<string>('Proficient');
  const [internshipCount, setInternshipCount] = useState<number>(2);
  const [diagnosticResult, setDiagnosticResult] = useState<string | null>(null);

  // Text Narrator preview state
  const [narratorText, setNarratorText] = useState<string>('Welcome to Mounika.AI! Turning raw data into intelligent software solutions.');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const calculateReadiness = (e: React.MouseEvent) => {
    playWowSound();
    triggerCyberBurst(e.clientX, e.clientY);

    let score = (cgpa / 10) * 45;
    if (skillLevel === 'Advanced') score += 35;
    else if (skillLevel === 'Proficient') score += 25;
    else score += 15;
    score += Math.min(internshipCount * 10, 20);

    if (score >= 80) {
      setDiagnosticResult('Strong Placement Readiness · Recommended for Core AI & Data Engineering Drives');
    } else if (score >= 65) {
      setDiagnosticResult('Good Readiness · Focus on Advanced Algorithm Problem Solving and System Design');
    } else {
      setDiagnosticResult('Foundational Readiness · Focus on Building 2+ End-to-End Projects with Git Documentation');
    }
  };

  const handleSpeak = (e: React.MouseEvent) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      playWowSound();
      triggerCyberBurst(e.clientX, e.clientY);
      const utterance = new SpeechSynthesisUtterance(narratorText);
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis not supported in this browser.');
    }
  };

  return (
    <section id="learning-lab" className="py-24 bg-[#070914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Research & Prototyping</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MY LEARNING LAB
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            An active research workbench where experiments, prototypes, and continuous domain learning take shape.
          </p>
        </div>

        {/* 2-Column Lab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Active Learning Areas */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                RESEARCH DOMAINS
              </span>
              <span className="text-xs font-mono text-cyan-400">
                8 Active Threads
              </span>
            </div>

            <div className="space-y-2.5">
              {LEARNING_LAB_AREAS.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-cyan-500/50 hover:bg-slate-900 transition-all flex items-center justify-between gap-3 group"
                >
                  <div>
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {area.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {area.focus}
                    </p>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold whitespace-nowrap ${
                      area.status === 'HANDS-ON'
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700'
                        : area.status === 'PRACTICING'
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-700'
                        : area.status === 'BUILDING'
                        ? 'bg-purple-950/80 text-purple-300 border border-purple-700'
                        : 'bg-amber-950/80 text-amber-300 border border-amber-700'
                    }`}
                  >
                    {area.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 3D Sandbox Demonstrations */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Tool 1: Placement Readiness Calculator Simulator */}
            <Card3D maxTilt={7} glowColor="rgba(0, 242, 254, 0.35)">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-300">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        Placement Readiness Simulator
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        Logic from Project 01: Student Placement Predictor
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-cyan-950/80 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                    Live Mini-Demo
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="font-semibold font-mono text-slate-300 block mb-1">B.Tech CGPA</label>
                    <input
                      type="number"
                      step="0.1"
                      min="5"
                      max="10"
                      value={cgpa}
                      onChange={(e) => setCgpa(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-semibold font-mono text-slate-300 block mb-1">Skills</label>
                    <select
                      value={skillLevel}
                      onChange={(e) => setSkillLevel(e.target.value)}
                      className="w-full px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-white text-xs"
                    >
                      <option value="Foundational">Foundational</option>
                      <option value="Proficient">Proficient</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold font-mono text-slate-300 block mb-1">Internships</label>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      value={internshipCount}
                      onChange={(e) => setInternshipCount(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-white font-mono"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateReadiness}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Evaluate Placement Readiness</span>
                </button>

                {diagnosticResult && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-xs text-emerald-200 font-medium animate-in fade-in duration-200">
                    <div className="font-bold mb-0.5 text-emerald-300 font-mono">Diagnostic Roadmap:</div>
                    {diagnosticResult}
                  </div>
                )}
              </div>
            </Card3D>

            {/* Interactive Tool 2: Web Speech Synthesis Simulator */}
            <Card3D maxTilt={7} glowColor="rgba(236, 72, 153, 0.35)">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-950 border border-pink-800 flex items-center justify-center text-pink-300">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        Assistive Text Narrator Preview
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        Logic from Project 06: Online Text Narrator System
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-pink-950/80 text-pink-300 px-2 py-0.5 rounded border border-pink-800">
                    Web Speech API
                  </span>
                </div>

                <textarea
                  value={narratorText}
                  onChange={(e) => setNarratorText(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs text-white resize-none font-normal"
                  placeholder="Type any sentence to hear text narration..."
                />

                <button
                  onClick={handleSpeak}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    isSpeaking
                      ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30'
                      : 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white shadow-lg shadow-pink-500/25'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isSpeaking ? 'Stop Narration' : 'Narrate Sentence Aloud'}</span>
                </button>
              </div>
            </Card3D>

          </div>

        </div>

      </div>
    </section>
  );
};
