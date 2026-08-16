import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTopButton } from './components/BackToTopButton';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsBar } from './components/MetricsBar';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Global Keyboard Shortcuts (Escape to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setResumeOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-blue-600/30 selection:text-blue-200">
        {/* Scroll Progress Indicator */}
        <ScrollProgressBar />

        {/* Top Navbar */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <HeroSection onOpenResume={() => setResumeOpen(true)} />
          <MetricsBar />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Interactive Overlays */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        {/* Floating Back to Top Button */}
        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
}



