import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase()}`}
              href={link.href}
              className="hover:text-zinc-100 transition-colors duration-150 relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle id="nav-theme-toggle-desktop" />

          {/* Resume View / Download (Prominent) */}
          <a
            id="nav-resume-btn"
            href={PERSONAL_INFO.resumeUrl}
            download="Harrick_Christo_JP_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* Direct Social Links (Prominent & Big) */}
          <div className="flex items-center gap-2 pl-2 border-l border-zinc-300 dark:border-zinc-800 ml-1">
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="flex items-center gap-2 px-3 py-2 text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-slate-300 hover:border-slate-400 dark:border-zinc-800 dark:hover:border-zinc-700 rounded-lg text-xs font-semibold transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 stroke-[2.2]" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">GitHub</span>
            </a>
            <a
              id="nav-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="flex items-center gap-2 px-3 py-2 text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 bg-blue-50 hover:bg-blue-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-blue-200 hover:border-blue-300 dark:border-zinc-800 dark:hover:border-zinc-700 rounded-lg text-xs font-semibold transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2] dark:text-blue-400 shrink-0 stroke-[2.2]" />
              <span className="font-semibold text-blue-900 dark:text-zinc-100">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 ml-auto md:ml-0 md:hidden">
          <ThemeToggle id="nav-theme-toggle-mobile" />

          <a
            id="nav-mobile-resume-btn"
            href={PERSONAL_INFO.resumeUrl}
            download="Harrick_Christo_JP_Resume.pdf"
            aria-label="Download Resume"
            className="p-2 rounded-lg bg-blue-600 text-white font-medium text-xs flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-menu"
          className="md:hidden px-4 pt-3 pb-6 bg-[#09090B]/95 backdrop-blur-xl border-b border-zinc-800 mt-2 space-y-3 shadow-2xl"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Harrick_Christo_JP_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-100 text-sm font-medium"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View & Download Resume</span>
            </a>
            <div className="flex items-center justify-around pt-1 text-xs text-zinc-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" /> GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-400"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1 hover:text-blue-400"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
