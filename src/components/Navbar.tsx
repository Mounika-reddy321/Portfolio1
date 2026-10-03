import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, FileText, Volume2, VolumeX, ExternalLink, Github, ChevronDown, Layers } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { playNavClickSound, playWowSound, toggleSound, isSoundEnabled } from '../utils/soundEffects';
import { triggerCyberBurst } from '../utils/burstEffect';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [soundOn, setSoundOn] = useState(true);
  const [clickedNavId, setClickedNavId] = useState<string | null>(null);
  const [projectLinksDropdown, setProjectLinksDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'hero',
        'about',
        'education',
        'skills',
        'internships',
        'projects',
        'certifications',
        'contact'
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectLinksDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation items as requested: about, education, skills, internships experience, projects, project links, certificates, contact
  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Internships', href: '#internships', id: 'internships' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setClickedNavId(id);
    setProjectLinksDropdown(false);

    // Audio & 3D Neon Particle Spark Feedback
    playNavClickSound();
    triggerCyberBurst(e.clientX, e.clientY);

    setTimeout(() => {
      setClickedNavId(null);
    }, 300);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    const updated = toggleSound();
    setSoundOn(updated);
    if (updated) {
      playWowSound();
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    playWowSound();
    triggerCyberBurst(e.clientX, e.clientY);
    onOpenResume();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080C1E]/95 backdrop-blur-xl border-b border-cyan-500/25 shadow-2xl shadow-cyan-950/50 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* 3D Brand Badge */}
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none shrink-0"
            onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 p-[1.5px] shadow-[0_4px_12px_rgba(0,242,254,0.3)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0B0F24] rounded-[10px] flex items-center justify-center font-display font-extrabold text-xs text-cyan-300">
                M
              </div>
            </div>
            <span className="font-display font-bold text-base tracking-tight bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent hidden sm:inline-block">
              {PERSONAL_INFO.brand}
            </span>
          </a>

          {/* 3D Format Navigation Menu (Tactile Keycaps) */}
          <nav className="hidden xl:flex items-center gap-1.5 p-1 rounded-2xl bg-[#090D22]/90 border border-cyan-500/20 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isClicked = clickedNavId === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  style={{ transformStyle: 'preserve-3d' }}
                  className={`relative px-3 py-1.5 text-xs font-mono font-bold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                    isClicked
                      ? 'translate-y-[2px] border-b-[1px] shadow-xs'
                      : 'hover:-translate-y-0.5 hover:border-b-[3px] active:translate-y-[2px] active:border-b-[1px]'
                  } ${
                    isActive
                      ? 'text-cyan-200 bg-gradient-to-b from-cyan-500/30 to-[#0c1a36] border-t border-cyan-300/40 border-b-[3px] border-cyan-400 shadow-[0_4px_14px_rgba(0,242,254,0.25)]'
                      : 'text-slate-300 hover:text-white bg-gradient-to-b from-slate-800/60 to-slate-900/90 border-t border-white/10 border-b-[3px] border-slate-950 shadow-[0_3px_8px_rgba(0,0,0,0.4)] hover:border-cyan-500/40 hover:bg-slate-800'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
                    )}
                    <span>{link.label}</span>
                  </span>
                </a>
              );
            })}

            {/* 3D Project Links Button with Interactive Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => {
                  playNavClickSound();
                  setProjectLinksDropdown(!projectLinksDropdown);
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xl transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  projectLinksDropdown
                    ? 'text-fuchsia-300 bg-gradient-to-b from-fuchsia-600/30 to-[#1e0d29] border-t border-fuchsia-400/50 border-b-[3px] border-fuchsia-500 shadow-[0_4px_14px_rgba(255,0,128,0.25)] translate-y-[1px]'
                    : 'text-fuchsia-300 hover:text-fuchsia-200 bg-gradient-to-b from-fuchsia-950/60 to-[#12071a] border-t border-fuchsia-500/30 border-b-[3px] border-fuchsia-950 shadow-[0_3px_8px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:border-b-[3px] hover:border-fuchsia-500/60'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Project Links</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${projectLinksDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* 3D Dropdown Floating Panel */}
              {projectLinksDropdown && (
                <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-[#090D24]/98 border border-fuchsia-500/40 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] font-mono text-fuchsia-300 font-bold uppercase tracking-wider px-2 py-1 border-b border-slate-800">
                    Direct Code & Demo Links
                  </div>

                  <div className="space-y-1 mt-1.5 max-h-64 overflow-y-auto">
                    {PROJECTS.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-fuchsia-500/40 transition-colors flex items-center justify-between gap-2"
                      >
                        <div className="truncate">
                          <span className="font-mono text-[10px] font-bold text-cyan-400 block truncate">
                            #{proj.number} {proj.title}
                          </span>
                          <span className="text-[9px] text-slate-400 font-mono">
                            {proj.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          {proj.githubLink && (
                            <a
                              href={proj.githubLink}
                              target="_blank"
                              rel="noreferrer"
                              title="GitHub Repository"
                              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                            >
                              <Github className="w-3 h-3 text-cyan-400" />
                            </a>
                          )}
                          {proj.demoLink && (
                            <a
                              href={proj.demoLink}
                              target="_blank"
                              rel="noreferrer"
                              title="Live Demo"
                              className="p-1 rounded bg-fuchsia-950 hover:bg-fuchsia-900 text-fuchsia-300 border border-fuchsia-800"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#projects"
                    onClick={(e) => handleNavClick(e, '#projects', 'projects')}
                    className="mt-2 block text-center py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono text-[11px] font-bold shadow-md hover:opacity-95"
                  >
                    View 3D Projects Showcase
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'SFX Audio Enabled' : 'SFX Audio Muted'}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border-t border-white/10 border-b-[2px] border-slate-950 text-slate-300 hover:text-cyan-400 transition-all cursor-pointer shadow-xs active:translate-y-[1px]"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
            </button>

            {/* 3D Tactile Resume Button */}
            <button
              onClick={handleResumeClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 border-t border-cyan-300/40 border-b-[3px] border-blue-900 shadow-[0_4px_12px_rgba(0,242,254,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,242,254,0.4)] active:translate-y-[1px] active:border-b-[1px] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (3D Keycap Format) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0E23]/98 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className="px-3 py-2 text-xs font-mono font-bold text-slate-300 hover:text-cyan-300 bg-slate-900/90 rounded-xl border-t border-white/10 border-b-[2px] border-slate-950 shadow-sm active:translate-y-[1px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects', 'projects')}
              className="px-3 py-2 text-xs font-mono font-bold text-fuchsia-300 bg-fuchsia-950/50 rounded-xl border border-fuchsia-800/40"
            >
              Project Links
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleResumeClick(e);
              }}
              className="flex-1 text-center py-2 text-xs font-mono font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-md"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="flex-1 text-center py-2 text-xs font-mono font-semibold text-slate-300 bg-slate-900 rounded-xl border border-slate-800"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
