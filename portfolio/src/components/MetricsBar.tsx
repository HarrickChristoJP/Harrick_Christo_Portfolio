import React from 'react';
import { METRICS } from '../data/portfolioData';
import { Award, Briefcase, Code2, Trophy } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const metricIcons: Record<string, React.ReactNode> = {
  internships: <Briefcase className="w-5 h-5 text-blue-400" />,
  leetcode: <Code2 className="w-5 h-5 text-amber-400" />,
  medals: <Award className="w-5 h-5 text-emerald-400" />,
  hackathons: <Trophy className="w-5 h-5 text-purple-400" />,
};

export const MetricsBar: React.FC = () => {
  return (
    <section id="metrics" className="py-10 border-b border-zinc-800/80 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, index) => (
            <ScrollReveal key={metric.id} delay={index * 0.08}>
              <div
                id={`metric-card-${metric.id}`}
                className="p-5 sm:p-6 rounded-xl bg-[#111113] border border-zinc-800/80 hover:border-zinc-700 transition-all group h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {metric.value}
                  </span>
                  <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                    {metricIcons[metric.id]}
                  </div>
                </div>
                <h2 className="text-sm font-semibold text-zinc-200 mb-1">
                  {metric.label}
                </h2>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
