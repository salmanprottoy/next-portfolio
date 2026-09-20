// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO CONFIG — EDIT THIS FILE TO CUSTOMIZE YOUR SITE
// ═══════════════════════════════════════════════════════════════
//  All personal content lives here so the UI can stay focused on
//  telling the story clearly.
// ═══════════════════════════════════════════════════════════════

// ─── Site / Branding ───────────────────────────────────────────
export const siteConfig = {
  fullName: "Md. Salman Hossan Prottoy",
  shortName: "SP",
  defaultTitle: "Md. Salman Hossan Prottoy — AI Engineer | Full-Stack Software Engineer",
  jobTitle: "AI Engineer | Full-Stack Software Engineer",
  metaDescription:
    "AI Engineer & Full-Stack Software Engineer with 4+ years building production RAG, full-stack and AI-enabled systems — RAG platform with document ingestion, multi-LLM retrieval, vector search, caching & Docker deployment. MSc Artificial Intelligence at University of Jyväskylä.",
  siteUrl: "https://salmanprottoy.vercel.app",
  author: "Md. Salman Hossan Prottoy",
  twitterHandle: "salman_prottoy",
  lastUpdated: "September 2026",
};

// ─── Contact ───────────────────────────────────────────────────
export const contact = {
  email: "salman.prottoy@gmail.com",
  phone: "+358449550788",
  location: "Jyväskylä, Finland",
  linkedin: "https://linkedin.com/in/salman-prottoy",
  github: "https://github.com/salmanprottoy",
};

// ─── Hero Section ─────────────────────────────────────────────
export const heroConfig = {
  name: siteConfig.fullName,
  eyebrow: "AI Engineer · Full-Stack Software Engineer",
  titleA: "AI Engineer",
  titleB: "Full-Stack Software Engineer",
  location: "Jyväskylä, Finland · +358 44 955 0788",
  intro:
    "Software Engineer with 4+ years building production full-stack, backend, and AI-enabled systems end-to-end — including a production RAG platform with document ingestion, multi-LLM retrieval, vector search, caching, and Docker-based deployment. MSc Artificial Intelligence at University of Jyväskylä.",
  availabilityText: "Open to AI & Full-Stack opportunities",
  ctaContactText: "Let's talk",
  ctaScrollText: "Explore the work",
};

// ─── Impact Signals ────────────────────────────────────────────
export const impactStats = [
  { value: "93.1%", label: "F1 on published Bangla fake-news study" },
  { value: "0", label: "downtime — CMS to PostgreSQL on RDS" },
  { value: "40%", label: "of travel platform API endpoints shipped" },
  { value: "4+", label: "years production experience" },
];

// ─── Working Focus ─────────────────────────────────────────────
export const focusAreas = [
  {
    label: "SHIP",
    title: "Production-minded",
    description:
      "From zero-downtime PostgreSQL on RDS to GitHub CI/CD with DevSecOps, I care about what keeps software dependable after launch.",
  },
  {
    label: "EXPLORE",
    title: "Applied AI",
    description:
      "RAG, multi-LLM retrieval, vector search, CrewAI multi-agent systems — building LLM experiences that survive real usage, not just demos.",
  },
  {
    label: "CONNECT",
    title: "Team multiplier",
    description:
      "Sprint planning for 5 engineers, mentoring 2–3 juniors, and turning lessons into reusable components and clear standards.",
  },
];

// ─── Social Links ─────────────────────────────────────────────
export const socialMedia = [
  {
    name: "linkedin",
    label: "LinkedIn",
    link: "https://linkedin.com/in/salman-prottoy/",
  },
  {
    name: "github",
    label: "GitHub",
    link: "https://github.com/salmanprottoy/",
  },
  {
    name: "facebook",
    label: "Facebook",
    link: "https://fb.com/salman.prottoy1/",
  },
  {
    name: "twitter",
    label: "Twitter",
    link: "https://twitter.com/salman_prottoy/",
  },
  {
    name: "insta",
    label: "Instagram",
    link: "https://instagram.com/salman.prottoy/",
  },
  {
    name: "youtube",
    label: "YouTube",
    link: "https://www.youtube.com/channel/UCFpY-FxvOpyKavh2nr9QSSg",
  },
];

