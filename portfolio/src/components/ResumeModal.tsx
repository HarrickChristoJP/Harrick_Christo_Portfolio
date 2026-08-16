import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
HARRICK CHRISTO J P
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

EDUCATION
${EDUCATION.institution} (2024 - 2028)
${EDUCATION.degree} in ${EDUCATION.field} | CGPA: ${EDUCATION.cgpa} | ${EDUCATION.location}

EXPERIENCE
${EXPERIENCES.map((e) => `${e.company} - ${e.role} (${e.period})\n${e.bullets.map((b) => `- ${b}`).join('\n')}`).join('\n\n')}

PROJECTS
${PROJECTS.map((p) => `${p.title} - ${p.techStack.join(', ')}\n${p.bulletPoints.map((b) => `- ${b}`).join('\n')}`).join('\n\n')}

TECHNICAL SKILLS
- Languages: Java, Python, JavaScript, SQL
- Frontend: HTML5, CSS3, React
- Databases: MySQL, Firebase Firestore
- Backend: Spring Boot, Flask, RESTful APIs
- Core: DSA, OOP, DBMS, OS, Computer Networks
- Tools: Git, GitHub, VS Code, Linux

ACHIEVEMENTS
- Solved 1,500+ coding and algorithmic problems across LeetCode, SkillRack & DSA platforms
- Winner (Team Leader) – IdeaForge Hackathon 2026 and HackNova 2025
- Runner-Up (Team Leader) – HackAIThon 2025
- Qualified for Flipkart GRiD 8.0 Next Evaluation Round
- Earned 500+ daily coding medals with continuous solving streaks on SkillRack
- Oracle Cloud Infrastructure (OCI) Foundations Associate certified
- JPMorgan Chase Software Engineering Virtual Experience (Forage)
- NPTEL certifications in DBMS and Python for Data Science
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-[#111113] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-[#18181B] border-b border-zinc-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="text-blue-400 font-bold">RESUME PREVIEW</span>
            <span className="text-zinc-500">•</span>
            <span>Harrick_Christo_JP_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-medium text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white text-zinc-900 font-sans text-xs sm:text-sm selection:bg-blue-100">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-zinc-300">
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 uppercase font-heading">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 mt-1.5 text-xs text-zinc-700">
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-600 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  linkedin.com/in/harrick-jp
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  github.com/HarrickChristoJP
                </a>
              </div>
            </div>

            <div className="shrink-0 hidden sm:block">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-lg object-cover border border-zinc-300 shadow-sm"
              />
            </div>
          </div>

          {/* Education */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-950 uppercase tracking-wider pb-1 border-b border-zinc-300 font-heading">
              Education
            </h2>
            <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="font-bold text-zinc-950">{EDUCATION.institution}</span>
              </div>
              <span className="text-zinc-600 font-medium">{EDUCATION.period}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-zinc-700 mt-0.5">
              <span>
                {EDUCATION.degree} in {EDUCATION.field} | <strong className="text-zinc-950">CGPA: {EDUCATION.cgpa}</strong>
              </span>
              <span className="text-zinc-600">{EDUCATION.location}</span>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-950 uppercase tracking-wider pb-1 border-b border-zinc-300 font-heading">
              Experience
            </h2>
            <div className="mt-3 space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-bold text-zinc-950">{exp.company}</span>
                    </div>
                    <span className="text-zinc-600 font-medium">{exp.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-zinc-700 italic mt-0.5 mb-1.5">
                    <span>{exp.role}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-800">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="leading-snug">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-950 uppercase tracking-wider pb-1 border-b border-zinc-300 font-heading">
              Projects
            </h2>
            <div className="mt-3 space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="font-bold text-zinc-950">
                    {proj.title} <span className="font-normal text-zinc-600">— {proj.techStack.join(', ')}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-800 mt-1">
                    {proj.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="leading-snug">
                        {bp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-950 uppercase tracking-wider pb-1 border-b border-zinc-300 font-heading">
              Technical Skills
            </h2>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-zinc-800">
              <div>
                <strong className="text-zinc-950">Languages:</strong> Java, Python, JavaScript, SQL
              </div>
              <div>
                <strong className="text-zinc-950">Frontend:</strong> HTML5, CSS3, React
              </div>
              <div>
                <strong className="text-zinc-950">Databases:</strong> MySQL, Firebase Firestore
              </div>
              <div>
                <strong className="text-zinc-950">Backend:</strong> Spring Boot, Flask, RESTful APIs
              </div>
              <div>
                <strong className="text-zinc-950">Core:</strong> DSA, OOP, DBMS, OS, Computer Networks
              </div>
              <div>
                <strong className="text-zinc-950">Tools:</strong> Git, GitHub, VS Code, Linux
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-950 uppercase tracking-wider pb-1 border-b border-zinc-300 font-heading">
              Achievements
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-800 mt-2">
              <li>
                <strong className="text-zinc-950">Solved 1,500+ coding problems</strong> across LeetCode, SkillRack, and competitive coding platforms
              </li>
              <li>
                <strong className="text-zinc-950">Winner (Team Leader)</strong> – IdeaForge Hackathon 2026 and HackNova 2025
              </li>
              <li>
                <strong className="text-zinc-950">Runner-Up (Team Leader)</strong> – HackAIThon 2025
              </li>
              <li>
                <strong className="text-zinc-950">Qualified</strong> for the Flipkart GRiD 8.0 Next Evaluation Round
              </li>
              <li>
                <strong className="text-zinc-950">Earned 500+ daily coding medals</strong> with continuous DSA solving streaks on SkillRack
              </li>
              <li>
                <strong className="text-zinc-950">Oracle Cloud Infrastructure</strong> Foundations Associate certified
              </li>
              <li>
                <strong className="text-zinc-950">JPMorgan Chase</strong> Software Engineering Virtual Experience (Forage)
              </li>
              <li>
                <strong className="text-zinc-950">NPTEL certifications</strong> in DBMS and Python for Data Science
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
