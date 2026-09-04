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
  defaultTitle: "Md. Salman Hossan Prottoy — Software Engineer & AI Builder",
  jobTitle: "Software Engineer",
  metaDescription:
    "Software engineer and MSc Artificial Intelligence student building production web products, applied AI systems, and researching multi-objective optimization with TypeScript, React, Go, Python, and AWS.",
  siteUrl: "https://salmanprottoy.vercel.app",
  author: "Md. Salman Hossan Prottoy",
  twitterHandle: "salman_prottoy",
  lastUpdated: "September 2026",
};

// ─── Contact ───────────────────────────────────────────────────
export const contact = {
  email: "salman.prottoy@gmail.com",
  phone: "+358449550788",
};

// ─── Hero Section ─────────────────────────────────────────────
export const heroConfig = {
  name: siteConfig.fullName,
  eyebrow: "Software engineer · AI systems builder",
  titleA: "Software Engineer",
  titleB: "AI Systems Builder",
  location: "Jyväskylä, Finland",
  intro:
    "I turn messy product problems into reliable software — then make AI useful in the real world.",
  availabilityText: "Open to software & AI opportunities",
  ctaContactText: "Let's talk",
  ctaScrollText: "Explore the work",
};

// ─── Impact Signals ────────────────────────────────────────────
export const impactStats = [
  { value: "500+", label: "RAG users reached" },
  { value: "2,000+", label: "documents / hour at peak" },
  { value: "40%", label: "travel platform endpoints" },
  { value: "35%", label: "monitoring frontend" },
];

// ─── Working Focus ─────────────────────────────────────────────
export const focusAreas = [
  {
    label: "SHIP",
    title: "Production-minded",
    description:
      "From zero-downtime data migrations to CI/CD, I care about the details that keep software dependable after launch.",
  },
  {
    label: "EXPLORE",
    title: "Applied AI",
    description:
      "I build practical RAG and LLM experiences that connect retrieval, infrastructure, and a useful end-user workflow.",
  },
  {
    label: "CONNECT",
    title: "Team multiplier",
    description:
      "I enjoy turning hard-won engineering lessons into clear standards, reusable components, and better collaboration.",
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
  link: "https://users.jyu.fi/~mshprott/",
  text: "Resume",
};

// ─── About ─────────────────────────────────────────────────────
export const AboutMe = [
  "I am a software engineer and Master's student in Artificial Intelligence at the University of Jyväskylä, Finland, currently starting my Master's thesis in multi-objective optimization. I build full-stack products with TypeScript, React, Go, Python, and AWS, with a particular interest in making language-model systems reliable enough to use beyond a demo.",
  "Most recently at Brand Cloud Inc., I worked across production TypeScript/React systems, zero-downtime PostgreSQL migrations, CI/CD, and a RAG application used by 500+ people. Earlier at W3 Engineers, I helped move backend services from Django to Go and connected data-heavy systems across a multi-tenant travel platform.",
];

// ─── Experience ────────────────────────────────────────────────
export const Experience = [
  {
    jobTitle: "Software Engineer",
    company: "Brand Cloud Inc. · Tokyo, Japan (Remote)",
    date: "September 2023 — June 2026",
    bullets: [
      "Migrated CMS content storage to PostgreSQL on Amazon RDS with zero downtime for end users, integrating backend services across the platform.",
      "Grew a RAG-based application to 500+ users and 2,000+ documents processed per hour at peak, combining vector search, caching, and containerized Docker infrastructure to let users query multiple LLMs over uploaded documents.",
      "Designed and maintained automated GitHub CI/CD pipelines that validated changes before merge, speeding up pull-request review while following DevSecOps practices.",
      "Mentored 2–3 junior engineers and established team-wide coding standards, improving sprint delivery consistency.",
      "Shipped full-stack, business-critical features on a TypeScript/React (Next.js) stack deployed and maintained on Vercel.",
    ],
  },
  {
    jobTitle: "Junior Software Engineer",
    company: "W3 Engineers Limited · Dhaka, Bangladesh",
    date: "November 2021 — August 2023",
    bullets: [
      "Contributed client-server integrations via REST and GraphQL APIs in Go and Node.js, covering roughly 40% of the platform's endpoints for a 30+ domain multi-tenant travel platform.",
      "Contributed to the backend migration from Django to Go, helping significantly reduce response latency across the platform's core services.",
      "Built data pipelines to unify property data from multiple external providers into a single schema, using parallel processing and Amazon SQS asynchronous messaging on AWS.",
      "Built reusable, production Vue.js UI components powering 35% of the frontend of an enterprise network-monitoring application, integrating backend APIs to improve the end-user experience.",
    ],
  },
];

// ─── Education ─────────────────────────────────────────────────
export const Educations = [
  {
    institution: "University of Jyväskylä · Jyväskylä, Finland",
    exam: "Master of Science in Artificial Intelligence",
    year: "2027",
    detail: "Thesis underway · multi-objective optimization",
  },
  {
    institution: "American International University-Bangladesh · Dhaka, Bangladesh",
    exam: "Bachelor of Science in Computer Science & Engineering",
    year: "2021",
    detail: "Completed",
  },
];

// ─── Skills ────────────────────────────────────────────────────
export const Skills = [
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "Go", icon: "go" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express.js", icon: "express" },
  { name: "GraphQL", icon: "graphql" },
  { name: "REST", icon: "rest" },
  { name: "Django", icon: "django" },
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Vue.js", icon: "vuedotjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Redis", icon: "redis" },
  { name: "ChromaDB", icon: "chromadb" },
  { name: "DynamoDB", icon: "dynamodb" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "CI/CD", icon: "cicd" },
  { name: "Vercel", icon: "vercel" },
  { name: "Nginx", icon: "nginx" },
  { name: "RAG Pipelines", icon: "rag" },
  { name: "LangChain", icon: "langchain" },
  { name: "CrewAI", icon: "crewai" },
  { name: "TensorFlow", icon: "tensorflow" },
  { name: "LLMs integration", icon: "llm" },
];

// ═══════════════════════════════════════════════════════════════
//  OPTIONAL: JSON-LD Structured Data (Schema.org)
// ═══════════════════════════════════════════════════════════════

export const schemaSkills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "Node.js",
  "Express.js",
  "GraphQL",
  "REST",
  "Django",
  "React.js",
  "Next.js",
  "Vue.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "ChromaDB",
  "DynamoDB",
  "AWS",
  "Docker",
  "RAG Pipelines",
  "LangChain",
  "CrewAI",
  "TensorFlow",
  "LLMs integration",
  "Multi-objective optimization",
];

/** Country code for the current study location */
export const schemaCountryCode = "FI";