/** Social platforms shown in the header */
export const featuredSocials = ["github", "linkedin"];

// ─── Resume ────────────────────────────────────────────────────
export const resume = {
  link: "https://drive.google.com/file/d/19Xjj5BK8paFgnI-HIOxWN8R1QvAg9L5f/view",
  text: "Resume",
};

// ─── About ─────────────────────────────────────────────────────
export const AboutMe = [
  "Software Engineer with 4+ years building production full-stack, backend, and AI-enabled systems end-to-end — including a production RAG platform with document ingestion, multi-LLM retrieval, vector search, caching, and Docker-based deployment. Pursuing an MSc in Artificial Intelligence at the University of Jyväskylä, Finland.",
  "Skilled across Python, TypeScript, Go, Java, React/Next.js, LLM integration, vector search, and cloud infrastructure, with a track record of shipping reliable, scalable systems from backend architecture through to client-facing features. Core stack: Python, TypeScript, Go, Java, React, Next.js, Node.js, PostgreSQL, Redis, AWS (Lambda, RDS, SQS), Docker, RAG, LLMs, LangChain, Vector Search, TensorFlow.",
];

// ─── Experience ────────────────────────────────────────────────
export const Experience = [
  {
    jobTitle: "Software Engineer",
    company: "Brand Cloud Inc. · Tokyo, Japan (Remote)",
    date: "Sep 2023 — Jun 2026",
    bullets: [
      "Built a production RAG application with document ingestion, multi-LLM integration, retrieval, vector search, caching, and Docker-based deployment.",
      "Developed and maintained full-stack applications using TypeScript, React, and Next.js across 3+ major projects, with production deployment on Vercel and measurable increase in user satisfaction scores.",
      "Migrated CMS data storage to PostgreSQL on Amazon RDS with zero downtime, improving reliability and simplifying production data management.",
      "Selected tickets each sprint, assigned tasks to a team of 5 engineers, and improved sprint delivery times; conducted 100+ code and screen reviews, maintaining high code quality and reducing bugs.",
      "Automated GitHub-based CI/CD pipelines and improved software delivery workflows using DevSecOps practices.",
      "Mentored 2–3 junior engineers and contributed to coding standards, architecture discussions, and code reviews.",
    ],
  },
  {
    jobTitle: "Junior Software Engineer",
    company: "W3 Engineers Limited · Dhaka, Bangladesh",
    date: "May 2022 — Aug 2023",
    bullets: [
      "Designed and developed scalable, robust REST and GraphQL APIs using Go and Node.js, contributing to ~40% of API endpoints across a multi-tenant travel platform covering 30+ domains.",
      "Contributed to migrating backend services from Django to Go, improving API performance and reducing response latency.",
      "Developed, maintained, and optimized multiple cron jobs for data processing and updates, using parallel processing techniques to boost efficiency.",
      "Built data pipelines integrating multiple external providers into a unified schema, using Amazon SQS for asynchronous workloads on AWS.",
      "Developed migration scripts and integrated Elastic File System (EFS) for data storage, facilitating seamless database transitions and enhancing file access speed.",
    ],
  },
  {
    jobTitle: "Software Engineer Intern",
    company: "W3 Engineers Limited · Dhaka, Bangladesh",
    date: "Nov 2021 — May 2022",
    bullets: [
      "Designed reusable, scalable Vue.js components for an enterprise network-monitoring application, powering ~35% of the frontend.",
      "Improved application performance and reliability through regular performance testing and bottleneck identification.",
      "Introduced Vue.js, Flask, and Beego; built REST APIs with Beego, Swagger UI, and PostgreSQL, web scraping with Flask and MySQL, and data visualization with Chart.js, Vuex, and InfluxDB.",
    ],
  },
  {
    jobTitle: "Undergraduate Teaching Assistant",
    company: "American International University-Bangladesh · Dhaka, Bangladesh",
    date: "May 2021 — Aug 2021",
    bullets: [
      "Provided academic support in the Web Technologies course for ~80 students; collaborated on lesson planning, instructional materials, and student progress reporting.",
      "Assisted with grading, lab guidance, and individual student support.",
    ],
  },
];

