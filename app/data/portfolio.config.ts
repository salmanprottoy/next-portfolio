// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO CONFIG — EDIT THIS FILE TO CUSTOMIZE YOUR SITE
// ═══════════════════════════════════════════════════════════════
//  This is the ONLY file you need to edit to personalize the
//  portfolio for yourself. All components read from here.
// ═══════════════════════════════════════════════════════════════

// ─── Site / Branding ───────────────────────────────────────────
export const siteConfig = {
  /** Your full name — used in meta tags, hero, footer, etc. */
  fullName: "Md. Salman Hossan Prottoy",
  /** Short name or initials — used for the logo mark */
  shortName: "SP",
  /** Default page title used in <title> and OpenGraph */
  defaultTitle: "Md. Salman Hossan Prottoy - Software Engineer & Web Developer",
  /** Job title used for schema.org JSON-LD */
  jobTitle: "Software Engineer",
  /** Meta description for SEO */
  metaDescription:
    "Software Engineer, Web Developer, and Open Source Contributor based in Bangladesh. Specialized in React, Node.js, Python, and full-stack development.",
  /** Site URL (no trailing slash) — used for sitemap, canonical, OG */
  siteUrl: "https://salmanprottoy.vercel.app",
  /** Author name for metadata */
  author: "Md. Salman Hossan Prottoy",
  /** Twitter / X handle (without @) */
  twitterHandle: "salman_prottoy",
  /** Google Analytics Measurement ID (optional — leave empty to disable) */
  googleAnalyticsId: "",
  /** Sentry DSN (optional — leave empty to disable) */
  sentryDsn: "",
  /** Last updated string shown in the footer */
  lastUpdated: "May 2026",
};

// ─── Contact ───────────────────────────────────────────────────
export const contact = {
  email: "salman.prottoy@gmail.com",
  phone: "+358449550788",
};

// ─── Hero Section ─────────────────────────────────────────────
export const heroConfig = {
  name: siteConfig.fullName,
  /** Two title badges shown under the name */
  titleA: "Software Engineer",
  titleB: "AI Researcher",
  /** Availability badge text (set to "" to hide) */
  availabilityText: "Available for opportunities",
  /** Hero CTA button text */
  ctaContactText: "Contact Me",
  ctaScrollText: "View Experience",
};

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

/** Which social platforms appear in the header / footer (must match a name above) */
export const featuredSocials = ["github", "linkedin"];

// ─── Resume ────────────────────────────────────────────────────
export const resume = {
  link: "https://drive.google.com/file/d/19Xjj5BK8paFgnI-HIOxWN8R1QvAg9L5f/view",
  text: "Resume",
};

// ─── About ─────────────────────────────────────────────────────
export const AboutMe = [
  "I am a Master's student in Artificial Intelligence at the University of Jyväskylä, Finland, and a software engineer focused on building scalable, production-ready systems. My interests span language models, retrieval-augmented generation, full-stack development, and cloud-native architectures.",
  "Alongside industry work, I enjoy working on applied research problems at the intersection of natural language processing and trustworthy AI, with prior experience on fake news detection for Bangla.",
];

// ─── Experience ────────────────────────────────────────────────
export const Experience = [
  {
    jobTitle: "Software Engineer (Remote)",
    company: "Brand Cloud Inc., Tokyo, Japan",
    date: "September 2023 — Present",
    bullets: [
      "Architected and delivered scalable, end-to-end full-stack solutions for multiple major projects, including payment integration and automated communication services.",
      "Engineered core components for a Retrieval-Augmented Generation (RAG) application, integrating LLMs into a containerized, cloud-native architecture.",
      "Designed and implemented CI/CD pipelines to automate end-to-end deployment.",
      "Mentored teammates and established engineering best practices.",
      "Designed and developed scalable APIs and backend features.",
      "Maintained and optimized cron jobs and migration scripts.",
      "Integrated Elastic File System and improved platform UX where needed.",
    ],
  },
  {
    jobTitle: "Junior Software Engineer",
    company: "W3 Engineers Limited, Dhaka, Bangladesh",
    date: "November 2021 — August 2023",
    bullets: [
      "Developed and maintained scalable RESTful APIs using Django, then migrated and optimized them to Go, implementing best practices for authentication, authorization, and data validation, supporting 5,000+ daily active users.",
      "Engineered and optimized critical data processing pipelines using cron jobs with parallel processing capabilities, reducing processing time by 70% and improving system reliability for enterprise-level applications.",
      "Designed and implemented comprehensive database migration strategies, integrating AWS Elastic File System for distributed storage solutions, enabling seamless data transitions across multiple database platforms while improving file access performance by 45%.",
      "Enhanced enterprise application user experience by developing reusable Vue.js components and implementing responsive design patterns, resulting in 30% improvement in user engagement metrics and streamlined interface workflows.",
    ],
  },
  {
    jobTitle: "Undergraduate Teaching Assistant",
    company: "American International University — Bangladesh",
    date: "May 2021 — August 2021",
    bullets: [
      "Provided academic support for the Web Technologies course (≈80 students).",
      "Assisted in lesson planning and preparation of instructional materials.",
      "Collaborated with faculty to identify learning gaps and implement targeted interventions.",
    ],
  },
];

