"use client";

import { motion } from "framer-motion";
import AccessibleIcon from "@/components/ui/AccessibleIcon";
import {
  BarChart3,
  BookOpen,
  Cloud,
  Code2,
  Database,
  Eye,
  Layers,
  MessageSquare,
  Server,
  Users,
} from "lucide-react";
import {
  SiDocker,
  SiDjango,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiGo,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const skillCategories: Array<{
  key: string;
  label: string;
  icon: React.ElementType;
  skills: string[];
}> = [
  {
    key: "languages",
    label: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "Go"],
  },
  {
    key: "backend",
    label: "Backend / API",
    icon: Server,
    skills: ["Node.js", "Express.js", "GraphQL", "REST", "Django"],
  },
  {
    key: "frontend",
    label: "Frontend",
    icon: Layers,
    skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    key: "data",
    label: "Data stores",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "DynamoDB"],
  },
  {
    key: "cloud",
    label: "Cloud / DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "Vercel", "Nginx"],
  },
  {
    key: "ai",
    label: "AI / ML",
    icon: BarChart3,
    skills: ["RAG Pipelines", "LangChain", "CrewAI", "TensorFlow", "LLMs integration"],
  },
];

/** Official brand icons where available; Lucide icons keep the rest visually consistent. */
const skillIconMap: Record<string, React.ElementType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  Go: SiGo,
  "Node.js": SiNodedotjs,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Django: SiDjango,
  Git: SiGit,
  Vercel: SiVercel,
  "Express.js": Server,
  GraphQL: MessageSquare,
  REST: Code2,
  Redis: Database,
  ChromaDB: Database,
  DynamoDB: Database,
  AWS: Cloud,
  "CI/CD": SiGit,
  Nginx: Server,
  "RAG Pipelines": BookOpen,
  LangChain: Layers,
  CrewAI: Users,
  TensorFlow: BarChart3,
  "LLMs integration": Eye,
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const categorized = skillCategories
    .map((category) => ({
      ...category,
      matched: category.skills
        .map((name) => skills.find((skill) => skill.name === name))
        .filter((skill): skill is Skill => Boolean(skill)),
    }))
    .filter((category) => category.matched.length > 0);

  return (
    <div className="space-y-9">
      <div className="flex flex-col gap-3 border-b border-border/60 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker mb-2">Technical toolkit</p>
          <h3 className="font-heading text-balance text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
            The tools behind the work.
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">
          A practical stack spanning product interfaces, distributed services, cloud infrastructure, and applied AI.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categorized.map((category, categoryIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: categoryIndex * 0.07, duration: 0.45 }}
            className="glass glow-hover p-5"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="icon-tile h-9 w-9 bg-primary/10">
                <AccessibleIcon icon={category.icon} className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-semibold text-foreground">{category.label}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.matched.map((skill, skillIndex) => {
                const Icon = skillIconMap[skill.name] || Code2;
                return (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.07 + skillIndex * 0.035 }}
                    className="tech-tag text-xs font-medium transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                  >
                    <AccessibleIcon icon={Icon} className="h-3.5 w-3.5 text-primary/75" />
                    <span translate="no">{skill.name}</span>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