// ─── Education ─────────────────────────────────────────────────
export const Educations = [
  {
    institution: "University of Jyväskylä · Jyväskylä, Finland",
    exam: "MSc Artificial Intelligence",
    year: "Aug 2025 — Jun 2027 (Expected)",
    detail:
      "Agent Technologies for Developers · Deep-Learning for Cognitive Computing · SOA and Cloud Computing · Collective Intelligence and Agent Technology · Semantic Technologies",
  },
  {
    institution: "American International University-Bangladesh · Dhaka, Bangladesh",
    exam: "BSc Computer Science & Engineering",
    year: "Jan 2018 — Sep 2021",
    detail:
      "Data Structure · Algorithms · OOP · Introduction to Database · Artificial Intelligence · Data Warehousing and Data Mining · Web Technologies",
  },
];

// ─── Awards & Publications ─────────────────────────────────────
export const Awards = [
  {
    title: "Vice Chancellor's Award, AIUB",
    date: "Mar 2023",
    description: "Awarded for the published Bangla fake-news thesis project.",
  },
];

export const Publications = [
  {
    title:
      "Approaches for Improving the Performance of Fake News Detection in Bangla: Imbalance Handling and Model Stacking",
    venue: "ICFIR 2021, LNNS 437, Springer (2022)",
    authors: "Hossain, M.M., Awosaf, Z., Prottoy, M.S.H., et al.",
    detail:
      "50K-instance BanFakeNews dataset (97% majority skew) · 93.1% F1 with SMOTE vs 67.6% baseline; 79.1% with stacked generalization",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-2445-3_51",
  },
];

// ─── Languages ─────────────────────────────────────────────────
export const Languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Finnish", level: "Elementary Proficiency" },
];

// ─── Skills ────────────────────────────────────────────────────
export const Skills = [
  { name: "Python", icon: "python" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Go", icon: "go" },
  { name: "Java", icon: "java" },
  { name: "C/C++", icon: "cplusplus" },
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Vue.js", icon: "vuedotjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express.js", icon: "express" },
  { name: "Django", icon: "django" },
  { name: "REST APIs", icon: "rest" },
  { name: "GraphQL", icon: "graphql" },
  { name: "WebSockets", icon: "websocket" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Redis", icon: "redis" },
  { name: "ChromaDB", icon: "chromadb" },
  { name: "DynamoDB", icon: "dynamodb" },
  { name: "OpenSearch", icon: "opensearch" },
  { name: "MySQL", icon: "mysql" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "CI/CD", icon: "cicd" },
  { name: "Vercel", icon: "vercel" },
  { name: "Nginx", icon: "nginx" },
  { name: "RAG", icon: "rag" },
  { name: "LLMs", icon: "llm" },
  { name: "LangChain", icon: "langchain" },
  { name: "CrewAI", icon: "crewai" },
  { name: "TensorFlow", icon: "tensorflow" },
  { name: "Vector Search", icon: "vector" },
  { name: "Multi-Agent Systems", icon: "multiagent" },
  { name: "NLP", icon: "nlp" },
];

// ═══════════════════════════════════════════════════════════════
//  OPTIONAL: JSON-LD Structured Data (Schema.org)
// ═══════════════════════════════════════════════════════════════

export const schemaSkills = [
  "Python",
  "TypeScript",
  "Go",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "AWS Lambda",
  "AWS RDS",
  "AWS SQS",
  "Docker",
  "RAG",
  "LLMs",
  "LangChain",
  "CrewAI",
  "Vector Search",
  "TensorFlow",
  "NLP",
  "Multi-Agent Systems",
  "GraphQL",
  "REST APIs",
];

/** Country code for the current study location */
export const schemaCountryCode = "FI";
