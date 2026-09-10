import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Trophy, Award, CheckCircle, Shield, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const categoryBadges: Record<string, { bg: string; text: string; border: string }> = {
  Hackathon: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  'Competitive Programming': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  Certification: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  'Corporate Simulation': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
};

export const AchievementsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Honors' },
    { id: 'Hackathon', label: 'Hackathons & Wins' },
    { id: 'Competitive Programming', label: 'Competitive Coding' },
    { id: 'Certification', label: 'Certifications' },
  ];

  const filtered = ACHIEVEMENTS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="achievements" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-2 font-semibold">
                <span>// RECOGNITION & CREDENTIALS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                Achievements & Honors
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                Competitive hackathon leadership victories, algorithmic milestones, and industry certifications.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1 bg-[#111113] border border-zinc-800 rounded-lg">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`achievement-filter-${tab.id.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((item, index) => {
            const badgeStyle = categoryBadges[item.category] || {
              bg: 'bg-zinc-800',
              text: 'text-zinc-300',
              border: 'border-zinc-700',
            };

            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <div
                  id={`achievement-card-${item.id}`}
                  className="p-6 sm:p-7 rounded-xl bg-[#111113] border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
                        >
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">• {item.year}</span>
                      </div>

                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {item.category === 'Hackathon' ? (
                          <Trophy className="w-4 h-4 text-amber-400" />
                        ) : item.category === 'Certification' ? (
                          <Shield className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Award className="w-4 h-4 text-blue-400" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-blue-400 mb-3">{item.subtitle}</div>

                    <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-850 flex flex-wrap gap-2">
                    {item.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 text-[11px] font-mono border border-zinc-800"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
