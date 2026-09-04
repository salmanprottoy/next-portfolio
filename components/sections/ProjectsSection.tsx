"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { Projects } from "@/app/data/projects";

export default function ProjectsSection() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="section-kicker">Selected work</span>
            <span className="section-rule max-w-20" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-balance text-4xl font-semibold tracking-[-0.055em] text-foreground md:text-6xl"
          >
            Work with a signal.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right"
        >
          A cross-section of production engineering, applied AI, distributed data, and published research.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Projects.map((project, index) => (
          <div key={project.title} className={index === 0 ? "md:col-span-2" : undefined}>
            <ProjectCard
              title={project.title}
              eyebrow={project.eyebrow}
              description={project.description}
              tags={project.tags}
              kind={project.kind}
              metric={project.metric}
              metricLabel={project.metricLabel}
              liveUrl={project.liveUrl}
              sourceUrl={project.sourceUrl}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
