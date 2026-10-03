import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickStatsSection } from './components/QuickStatsSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { InternshipsSection } from './components/InternshipsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ThreeGlobalCosmos } from './components/ThreeGlobalCosmos';
import { Cursor3D } from './components/Cursor3D';
import { SpatialHudToggle } from './components/SpatialHudToggle';
import { NeonScrollProgress } from './components/NeonScrollProgress';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [is3DSpatialActive, setIs3DSpatialActive] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070914] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Glowing Neon Scroll Progress Indicator */}
      <NeonScrollProgress />

      {/* 3D Global Three.js Cosmos Background Layer */}
      <ThreeGlobalCosmos />

      {/* 3D Interactive Cursor Follower */}
      <Cursor3D />

      {/* 3D Format Sticky Top Navigation Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Flow strictly following the Navigation Bar Order */}
      <main
        style={{
          perspective: is3DSpatialActive ? '1600px' : 'none',
          transformStyle: is3DSpatialActive ? 'preserve-3d' : 'flat',
        }}
        className={`flex-1 relative z-10 transition-all duration-700 ${
          is3DSpatialActive ? 'scale-[0.97] origin-top' : ''
        }`}
      >
        <div
          style={{
            transform: is3DSpatialActive ? 'rotateX(3deg)' : 'none',
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="w-full"
        >
          {/* 1. HERO SECTION */}
          <HeroSection onOpenResume={() => setResumeModalOpen(true)} />

          {/* QUICK STATS */}
          <QuickStatsSection />

          {/* 2. ABOUT ME */}
          <AboutSection />

          {/* 3. EDUCATION */}
          <EducationSection />

          {/* 4. SKILLS */}
          <SkillsSection />

          {/* 5. INTERNSHIPS & EXPERIENCE */}
          <InternshipsSection />

          {/* 6. PROJECTS (Cleaned up: Architecture, Problem-Solution, and Contributions removed as requested) */}
          <ProjectsSection />

          {/* 7. CERTIFICATES */}
          <CertificationsSection />

          {/* RESUME CALLOUT */}
          <ResumeSection onOpenResume={() => setResumeModalOpen(true)} />

          {/* 8. CONTACT */}
          <ContactSection />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* 3D SPATIAL HUD TOGGLE WIDGET */}
      <SpatialHudToggle
        is3DSpatialActive={is3DSpatialActive}
        onToggle3DSpatial={() => setIs3DSpatialActive(!is3DSpatialActive)}
      />

      {/* DIGITAL RESUME MODAL */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
