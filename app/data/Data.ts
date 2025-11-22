export const socialMedia = [
  {
    name: "linkedin",
    link: "https://linkedin.com/in/salman-prottoy/",
  },
  {
    name: "github",
    link: "https://github.com/salmanprottoy/",
  },
  {
    name: "facebook",
    link: "https://fb.com/salman.prottoy1/",
  },
  {
    name: "twitter",
    link: "https://twitter.com/salman_prottoy/",
  },
  {
    name: "insta",
    link: "https://instagram.com/salman.prottoy/",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCFpY-FxvOpyKavh2nr9QSSg",
  },
];

export const resume = {
  link: "https://drive.google.com/file/d/19Xjj5BK8paFgnI-HIOxWN8R1QvAg9L5f/view",
  text: "Resume",
};

export const contact = {
  email: "salman.prottoy@gmail.com",
  text: "Get in touch",
};

export const Skills = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Go", icon: "go" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Vue.js", icon: "vuedotjs" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Django", icon: "django" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Prisma", icon: "prisma" },
  { name: "OpenSearch", icon: "opensearch" },
  { name: "Pandas", icon: "pandas" },
];

export const Projects = [
  {
    content: {
      title: "CRM Software",
      desc: "CRM(Customer Relation Management System) is a SaaS (software as a service) application that manages customer relationship for small business organizations built using two different technologies, Node.JS and Laravel",
      techStack: ["Bootstrap", "Laravel", "Express.js", "MySQL", "MVC"],
    },
    link: "",
    repo: "https://github.com/salmanprottoy/CRM-Software-laravel",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/crm.png`,
    imageDetails: {
      alt: "CRM Software",
    },
  },

  {
    content: {
      title: "Extreme Fitness GYM",
      desc: "Extreme Fitness GYM is a SaaS (software as a service) application that manages customer subscriptions for a gym built using Node.JS.",
      techStack: ["React", "Material UI", "Express.js", "MongoDB"],
    },
    link: "https://extreme-fitness-gym-bd.web.app/",
    repo: "https://github.com/salmanprottoy/extreme-fitness-gym-client",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/fitness.png`,
    imageDetails: {
      alt: "Extreme Fitness GYM",
    },
  },

  {
    content: {
      title: "Online Book Store",
      desc: "Online Book Store is a SaaS (software as a service) application built with Node.js that can be used as a book selling platform.",
      techStack: ["React", "Material UI", "Express.js", "MongoDB"],
    },
    link: "https://online-book-store-e7a9c.web.app/",
    repo: "https://github.com/salmanprottoy/online-book-store-client",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/obs.png`,
    imageDetails: {
      alt: "Online Book Store",
    },
  },

  {
    content: {
      title: "Fuschia Neptunium",
      desc: "A React application build using tailwindcss library that can be use as portfolio website.",
      techStack: ["Tailwind CSS", "React", "JavaScript"],
    },
    link: "https://fuschia-neptunium.netlify.app/",
    repo: "https://github.com/salmanprottoy/fuschia-neptunium",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/fuschia.png`,
    imageDetails: {
      alt: "Fuschia Neptunium",
    },
  },

  {
    content: {
      title: "Bangla Car",
      desc: "A React-native application build using react-native library that can be use as bangla cars website.",
      techStack: ["React", "React-native", "JavaScript"],
    },
    link: "",
    repo: "https://github.com/salmanprottoy/baglaCarApp",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/banglacar.jpg`,
    imageDetails: {
      alt: "Bangla Car",
    },
  },

  {
    content: {
      title: "Insta Shop",
      desc: "A React application build using react library that can be use as online shopping.",
      techStack: ["React", "Redux", "JavaScript"],
    },
    link: "https://instashop-bd.web.app/",
    repo: "https://github.com/salmanprottoy/instaShop",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/instashop.png`,
    imageDetails: {
      alt: "Insta Shop",
    },
  },

  {
    content: {
      title: "Doctor Patient Portal",
      desc: "Doctor Patient Portal is a SaaS (software as a service) application that makes the relationship between the doctor and the patient simpler.",
      techStack: ["Bootstrap", "JavaScript", "jQuery", "PHP", "MySQL"],
    },
    link: "",
    repo: "https://github.com/salmanprottoy/Doctor-Patient-Portal",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/doctorpatient.png`,
    imageDetails: {
      alt: "Doctor Patient Portal",
    },
  },

  {
    content: {
      title: "City Riding Service",
      desc: "A react project that can be as ride sharing application.",
      techStack: ["Bootstrap", "React", "Firebase", "GoogleMap API"],
    },
    link: "https://city-riding-service.web.app/",
    repo: "https://github.com/salmanprottoy/city-riding-service",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/cityridingservice.png`,
    imageDetails: {
      alt: "City Riding Service",
    },
  },

  {
    content: {
      title: "Premier League Team Info",
      desc: "A react project where all the team in the English Premier League Football can be readily represented.",
      techStack: ["Bootstrap", "React", "Javascript", "API"],
    },
    link: "https://premier-league-team-info.netlify.app/",
    repo: "https://github.com/salmanprottoy/premier-league-football-team-info",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/premierleagueteaminfo.png`,
    imageDetails: {
      alt: "Premier League Team Info",
    },
  },
];

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
];

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

export const AboutMe = [
  "I am a Master's student in Artificial Intelligence at the University of Jyväskylä, Finland, and a software engineer focused on building scalable, production-ready systems. My interests span language models, retrieval-augmented generation, full-stack development, and cloud-native architectures.",
  "Alongside industry work, I enjoy working on applied research problems at the intersection of natural language processing and trustworthy AI, with prior experience on fake news detection for Bangla.",
];

export const HonorsAndAwards = [
  {
    title: "Vice Chancellor's Award",
    institution: "American International University-Bangladesh",
    date: "March 2023",
    description:
      'Vice Chancellor\'s Award for Meritorious Effort in the completion of the design project entitled "Approaches for Improving the Performance of Fake News Detection in Bangla: Imbalance Handling and Model Stacking."',
  },
];

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
