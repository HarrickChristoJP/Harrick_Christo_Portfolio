import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { Experience } from '../types';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ExperienceCardProps {
  exp: Experience;
  isCurrent: boolean;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, isCurrent, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <ScrollReveal delay={index * 0.12}>
      <div
        id={`experience-item-${exp.id}`}
        onMouseMove={handleMouseMove}
        className={`group relative p-6 sm:p-8 rounded-2xl bg-[#111113] border transition-all duration-300 overflow-hidden shadow-lg shadow-black/30 ${
          isCurrent
            ? 'border-blue-500/40 hover:border-blue-400/60 shadow-blue-500/5'
            : 'border-zinc-800/80 hover:border-blue-500/40 hover:bg-[#131316]'
        }`}
      >
        {/* Framer Motion Mouse-Tracking Glow Border Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.35),
                transparent 70%
              )
            `,
          }}
          aria-hidden="true"
        />

        {/* Framer Motion Ambient Surface Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                550px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.07),
                transparent 65%
              )
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative z-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4 pb-4 border-b border-zinc-800/80">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                {isCurrent && (
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-medium">
                    Current Role
                  </span>
                )}
              </div>
              <div className="text-base font-semibold text-zinc-300 flex items-center gap-2">
                <span className="text-blue-400">{exp.company}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 text-sm font-normal">{exp.type}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Key Metric Highlight Banner */}
          <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-zinc-400">Key Impact:</span>
            <span className="text-emerald-400 font-semibold">{exp.keyMetric}</span>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6">
            {exp.bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-850">
            <span className="text-xs font-mono text-zinc-500 mr-2">TECH STACK:</span>
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800 hover:border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-2 font-semibold">
            <span>// TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Software engineering internships delivering production features, optimizing query throughput, and shipping scalable APIs.
          </p>
        </ScrollReveal>

        {/* Timeline List */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              isCurrent={index === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
