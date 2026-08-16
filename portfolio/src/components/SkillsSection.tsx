import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  Server,
  Layout,
  Database,
  Terminal,
  Wrench,
  Search,
  Coffee,
  FileCode,
  Zap,
  Webhook,
  Flame,
  ShieldCheck,
  Boxes,
  Atom,
  Palette,
  Sparkles,
  MonitorSmartphone,
  Workflow,
  CheckCircle2,
  Gauge,
  Binary,
  Box,
  HardDrive,
  Cpu,
  Network,
  GitFork,
  Laptop,
  Package,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TechIconConfig {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
  border: string;
}

const TECH_ICONS: Record<string, TechIconConfig> = {
  // Languages
  Java: { icon: Coffee, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/25' },
  Python: { icon: Terminal, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/25' },
  'JavaScript (ES6+)': { icon: FileCode, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/25' },
  SQL: { icon: Database, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/25' },

  // Backend Engineering
  'Spring Boot': { icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/25' },
  'RESTful API Design': { icon: Webhook, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25' },
  Flask: { icon: Flame, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/25' },
  'JWT & Spring Security': { icon: ShieldCheck, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/25' },
  'Microservices Architecture': { icon: Boxes, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/25' },

  // Frontend Development
  React: { icon: Atom, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/25' },
  'Tailwind CSS': { icon: Palette, color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/25' },
  'HTML5 & Semantic Web': { icon: Layout, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/25' },
  'CSS3 & Animations': { icon: Sparkles, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25' },
  'Responsive Web Design': { icon: MonitorSmartphone, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/25' },
  'State Management': { icon: Workflow, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/25' },

  // Databases & Storage
  MySQL: { icon: Database, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25' },
  'Firebase Firestore': { icon: Flame, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/25' },
  'Database Normalization & ACID': { icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/25' },
  'Query Optimization & Indexing': { icon: Gauge, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/25' },

  // Core Computer Science
  'Data Structures & Algorithms (DSA)': { icon: Binary, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/25' },
  'Object-Oriented Programming (OOP)': { icon: Box, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25' },
  'Database Management Systems (DBMS)': { icon: HardDrive, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/25' },
  'Operating Systems': { icon: Cpu, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/25' },
  'Computer Networks': { icon: Network, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/25' },

  // Developer Tools & Workflows
  'Git & GitHub': { icon: GitFork, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/25' },
  'Linux / Bash Scripting': { icon: Terminal, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/25' },
  'VS Code & IntelliJ IDEA': { icon: Laptop, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25' },
  'Maven Build Tool': { icon: Package, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/25' },
};

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-4 h-4 text-blue-400" />,
  'Backend Engineering': <Server className="w-4 h-4 text-emerald-400" />,
  'Frontend Development': <Layout className="w-4 h-4 text-indigo-400" />,
  'Databases & Storage': <Database className="w-4 h-4 text-amber-400" />,
  'Core Computer Science': <Terminal className="w-4 h-4 text-purple-400" />,
  'Developer Tools & Workflows': <Wrench className="w-4 h-4 text-cyan-400" />,
};

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-2 font-semibold">
                <span>// TECH CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                Technical Skills & Tooling
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                Languages, backend frameworks, relational databases, core CS fundamentals, and development workflows with representative iconography.
              </p>
            </div>

            {/* Quick Skill Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="skill-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skill (e.g. Spring, Java)..."
                className="w-full pl-9 pr-4 py-2 bg-[#111113] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.08}>
              <div
                id={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-6 rounded-xl bg-[#111113] border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2.5 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                        {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-blue-400" />}
                      </div>
                      <h3 className="text-base font-bold text-white font-heading">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-850">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.skills.map((skill) => {
                      const iconConfig = TECH_ICONS[skill.name] || {
                        icon: Code2,
                        color: 'text-blue-400',
                        bg: 'bg-blue-500/10',
                        border: 'border-blue-500/25',
                      };
                      const IconComponent = iconConfig.icon;

                      return (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-lg flex items-center justify-between text-xs transition-all bg-zinc-900/70 border border-zinc-800/80 text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-6 h-6 rounded flex items-center justify-center shrink-0 border ${iconConfig.bg} ${iconConfig.border}`}
                            >
                              <IconComponent className={`w-3.5 h-3.5 ${iconConfig.color}`} />
                            </div>
                            <span className="font-medium text-zinc-200 truncate">{skill.name}</span>
                          </div>
                          {skill.highlight && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                              Core
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
