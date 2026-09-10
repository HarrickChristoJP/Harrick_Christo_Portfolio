import React, { useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Server,
  Layers,
  Database,
  Code2,
  Activity,
  Sprout,
  Recycle,
  Building2,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-blue-400" />,
  Activity: <Activity className="w-5 h-5 text-emerald-400" />,
  Sprout: <Sprout className="w-5 h-5 text-amber-400" />,
  Recycle: <Recycle className="w-5 h-5 text-purple-400" />,
};

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <ScrollReveal delay={index * 0.1} className="h-full">
      <div
        id={`project-card-${project.id}`}
        onMouseMove={handleMouseMove}
        className="group relative p-6 sm:p-8 rounded-2xl bg-[#111113] border border-zinc-800/80 hover:border-blue-500/40 hover:bg-[#131316] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/30 h-full"
      >
        {/* Framer Motion Mouse-Tracking Glow Border Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.35),
                transparent 70%
              )
            `,
          }}
          aria-hidden="true"
        />

        {/* Framer Motion Soft Radial Surface Glow Overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                500px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.08),
                transparent 65%
              )
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative z-20">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/40 transition-colors shadow-inner">
              {categoryIcons[project.iconName] || <Code2 className="w-5 h-5 text-blue-400" />}
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                {project.category}
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-blue-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Metrics Badges */}
          <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-zinc-900/80 border border-zinc-850 mb-5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xs sm:text-sm font-bold text-zinc-200 font-heading">{m.value}</div>
                <div className="text-[10px] text-zinc-500 truncate mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.8 rounded bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-20 pt-4 border-t border-zinc-850 flex items-center justify-between gap-3">
          <button
            id={`project-view-btn-${project.id}`}
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-medium transition-all group-hover:shadow-md group-hover:shadow-blue-600/30 cursor-pointer"
          >
            <span>Explore Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              id={`project-github-btn-${project.id}`}
              href={project.githubUrl || PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub link for ${project.title}`}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'java', label: 'Java & Spring Boot' },
    { id: 'react', label: 'React & Full-Stack' },
    { id: 'ai', label: 'AI & Data Science' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'java') return p.techStack.includes('Java') || p.techStack.includes('Spring Boot');
    if (filter === 'react') return p.techStack.includes('React');
    if (filter === 'ai') return p.category === 'AI & ML';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-2 font-semibold">
                <span>// FEATURED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                Software Projects
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                Scalable full-stack systems, high-throughput REST APIs, relational database schemas, and clean frontend architectures.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1 bg-[#111113] border border-zinc-800 rounded-lg">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`project-filter-${tab.id}`}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    filter === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