// ─── Education ─────────────────────────────────────────────────
export const Educations = [
  {
    institution: "University of Jyväskylä, Finland",
    exam: "Master of Science — Artificial Intelligence",
    year: "September 2025 — Present",
  },
  {
    institution: "American International University-Bangladesh",
    exam: "Bachelor of Science — Computer Science & Engineering",
    year: "January 2018 — September 2021",
  },
  {
    institution: "Chattogram Cantonment Public College",
    exam: "HSC — Science",
    year: "2017",
  },
  {
    institution: "Chattogram Cantonment Public College",
    exam: "SSC — Science",
    year: "2015",
  },
];

// ─── Skills ────────────────────────────────────────────────────
export const Skills = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Go", icon: "go" },
  { name: "Java", icon: "java" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Vue.js", icon: "vuedotjs" },
  { name: "Vite", icon: "vite" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Django", icon: "django" },
  { name: "Prisma", icon: "prisma" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "DynamoDB", icon: "dynamodb" },
  { name: "OpenSearch", icon: "opensearch" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Pandas", icon: "pandas" },
  { name: "PyTorch", icon: "pytorch" },
  { name: "Scikit-learn", icon: "scikitlearn" },
  { name: "Hugging Face", icon: "huggingface" },
  { name: "NLP", icon: "nlp" },
  { name: "RAG", icon: "rag" },
  { name: "Ollama", icon: "ollama" },
  { name: "CrewAI", icon: "crewai" },
  { name: "CloudFormation", icon: "cloudformation" },
];

// ─── Research ──────────────────────────────────────────────────
export const ResearchExperience = [
  {
    title: "Undergraduate Research Assistant",
    institution: "American International University — Bangladesh",
    date: "2021",
    bullets: [
      "Conducted background studies on fake news detection and imbalance handling.",
      "Collected and analyzed datasets; co-authored a paper presented at IC4IR 2021.",
    ],
  },
];

// ─── Publications ──────────────────────────────────────────────
export const Publications = [
  {
    authors:
      "Hossain, M.M., Awosaf, Z., Prottoy, M.S.H., Alvy, A.S.M., Morol, M.K.",
    title:
      "Approaches for Improving the Performance of Fake News Detection in Bangla: Imbalance Handling and Model Stacking",
    conference:
      "Proceedings of International Conference on Fourth Industrial Revolution and Beyond 2021",
    publisher:
      "Lecture Notes in Networks and Systems, vol 437. Springer, Singapore",
    year: "2022",
    doi: "https://link.springer.com/chapter/10.1007/978-981-19-2445-3_51",
  },
];

// ─── Honors & Awards ───────────────────────────────────────────
export const HonorsAndAwards = [
  {
    title: "Vice Chancellor's Award",
    institution: "American International University-Bangladesh",
    date: "March 2023",
    description:
      'Vice Chancellor\'s Award for Meritorious Effort in the completion of the design project entitled "Approaches for Improving the Performance of Fake News Detection in Bangla: Imbalance Handling and Model Stacking."',
  },
];

// ─── Extra-Curricular ──────────────────────────────────────────
export const ExtraCurricular = [
  {
    title: "Cadet Corporal",
    organization: "Bangladesh National Cadet Corps (BNCC)",
    date: "2015 — 2017",
    bullets: [
      "Completed BTE-01/2016-17 training.",
      "Trained junior cadets and assisted with event organization.",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
//  OPTIONAL: JSON-LD Structured Data (Schema.org)
//  This powers the rich snippet that search engines show.
// ═══════════════════════════════════════════════════════════════

/** List of skills for the "knowsAbout" schema field */
export const schemaSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "Django",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "DynamoDB",
  "Docker",
  "Git",
  "PyTorch",
  "NLP",
  "RAG",
];

/** Current employer for schema */
export const schemaEmployer = {
  name: "Brand Cloud Inc.",
};

/** Country code for schema address */
export const schemaCountryCode = "BD";
