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
    skills: ["Python", "TypeScript", "JavaScript", "Go", "Java", "C/C++"],
  },
  {
    key: "backend",
    label: "Backend / API",
    icon: Server,
    skills: ["Node.js", "Express.js", "Django", "REST APIs", "GraphQL", "WebSockets"],
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
    skills: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "DynamoDB", "OpenSearch", "MySQL"],
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
    skills: ["RAG", "LLMs", "LangChain", "CrewAI", "TensorFlow", "Vector Search", "Multi-Agent Systems", "NLP"],
  },
];

/** Official brand icons where available; Lucide icons keep the rest visually consistent. */
const skillIconMap: Record<string, React.ElementType> = {
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Go: SiGo,
  Java: Code2,
  "C/C++": Code2,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": Server,
  Django: SiDjango,
  "REST APIs": Code2,
  GraphQL: MessageSquare,
  WebSockets: MessageSquare,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: Database,
  ChromaDB: Database,
  DynamoDB: Database,
  OpenSearch: Database,
  MySQL: Database,
  AWS: Cloud,
  Docker: SiDocker,
  "CI/CD": SiGit,
  Vercel: SiVercel,
  Nginx: Server,
  RAG: BookOpen,
  LLMs: Eye,
  LangChain: Layers,
  CrewAI: Users,
  TensorFlow: BarChart3,
  "Vector Search": Database,
  "Multi-Agent Systems": Users,
  NLP: BookOpen,
  Git: SiGit,
  // legacy aliases
  REST: Code2,
  "RAG Pipelines": BookOpen,
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
    <div className="space-y-8">
      <div className="border-b border-border pb-5">
        <div className="mb-2 flex items-center gap-3">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">Technical toolkit — Instrumentation</span>
          <span className="h-px flex-1 max-w-16 bg-border" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="font-display text-balance text-[1.7rem] font-semibold tracking-[-0.02em] text-foreground md:text-[2rem]">
            The tools behind the work.
          </h3>
          <p className="max-w-sm font-mono text-[0.72rem] leading-relaxed tracking-[0.01em] text-muted-foreground sm:text-right">
            Product interfaces → distributed services → cloud → applied AI. One ledger.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categorized.map((category, categoryIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: categoryIndex * 0.05, duration: 0.4 }}
            className="border border-border bg-card p-4"
          >
            <div className="mb-4 flex items-center gap-2.5 border-b border-border/60 pb-3">
              <div className="flex h-7 w-7 items-center justify-center border border-border bg-muted/30 text-primary">
                <AccessibleIcon icon={category.icon} className="h-3.5 w-3.5" />
              </div>
              <h4 className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-foreground">{category.label}</h4>
              <span className="ml-auto font-mono text-[0.6rem] text-muted-foreground">{category.matched.length.toString().padStart(2, "0")}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.matched.map((skill, skillIndex) => {
                const Icon = skillIconMap[skill.name] || Code2;
                return (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.05 + skillIndex * 0.02 }}
                    className="inline-flex items-center gap-1 border border-border bg-muted/15 px-1.5 py-1 font-mono text-[0.66rem] font-medium tracking-[0.02em] text-muted-foreground"
                  >
                    <AccessibleIcon icon={Icon} className="h-3 w-3 text-primary/60" />
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
