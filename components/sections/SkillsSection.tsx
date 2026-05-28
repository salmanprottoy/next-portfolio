"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  BarChart3,
  Coffee,
  MessageSquare,
  BookOpen,
  Eye,
  Users,
  Layers,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiVite,
  SiNodedotjs,
  SiDjango,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiOpensearch,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiPytorch,
  SiHuggingface,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const skillCategories: Record<string, { label: string; icon: React.ElementType; skills: string[] }> = {
  languages: {
    label: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Go", "Java"],
  },
  frontend: {
    label: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Vite"],
  },
  backend: {
    label: "Backend",
    icon: Server,
    skills: ["Node.js", "Django", "Prisma"],
  },
  databases: {
    label: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "OpenSearch", "DynamoDB"],
  },
  devops: {
    label: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "AWS", "Git", "CloudFormation"],
  },
  data: {
    label: "Data & AI",
    icon: BarChart3,
    skills: ["Pandas", "PyTorch", "Scikit-learn", "Hugging Face", "NLP", "RAG", "Ollama", "CrewAI"],
  },
  other: {
    label: "Other",
    icon: Code2,
    skills: [],
  },
};

/** Official brand icons via react-icons/si; Lucide fallbacks for non-brand skills */
const skillIconMap: Record<string, React.ElementType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Go: SiGo,
  Java: Coffee,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  Django: SiDjango,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  DynamoDB: Database,
  OpenSearch: SiOpensearch,
  Docker: SiDocker,
  AWS: Cloud,
  Git: SiGit,
  "Tailwind CSS": SiTailwindcss,
  PyTorch: SiPytorch,
  "Hugging Face": SiHuggingface,
  // Lucide fallbacks for non-brand / research skills
  Pandas: BarChart3,
  "Scikit-learn": BarChart3,
  NLP: MessageSquare,
  RAG: BookOpen,
  Ollama: Eye,
  CrewAI: Users,
  CloudFormation: Layers,
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  // Map provided skills to categories
  const allCategorized = new Set<string>();
  Object.values(skillCategories).forEach((cat) => {
    cat.skills.forEach((s) => allCategorized.add(s));
  });

  const categorized = Object.entries(skillCategories).map(([key, cat]) => ({
    key,
    ...cat,
    matched:
      key === "other"
        ? skills.filter((s) => !allCategorized.has(s.name))
        : skills.filter((s) => cat.skills.includes(s.name)),
  })).filter((cat) => cat.matched.length > 0 || cat.key !== "other");

  return (
    <div className="space-y-12">
      <div className="text-center space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          Technologies and tools I work with across the full stack
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {categorized.map((cat, catIndex) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-5 glow-hover group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <cat.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">{cat.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.matched.map((skill, skillIndex) => {
                const Icon = skillIconMap[skill.name] || Code2;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
