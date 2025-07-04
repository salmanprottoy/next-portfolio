import {
  FigmaIcon,
  Firebase,
  GithubIcon,
  InstagramIcon,
  Javascript,
  LinkedinIcon,
  Nodejs,
  Laravel,
  Python,
  cSharp,
  ReactIcon,
  TechIcon,
  ToolsIcon,
  Arduino,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  Css,
  HTML,
  npm,
  linux,
  php,
  heroku,
  c,
  cpp,
  redux,
  mongodb,
  mysql,
  typeScript,
  sqlServer,
  git,
  oracle,
  bash,
  bootstrap,
} from "@/components/atoms/Icon";

const facebook = {
  name: "facebook",
  logo: FacebookIcon,
  link: "https://fb.com/salman.prottoy1/",
};
const insta = {
  name: "insta",
  logo: InstagramIcon,
  link: "https://instagram.com/salman_prottoy/",
};
const github = {
  name: "github",
  logo: GithubIcon,
  link: "https://github.com/salmanprottoy/",
};
const youtube = {
  name: "youtube",
  logo: YoutubeIcon,
  link: "https://www.youtube.com/channel/UCFpY-FxvOpyKavh2nr9QSSg",
};
const linkedin = {
  name: "linkedin",
  logo: LinkedinIcon,
  link: "https://linkedin.com/in/salman-prottoy/",
};
const twitter = {
  name: "twitter",
  logo: TwitterIcon,
  link: "https://twitter.com/salman_prottoy/",
};
export const socialMedia = [
  linkedin,
  github,
  facebook,
  twitter,
  insta,
  youtube,
];

export const description = [
  "Hi, I'm Md. Salman Hossan Prottoy",
  "I am a final year undergraduate student in Computer Science and Engineering at American International University-Bangladesh. Passionate learner, currently interested in machine learning, natural language processing, AI and quantum computing. I don't confine myself to a certain branch and accept that anything new is never old to understand.",
  "I have significant experience with classic backend stacks and front-end frameworks including Express, Laravel, and React. Looking to start the journey with a respectable, technology focused organization as a software engineer.",
  "I constantly enhance my abilities and give society new meaning. In order to take on responsibilities, I am mastering my skills. I'd like to lead my own software engineering team. ",
];

export const Skills = {
  Icons: { Tools: ToolsIcon, Tech: TechIcon },
  Tools: [
    {
      icon: git,
      name: "Git",
    },
    {
      icon: bash,
      name: "Bash",
    },
    {
      icon: linux,
      name: "Linux",
    },
    {
      icon: npm,
      name: "npm",
    },
    {
      icon: FigmaIcon,
      name: "Figma",
    },
    {
      icon: heroku,
      name: "Heroku",
    },
    {
      icon: Arduino,
      name: "Arduino",
    },
  ],
  Technologies: [
    {
      icon: c,
      name: "C",
    },
    {
      icon: cpp,
      name: "C++",
    },
    {
      icon: cSharp,
      name: "C#",
    },
    {
      icon: Javascript,
      name: "JavaScript",
    },

    {
      icon: php,
      name: " PHP ",
    },
    {
      icon: Python,
      name: "Python",
    },
    {
      icon: typeScript,
      name: "TypeScript",
    },
    {
      icon: HTML,
      name: " HTML ",
    },
    {
      icon: Css,
      name: " CSS ",
    },
    {
      icon: bootstrap,
      name: " Bootstrap ",
    },
    {
      icon: ReactIcon,
      name: "React.js",
    },
    {
      icon: redux,
      name: "Redux",
    },
    {
      icon: Nodejs,
      name: "Node",
    },
    {
      icon: Laravel,
      name: "Laravel",
    },
    {
      icon: Firebase,
      name: "Firebase",
    },
    {
      icon: oracle,
      name: "Oracle",
    },
    {
      icon: mysql,
      name: "MySQL",
    },
    {
      icon: sqlServer,
      name: "MsSQL",
    },
    {
      icon: mongodb,
      name: "MongoDB",
    },
  ],
};

export const Projects = [
  {
    content: {
      title: "CRM Software",
      desc: "CRM(Customer Relation Management System) is a SaaS (software as a service) application that manages customer relationship for small business organizations built using two different technologies, Node.JS and Laravel",
      techStack: ["Bootstrap", "Laravel", "Express.js", "MySQL", "MVC"],
    },
    link: "",
    repo: "https://github.com/salmanprottoy/CRM-Software-laravel",
    image: "/images/crm.png",
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
    image: "/images/fitness.png",
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
    image: "/images/obs.png",
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
    image: "/images/fuschia.png",
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
    image: "/images/banglacar.jpg",
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
    image: "/images/instashop.png",
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
    image: "/images/doctorpatient.png",
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
    image: "/images/cityridingservice.png",
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
    image: "/images/premierleagueteaminfo.png",
    imageDetails: {
      alt: "Premier League Team Info",
    },
  },
];

export const Educations = [
  {
    institution: "American International University-Bangladesh",
    exam: "Bachelor of Science in Computer Science and Engineering",
    year: "2018-Present",
  },
  {
    institution: "Chattogram Cantonment Public College",
    exam: "Higher Secondary Certificate",
    year: "2015-2017",
  },
  {
    institution: "Chattogram Cantonment Public College",
    exam: "Secondary School Certificate",
    year: "2015",
  },
];
