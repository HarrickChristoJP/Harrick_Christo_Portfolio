export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack ERP' | 'Real-Time System' | 'AI & ML' | 'Web Platform';
  tagline: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  architectureOverview: string;
  features: string[];
  endpoints?: { method: 'GET' | 'POST' | 'PUT' | 'DELETE'; path: string; description: string }[];
  dbSchemaHighlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Production-Ready' | 'Completed' | 'Active Development';
  iconName: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  keyMetric: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  cgpa: string;
  keyCoursework: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  category: 'Hackathon' | 'Competitive Programming' | 'Certification' | 'Corporate Simulation';
  year: string;
  badge: string;
  description: string;
  highlights: string[];
}
