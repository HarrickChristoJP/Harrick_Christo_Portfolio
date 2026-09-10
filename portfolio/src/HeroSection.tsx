import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, ShieldCheck, Cpu, Database, Code2, MapPin, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';
import { TypingTitle } from './TypingTitle';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-zinc-850"
    >
      {/* Background Subtle Grid & Interactive Tech Particles */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <ParticleCanvas />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900/90 border border-slate-300 dark:border-zinc-800 text-xs font-mono mb-6 shadow-sm transition-all"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="status-label text-slate-600 dark:text-zinc-400 font-semibold">STATUS:</span>
              <span className="status-value text-emerald-700 dark:text-emerald-400 font-bold font-mono">{PERSONAL_INFO.status}</span>
            </div>

            {/* Role Identifier */}
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-mono tracking-wider font-bold mb-3 min-h-[24px]">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400 stroke-[2.5] shrink-0" />
              <TypingTitle />
            </div>

            {/* Name Display */}
            <h1
              id="hero-name"
              className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-white font-heading leading-[1.08] mb-6"
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Core Tagline / Value Proposition */}
            <p
              id="hero-tagline"
              className="text-xl sm:text-2xl text-slate-800 dark:text-zinc-300 font-semibold leading-relaxed mb-6 max-w-2xl"
            >
              {PERSONAL_INFO.headline}
            </p>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-400 font-normal leading-relaxed mb-8 max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-xl shadow-blue-600/25 active:scale-[0.98] border border-blue-400/30"
              >
                <Download className="w-5 h-5 text-white" />
                <span>Download Resume</span>
              </button>

              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-[#111113] hover:bg-slate-200 dark:hover:bg-zinc-800 border border-slate-300 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 font-semibold text-sm transition-all hover:border-slate-400 dark:hover:border-zinc-700 active:scale-[0.98] shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Tech Stack Ribbon */}
            <div id="hero-tech-stack" className="pt-6 border-t border-slate-300 dark:border-zinc-800">
              <div className="tech-stack-heading text-xs font-mono text-slate-800 dark:text-zinc-400 uppercase tracking-wider mb-3 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 inline-block"></span>
                <span>Core Stack & Architectures</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {PERSONAL_INFO.coreTags.map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag-pill px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 text-xs font-bold font-mono hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-zinc-800 transition-all shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Card with Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-sm">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-emerald-600/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-100 transition duration-1000"></div>

              {/* Developer Profile Card */}
              <div
                id="hero-profile-card"
                className="relative rounded-2xl bg-[#111113] border border-zinc-800/90 p-4 sm:p-5 md:p-6 shadow-2xl space-y-3.5 sm:space-y-4 md:space-y-5"
              >
                {/* Photo with #OpenToWork badge overlay */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-square border border-zinc-800/80 bg-zinc-900 group">
                  <img
                    id="hero-profile-image"
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Top-Right Live Indicator */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#09090B]/90 backdrop-blur-md border border-zinc-800 text-[9px] sm:text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>#OPENTOWORK</span>
                  </div>

                  {/* Bottom Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#111113] via-[#111113]/60 to-transparent pointer-events-none" />
                </div>

                {/* Identity Summary */}
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-base sm:text-lg font-bold font-heading text-white truncate">
                      {PERSONAL_INFO.name}
                    </h2>
                    <span className="text-[10px] sm:text-xs font-mono font-medium text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 shrink-0 whitespace-nowrap">
                      B.Tech ({EDUCATION.cgpa} CGPA)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2.5 sm:pt-3 border-t border-zinc-800/80 text-xs">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-850 flex flex-col justify-between">
                    <div className="text-zinc-500 text-[9px] sm:text-[10px] font-mono uppercase font-medium">Student At</div>
                    <div className="text-emerald-400 font-semibold text-[11px] sm:text-xs leading-tight mt-0.5 line-clamp-2">
                      St. Joseph's College of Engineering
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-855 flex flex-col justify-between">
                    <div className="text-zinc-500 text-[9px] sm:text-[10px] font-mono uppercase font-medium">Problem Solving</div>
                    <div className="text-amber-400 font-bold font-mono text-[11px] sm:text-xs mt-0.5">
                      1,500+ Solved
                    </div>
                  </div>
                </div>

                {/* Social Quick-Bar */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1 sm:pt-1.5">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-[11px] sm:text-xs font-mono text-zinc-200 hover:text-white font-medium transition-colors shadow-xs"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-[11px] sm:text-xs font-mono text-zinc-200 hover:text-blue-400 font-medium transition-colors shadow-xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-[11px] sm:text-xs font-mono text-zinc-200 hover:text-emerald-400 font-medium transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
