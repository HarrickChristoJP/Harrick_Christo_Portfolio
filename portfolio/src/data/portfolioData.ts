import { Project, Experience, Education, SkillCategory, Achievement } from '../types';
import profileAvatar from '../assets/images/developer_avatar_1786818456328.jpg';

export const PERSONAL_INFO = {
  name: 'Harrick Christo J P',
  preferredName: 'Harrick',
  title: 'Software Developer',
  headline: 'I build scalable software that solves real problems.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'jpharrckchristo@gmail.com',
  phone: '+91 8248466297',
  github: 'https://github.com/HarrickChristoJP',
  linkedin: 'https://linkedin.com/in/harrick-jp',
  avatarUrl: profileAvatar,
  resumeUrl: '/resume.pdf',
  bio: 'Software developer with hands-on experience in full-stack architecture, high-throughput RESTful APIs, and relational databases. Proven track record across multiple software internships, hackathon leadership victories, 1,500+ coding problems solved, and 500+ coding medals on SkillRack.',
  philosophy: 'Driven by robust system design, clean separation of concerns, and resilient APIs. I bridge the gap between high-performance Java/Spring Boot backends and intuitive, responsive React user interfaces.',
  status: 'Open to Software Engineering Opportunities',
  coreTags: ['Java', 'Spring Boot', 'React', 'Python', 'SQL', 'REST APIs', 'DSA'],
};

export const METRICS = [
  {
    id: 'internships',
    value: '3+',
    label: 'Software Internships',
    subtext: 'Pyroferus, Encycdata & Likemind Tech',
  },
  {
    id: 'leetcode',
    value: '1,500+',
    label: 'Coding Problems Solved',
    subtext: 'LeetCode, SkillRack & DSA Platforms',
  },
  {
    id: 'medals',
    value: '500+',
    label: 'SkillRack Medals',
    subtext: 'Competitive Coding Milestones',
  },
  {
    id: 'hackathons',
    value: '3x',
    label: 'Hackathon Wins',
    subtext: 'IdeaForge, HackNova & HackAIThon Lead',
  },
];

