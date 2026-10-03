import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle, X } from 'lucide-react';
import { CERTIFICATIONS, Certificate } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const CertificationsSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>Certificates</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CERTIFICATIONS
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Structured national qualifications, industry-accredited courses (NPTEL, Cisco, Infosys, Linux Foundation, Google Cloud), and technical credentials.
          </p>
        </div>

        {/* Certifications 3D Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <Card3D
              key={cert.id}
              maxTilt={10}
              glowColor="rgba(168, 85, 247, 0.35)"
              className="h-full"
            >
              <div
                onClick={() => setActiveCert(cert)}
                className="h-full rounded-2xl p-5 bg-slate-900/90 border border-slate-800 shadow-xl hover:border-purple-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      {cert.organization}
                    </span>
                    {cert.grade && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 font-bold whitespace-nowrap">
                        {cert.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-purple-300 transition-colors leading-snug mb-2">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                    {cert.skillArea}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-slate-500">
                    {cert.year || 'Certified'}
                  </span>

                  {cert.certificateLink ? (
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-purple-400 hover:text-purple-300"
                    >
                      <span>VERIFY</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono font-semibold text-slate-500 group-hover:text-purple-400 transition-colors">
                      View Details
                    </span>
                  )}
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>

      {/* Certificate Modal with 3D Cyber Glass */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
          />
          <div className="relative w-full max-w-lg bg-[#0B0F24] text-white rounded-3xl shadow-2xl border border-purple-500/40 p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                  {activeCert.organization}
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mt-1">
                  {activeCert.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 font-medium">
              <span className="font-bold font-mono text-purple-400 uppercase">Skill Domain: </span>
              {activeCert.skillArea}
              {activeCert.grade && (
                <div className="mt-1 font-bold font-mono text-amber-300">
                  Recognition: {activeCert.grade}
                </div>
              )}
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                CREDENTIAL HIGHLIGHTS
              </span>
              <ul className="space-y-2">
                {activeCert.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                {activeCert.certificateLink
                  ? 'Digital verification credential available'
                  : 'certificateLink placeholder configured'}
              </span>

              {activeCert.certificateLink ? (
                <a
                  href={activeCert.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-sm"
                >
                  Verify Certificate
                </a>
              ) : (
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
