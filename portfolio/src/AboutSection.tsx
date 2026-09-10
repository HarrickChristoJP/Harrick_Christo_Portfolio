import React from 'react';
import { EDUCATION, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, BookOpen, Layers, CheckCircle2, Terminal, Sparkles, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-2 font-semibold">
            <span>// PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            About Me
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Bridging robust backend engineering and modern frontend interfaces with a focus on measurable impact and clean system design.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative (7 cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#111113] border border-zinc-800/80 space-y-4">
              <h3 className="text-xl font-bold text-zinc-100 font-heading">
                Engineering Philosophy & Core Direction
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                I am a Software Developer driven by building reliable, high-performance web applications. My development focus is centered on <strong className="text-white font-medium">Java, Spring Boot, React, and SQL</strong>.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Through paid internships and leadership in competitive hackathons, I have architected RESTful microservices handling 2,000+ concurrent users, optimized database schema lookups to boost throughput by 30%, and crafted accessible React component libraries.
              </p>

              {/* Core Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-zinc-800/80">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      Resilient Backends
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Stateless REST APIs, ACID compliance, JWT security & clean schemas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      Clean Frontend UX
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Modular, reusable React architectures styled with Tailwind CSS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      Algorithmic Rigor
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      <strong className="text-zinc-200">1,500+</strong> coding problems solved across Data Structures & Algorithms with optimal complexity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      Team Leadership
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      <strong className="text-zinc-200">3x</strong> Hackathon squad leader delivering ahead-of-schedule sprint targets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact snippet */}
            <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-500">EMAIL:</span>
                <span className="text-zinc-200">{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Education & Academic Card (5 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-5 space-y-6">
            <div
              id="education-card"
              className="p-6 rounded-xl bg-[#111113] border border-zinc-800/80 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-blue-400 font-semibold tracking-wider">
                      Education
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {EDUCATION.degree} in {EDUCATION.field}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-zinc-200 font-medium">{EDUCATION.institution}</div>
                  <div className="text-xs text-zinc-400 flex items-center justify-between mt-1">
                    <span>{EDUCATION.location}</span>
                    <span className="font-mono text-zinc-300">{EDUCATION.period}</span>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800">
                  <span className="text-xs text-zinc-400 font-mono">Academic CGPA:</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">
                    {EDUCATION.cgpa} / 10.0
                  </span>
                </div>

                {/* Coursework */}
                <div className="pt-3 border-t border-zinc-800/80">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {EDUCATION.keyCoursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800/70"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