export const EDUCATION: Education = {
  institution: "St. Joseph's College of Engineering",
  degree: 'B.Tech',
  field: 'Artificial Intelligence & Data Science',
  period: '2024 – 2028',
  location: 'Chennai, Tamil Nadu',
  cgpa: '8.59',
  keyCoursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering Methodologies',
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'pyroferus',
    company: 'Pyroferus Technologies Pvt. Ltd.',
    role: 'Software Engineering Intern (Paid)',
    type: 'Internship',
    period: 'May 2026 – Present',
    location: 'Chennai, India',
    summary:
      'Engineered mission-critical enterprise services for ERP modules, scaling backend throughput and accelerating cross-functional team delivery.',
    bullets: [
      'Engineered high-throughput RESTful APIs using Spring Boot for customer management, transactional workflows, and role-based authentication, reducing API response times by 25% while serving 2,000+ concurrent users.',
      'Architected responsive, accessible React user interfaces synchronized with relational database instances, optimizing query structures and indices to improve overall system throughput by 30%.',
      'Spearheaded modular development workflows for core ERP features, collaborating across 3 cross-functional teams to deliver key sprint milestones 10% ahead of schedule.',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'SQL', 'RESTful APIs', 'Git'],
    keyMetric: '25% Latency Reduction • 2,000+ Concurrent Users',
  },
  {
    id: 'encycdata',
    company: 'Encycdata',
    role: 'Software Engineering Intern',
    type: 'Internship',
    period: 'Dec 2025 & Jun 2026',
    location: 'Chennai, India',
    summary:
      'Developed web features and backend endpoints for high-traffic SaaS systems while leading software quality assurance and code review cycles.',
    bullets: [
      'Implemented responsive web modules and robust REST API endpoints supporting 1,500+ daily active users, providing clean developer documentation with OpenAPI/Swagger standards.',
      'Led structured debugging, regression testing, and code review initiatives across the codebase, reducing production bugs by 30% through automated unit tests and strict quality gates.',
      'Collaborated closely with product stakeholders to translate complex client business rules into clean, reusable service layers.',
    ],
    technologies: ['React', 'JavaScript', 'REST APIs', 'Unit Testing', 'Git'],
    keyMetric: '1,500+ DAUs • 30% Production Bug Reduction',
  },
  {
    id: 'likemind',
    company: 'Likemind Technologies Pvt. Ltd.',
    role: 'Web Development Intern',
    type: 'Internship',
    period: '2025',
    location: 'Chennai, India',
    summary:
      'Modernized web presentation layers and interaction models, elevating user engagement and eliminating legacy cross-browser visual defects.',
    bullets: [
      'Crafted responsive, high-performance web pages with modern UI/UX design patterns, driving a 20% measurable increase in user engagement metrics.',
      'Diagnosed and resolved 40+ UI inconsistencies, layout breaks, and responsiveness bottlenecks across diverse mobile and desktop browser engines.',
      'Presented interactive interface prototypes and engineering feasibility specs directly to technical stakeholders and clients.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Cross-Browser Testing'],
    keyMetric: '+20% User Engagement • 40+ UI Fixes',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'erp-platform',
    title: 'Zoho Books-Inspired ERP',
    subtitle: 'Enterprise Resource Planning & Financial Workflow Platform',
    category: 'Full-Stack ERP',
    tagline: 'High-scale multi-tenant accounting and customer management suite.',
    description:
      'Engineered an enterprise-grade ERP system modeled after Zoho Books, featuring double-entry general ledger management, automated invoicing, customer lifecycle tracking, and JWT-secured role-based access control.',
    techStack: ['Java', 'Spring Boot', 'React', 'SQL', 'Tailwind CSS', 'REST API'],
    metrics: [
      { label: 'Customer Records', value: '5,000+' },
      { label: 'API Response Time', value: '< 85ms' },
      { label: 'Concurrent Capacity', value: '2,000+' },
    ],
    bulletPoints: [
      'Engineered scalable Spring Boot microservices managing 5,000+ active customer accounts, financial ledgers, and billing pipelines.',
      'Constructed a reusable, highly modular React component library tailored for enterprise data tables, search filters, and real-time form validations.',
      'Designed a normalized relational database schema with composite indexing, foreign key cascade constraints, and ACID-compliant transaction boundaries.',
    ],
    architectureOverview:
      'Spring Boot backend provides RESTful resource endpoints secured via Spring Security and JWT tokens. Database communication is facilitated with high-performance connection pooling. The frontend utilizes a modular React state architecture with responsive UI data grids.',
    features: [
      'Customer & Vendor Directory Management',
      'Automated Invoicing & Payment Reconciliation',
      'Double-Entry General Ledger Tracking',
      'Role-Based Access Control (Admin, Accountant, Auditor)',
      'Exportable Financial Balance & P&L Reports',
    ],
    endpoints: [
      { method: 'GET', path: '/api/v1/customers?page=0&size=20', description: 'Paginated customer query with multi-field search filtering' },
      { method: 'POST', path: '/api/v1/invoices', description: 'Creates transactional invoice with tax calculation & ledger entry' },
      { method: 'GET', path: '/api/v1/reports/balance-sheet', description: 'Aggregated financial position computation from ledger table' },
      { method: 'POST', path: '/api/v1/auth/jwt-login', description: 'Stateless authentication yielding signed bearer claims' },
    ],
    dbSchemaHighlights: [
      'customers (id, name, tax_id, balance, email, status, created_at)',
      'invoices (id, customer_id, invoice_number, subtotal, tax_amount, total, due_date, status)',
      'ledger_entries (id, invoice_id, account_code, debit, credit, transaction_timestamp)',
      'users_roles (user_id, role_id, permissions_mask)',
    ],
    githubUrl: 'https://github.com/HarrickChristoJP',
    liveUrl: '#',
    status: 'Production-Ready',
    iconName: 'Building2',
    accentColor: '#3B82F6',
  },
  {
    id: 'traffic-management',
    title: 'Traffic Management System',
    subtitle: 'Real-Time Telemetry & Congestion Monitoring Dashboard',
    category: 'Real-Time System',
    tagline: 'High-throughput urban telemetry visualization and adaptive signal routing.',
    description:
      'Developed an urban traffic telemetry dashboard capable of processing and visualizing 10,000+ live sensor events in real time. Implemented dynamic congestion heatmaps, incident alert queues, and signal optimization models.',
    techStack: ['React', 'Spring Boot', 'SQL', 'Tailwind CSS', 'REST APIs'],
    metrics: [
      { label: 'Data Points Processed', value: '10,000+' },
      { label: 'Refresh Latency', value: '< 100ms' },
      { label: 'Sensor Grid Nodes', value: '120+' },
    ],
    bulletPoints: [
      'Built high-performance React dashboards rendering 10,000+ real-time traffic data points with zero frame drops.',
      'Created optimized SQL aggregation queries and indexing strategies to handle high-frequency vehicle telemetry ingestion.',
      'Developed automated congestion alerting protocols that notify operators of unusual bottlenecks and traffic anomalies.',
    ],
    architectureOverview:
      'Telemetry stream ingestor powered by Spring Boot REST services, aggregating traffic density readings into time-partitioned SQL tables. React visualization frontend consumes throttled updates with interactive visual heatmaps.',
    features: [
      'Live Intersection Congestion Index Heatmaps',
      'Emergency Vehicle Signal Priority Routing',
      'Automated Incident Detection & Operator Alerting',
      'Historical Peak Hour Flow Trend Analytics',
    ],
    endpoints: [
      { method: 'GET', path: '/api/v1/traffic/live-feed', description: 'Returns aggregated sensor densities across active grid sectors' },
      { method: 'POST', path: '/api/v1/traffic/signals/override', description: 'Manual and automated signal phasing adjustments' },
      { method: 'GET', path: '/api/v1/traffic/analytics/hourly-flow', description: 'Historical density aggregation grouped by intersection ID' },
    ],
    dbSchemaHighlights: [
      'sensors (sensor_id, intersection_code, latitude, longitude, status)',
      'telemetry_logs (log_id, sensor_id, vehicle_count, avg_speed, recorded_at)',
      'incidents (incident_id, severity_level, sector_id, reported_at, resolved_at)',
    ],
    githubUrl: 'https://github.com/HarrickChristoJP',
    liveUrl: '#',
    status: 'Completed',
    iconName: 'Activity',
    accentColor: '#10B981',
  },
  {
    id: 'agri-platform',
    title: 'Agricultural Management Platform',
    subtitle: 'AI Crop Disease Diagnostics & Precision Agronomy Suite',
    category: 'AI & ML',
    tagline: 'Deep learning diagnostic pipeline combined with cloud agronomy management.',
    description:
      'Constructed an intelligent agricultural management platform featuring a 92% accurate TensorFlow convolutional neural network (CNN) for instant leaf disease classification, coupled with Flask REST APIs and Firebase cloud synchronization.',
    techStack: ['React', 'Flask', 'TensorFlow', 'Python', 'Firebase Auth', 'MySQL', 'Tailwind CSS'],
    metrics: [
      { label: 'AI Model Accuracy', value: '92.4%' },
      { label: 'Disease Classes', value: '38 Varieties' },
      { label: 'Diagnostic Speed', value: '1.2s' },
    ],
    bulletPoints: [
      'Trained and deployed a TensorFlow deep learning computer vision model achieving 92% accuracy across diverse crop disease classes.',
      'Integrated lightweight Flask REST endpoints for seamless image inference dispatch and diagnostic payload responses.',
      'Implemented Firebase Authentication and real-time farmer advisory storage with an intuitive mobile-first React UI.',
    ],
    architectureOverview:
      'Image upload stream processed via Flask microservice invoking a pre-trained TensorFlow CNN model. Metadata and farmer consultation logs are persisted to MySQL with user authentication handled by Firebase.',
    features: [
      'Camera-Based Instant Leaf Disease Classification',
      'Localized Chemical & Organic Remedy Prescriptions',
      'Crop Health History & Seasonal Treatment Tracking',
      'Soil Quality & Weather Risk Forecast Feeds',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/diagnose', description: 'Accepts multipart leaf image, runs model inference, returns classified disease + confidence' },
      { method: 'GET', path: '/api/v1/crops/remedies/:diseaseId', description: 'Retrieves localized mitigation protocols and dosage recommendations' },
    ],
    dbSchemaHighlights: [
      'farms (farm_id, owner_uid, location, soil_type, acreage)',
      'diagnostic_scans (scan_id, farm_id, disease_label, confidence_score, scanned_at)',
      'treatment_plans (plan_id, disease_label, recommended_action, schedule_interval)',
    ],
    githubUrl: 'https://github.com/HarrickChristoJP',
    liveUrl: '#',
    status: 'Completed',
    iconName: 'Sprout',
    accentColor: '#F59E0B',
  },
  {
    id: 'ewaste-platform',
    title: 'E-Waste Management Platform',
    subtitle: 'Circular Economy Logistics & Sustainable Disposal Portal',
    category: 'Web Platform',
    tagline: 'Streamlined logistics pipeline for certified electronic waste recycling.',
    description:
      'Architected a full-stack platform managing electronic waste collection, facility inventory, and regulatory disposal tracking. Handles 300+ monthly pickup dispatches with automated weight validation and environmental impact metrics.',
    techStack: ['Flask', 'MySQL', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    metrics: [
      { label: 'Monthly Dispatches', value: '300+' },
      { label: 'E-Waste Handled', value: '4.5 Tons' },
      { label: 'Pickup Success Rate', value: '98.5%' },
    ],
    bulletPoints: [
      'Architected relational MySQL database schema and Flask API backend processing 300+ scheduled pickup requests monthly.',
      'Built a clean, accessible tracking interface allowing individual consumers and corporations to monitor recycling status.',
      'Engineered automated carbon credit and toxic material diversion calculation modules for environmental compliance.',
    ],
    architectureOverview:
      'Python/Flask backend orchestrating scheduling queues and driver assignments against a normalized MySQL database, serving dynamic views with responsive frontend components.',
    features: [
      'Automated Pickup Scheduling & Route Allocation',
      'Certificate of Safe Disposal Generation',
      'Corporate E-Waste Weight Auditing & Compliance Logs',
      'Consumer Reward Points for Responsible Recycling',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/pickups/schedule', description: 'Registers e-waste inventory, item types, address, and selected pickup window' },
      { method: 'GET', path: '/api/v1/pickups/track/:trackingId', description: 'Fetches real-time status and assigned logistics hub' },
    ],
    dbSchemaHighlights: [
      'pickups (pickup_id, user_id, category_code, weight_kg, status, scheduled_date)',
      'recycling_centers (center_id, facility_name, capacity_tons, address)',
      'disposal_certificates (cert_id, pickup_id, issuer_signature, issued_at)',
    ],
    githubUrl: 'https://github.com/HarrickChristoJP',
    liveUrl: '#',
    status: 'Completed',
    iconName: 'Recycle',
    accentColor: '#8B5CF6',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming languages utilized in production and algorithmic problem solving.',
    skills: [
      { name: 'Java', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'SQL', highlight: true },
    ],
  },
  {
    title: 'Backend Engineering',
    description: 'Scalable service architectures, RESTful APIs, and transactional backend frameworks.',
    skills: [
      { name: 'Spring Boot', highlight: true },
      { name: 'RESTful API Design', highlight: true },
      { name: 'Flask' },
      { name: 'JWT & Spring Security' },
      { name: 'Microservices Architecture' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Modern, high-performance UI engineering with atomic component architecture.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML5 & Semantic Web' },
      { name: 'CSS3 & Animations' },
      { name: 'Responsive Web Design' },
      { name: 'State Management' },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational schema modeling, query optimization, and real-time database management.',
    skills: [
      { name: 'MySQL', highlight: true },
      { name: 'Firebase Firestore', highlight: true },
      { name: 'Database Normalization & ACID' },
      { name: 'Query Optimization & Indexing' },
    ],
  },
  {
    title: 'Core Computer Science',
    description: 'Theoretical foundations governing efficient algorithm design and system scalability.',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', highlight: true },
      { name: 'Object-Oriented Programming (OOP)', highlight: true },
      { name: 'Database Management Systems (DBMS)', highlight: true },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
    ],
  },
  {
    title: 'Developer Tools & Workflows',
    description: 'Industry tooling for version control, testing, containerization, and build tools.',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Linux / Bash Scripting' },
      { name: 'VS Code & IntelliJ IDEA' },
      { name: 'Maven Build Tool' },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'problem-solving',
    title: 'Competitive Problem Solving',
    subtitle: '1,500+ Coding Problems Solved',
    category: 'Competitive Programming',
    year: '2024 – Present',
    badge: '1,500+ Solved',
    description:
      'Solved 1,500+ algorithmic and data structure problems across LeetCode, SkillRack, and competitive coding platforms spanning Arrays, Trees, Dynamic Programming, Graphs, and Hash Maps.',
    highlights: ['1,500+ Algorithmic Challenges', 'Data Structures & Algorithms', 'Optimal Complexity'],
  },
  {
    id: 'skillrack',
    title: 'SkillRack Competitive Coding',
    subtitle: '500+ Coding Medals & Daily Streaks',
    category: 'Competitive Programming',
    year: '2024 – Present',
    badge: '500+ Medals',
    description:
      'Demonstrated consistent mastery in Data Structures and Algorithms across arrays, trees, graphs, dynamic programming, and greedy techniques with continuous daily solving streaks.',
    highlights: ['500+ Daily Coding Medals', 'Data Structures & Algorithms', 'Top Percentile Standing'],
  },
  {
    id: 'ideaforge-2026',
    title: 'IdeaForge Hackathon 2026',
    subtitle: 'Winner & Team Leader',
    category: 'Hackathon',
    year: '2026',
    badge: '1st Place Winner',
    description:
      'Led an engineering squad of 4 developers to design, build, and deploy an end-to-end full-stack solution under 36-hour sprint constraints, securing top honors among 50+ participating collegiate teams.',
    highlights: ['Team Leadership & Sprint Planning', 'Rapid Prototyping & Backend Architecture', 'Final Jury Pitch'],
  },
  {
    id: 'hacknova-2025',
    title: 'HackNova 2025',
    subtitle: 'Winner & Team Leader',
    category: 'Hackathon',
    year: '2025',
    badge: '1st Place Winner',
    description:
      'Spearheaded team ideation and technical implementation for an innovative enterprise problem statement, presenting a working prototype with real-time analytics to industry adjudicators.',
    highlights: ['Full-Stack Implementation', 'Live Data Pipelines', 'Champion Award'],
  },
  {
    id: 'hackaithon-2025',
    title: 'HackAIThon 2025',
    subtitle: 'Runner-Up & Team Leader',
    category: 'Hackathon',
    year: '2025',
    badge: 'Runner-Up',
    description:
      'Led the technical execution of an intelligent system integrating machine learning models with a responsive web dashboard, earning runner-up recognition out of 75+ competing squads.',
    highlights: ['AI Model Integration', 'Frontend Data Visualization', 'Runner-Up Podium'],
  },
  {
    id: 'flipkart-grid',
    title: 'Flipkart GRiD 8.0',
    subtitle: 'Next Evaluation Round Qualifier',
    category: 'Competitive Programming',
    year: '2025 – 2026',
    badge: 'National Qualifier',
    description:
      'Successfully cracked the rigorous preliminary engineering and algorithmic evaluations in one of India’s premier flagship tech competitions organized by Flipkart.',
    highlights: ['Algorithmic Efficiency', 'High-Complexity Problem Solving', 'National Competition'],
  },
  {
    id: 'oracle-cloud',
    title: 'Oracle Cloud Infrastructure (OCI)',
    subtitle: 'Foundations Associate Certified',
    category: 'Certification',
    year: '2025',
    badge: 'Certified',
    description:
      'Validated foundational understanding of cloud computing concepts, OCI architecture, compute instances, virtual cloud networks (VCN), storage volumes, and security compliance.',
    highlights: ['Cloud Architecture', 'Networking & IAM Security', 'Official Certification'],
  },
  {
    id: 'jpmorgan',
    title: 'JPMorgan Chase & Co.',
    subtitle: 'Software Engineering Virtual Experience (Forage)',
    category: 'Corporate Simulation',
    year: '2025',
    badge: 'Credentialed',
    description:
      'Completed simulated financial engineering tasks including interfacing with stock price data feeds, optimizing financial chart displays, and configuring real-time data streaming.',
    highlights: ['Financial Data Feeds', 'Perspective Visualization', 'TypeScript & React'],
  },
  {
    id: 'nptel-dbms',
    title: 'NPTEL Certifications',
    subtitle: 'DBMS & Python for Data Science',
    category: 'Certification',
    year: '2024 – 2025',
    badge: 'Elite Certified',
    description:
      'Achieved academic certifications with distinction in Relational Database Management Systems (SQL normalization, indexing, query execution planning) and Python for computational science.',
    highlights: ['Relational Database Theory', 'Advanced SQL & Optimization', 'Python Computational Science'],
  },
];
