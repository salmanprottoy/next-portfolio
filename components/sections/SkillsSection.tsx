"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">
        Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default"
          >
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
