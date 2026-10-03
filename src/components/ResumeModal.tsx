import React, { useEffect } from 'react';
import { X, Download, FileText, Printer, Mail } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, PROJECTS, INTERNSHIPS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (PERSONAL_INFO.resumeFile) {
      window.open(PERSONAL_INFO.resumeFile, '_blank');
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#090D22] text-white rounded-3xl shadow-2xl border border-cyan-500/35 overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-display font-bold text-sm text-white">
              Digital Resume Preview · Borapureddy Mounika
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.resumeFile ? 'Download PDF' : 'Save PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Digital Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B0F26] print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mt-1 font-mono print:text-blue-700">
              Final-Year B.Tech in Artificial Intelligence & Data Science
            </p>
            <p className="text-xs text-slate-400 mt-1 print:text-slate-600">
              Satya Institute of Technology and Management · CGPA: 8.19
            </p>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-3 font-mono print:text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                {PERSONAL_INFO.linkedinDisplay}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                {PERSONAL_INFO.githubDisplay}
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3 print:text-slate-700 print:border-slate-300">
              EDUCATION
            </h3>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white print:text-black">{edu.institution}</span>
                    <p className="text-slate-400 text-xs print:text-slate-600">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-cyan-400 text-xs print:text-blue-700">{edu.score}</span>
                    <p className="text-slate-500 text-xs font-mono">{edu.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships & Practical Experience */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3 print:text-slate-700 print:border-slate-300">
              INTERNSHIPS & PRACTICAL EXPERIENCE
            </h3>
            <div className="space-y-4">
              {INTERNSHIPS.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-white print:text-black">{item.company}</span>
                      <span className="text-slate-400"> — {item.role}</span>
                    </div>
                    <span className="font-mono text-xs text-slate-400">{item.duration}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700">{item.description}</p>
                  <p className="text-[11px] font-mono text-slate-400">
                    <span className="font-semibold text-cyan-400">Tools: </span>
                    {item.tools.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3 print:text-slate-700 print:border-slate-300">
              FEATURED PROJECTS & ACADEMIC BUILDS
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <span className="font-bold text-white print:text-black">{p.title}</span>
                    <span className="font-mono text-xs text-cyan-400">{p.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700">{p.shortDescription}</p>
                  <p className="text-[11px] text-cyan-300 print:text-blue-700">
                    <span className="font-semibold font-mono">My Contribution: </span>
                    {p.myContribution[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3 print:text-slate-700 print:border-slate-300">
              TECHNICAL COMPETENCIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
              <p><span className="font-semibold text-cyan-400 font-mono">Programming:</span> Python, Java</p>
              <p><span className="font-semibold text-cyan-400 font-mono">AI / Machine Learning:</span> Machine Learning, Scikit-learn</p>
              <p><span className="font-semibold text-cyan-400 font-mono">Data Science:</span> Pandas, NumPy, Matplotlib</p>
              <p><span className="font-semibold text-cyan-400 font-mono">Web Development:</span> HTML5, CSS3, JavaScript</p>
              <p><span className="font-semibold text-cyan-400 font-mono">Database:</span> MySQL, Relational SQL</p>
              <p><span className="font-semibold text-cyan-400 font-mono">Enterprise Low-Code:</span> Appian (Platform & Records)</p>
              <p><span className="font-semibold text-cyan-400 font-mono">Tools:</span> Git, GitHub, VS Code, Google Colab, AI Studio</p>
            </div>
          </div>

          {/* Certifications Highlights */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3 print:text-slate-700 print:border-slate-300">
              KEY CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
              {CERTIFICATIONS.slice(0, 6).map((c) => (
                <div key={c.id}>
                  <span className="font-semibold text-white print:text-black">{c.name}</span> — {c.organization}
                  {c.grade && <span className="font-mono text-amber-300 ml-1">({c.grade})</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder Notice */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center text-[11px] font-mono text-slate-500">
            resumeFile placeholder: "" · Upload PDF file path in portfolioData.ts anytime
          </div>

        </div>

      </div>
    </div>
  );
};
