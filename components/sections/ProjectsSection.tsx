"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { Projects } from "@/app/data/projects";

export default function ProjectsSection() {
  return (
    <div className="space-y-8">
      <div className="mb-2">
        <div className="mb-3 flex items-center gap-3">
          <span className="section-kicker">Selected work — Systems ledger</span>
          <span className="section-rule max-w-16" />
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-balance text-[2.05rem] font-semibold leading-[0.92] tracking-[-0.03em] text-foreground md:text-[3.1rem]"
          >
            Work with a signal.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="max-w-sm font-mono text-[0.72rem] leading-relaxed tracking-[0.01em] text-muted-foreground md:text-right"
          >
            Production engineering, applied AI, distributed data, and peer-reviewed research — one ledger, six entries.
          </motion.p>
        </div>
        <div className="trace-divider mt-6" aria-hidden="true" />
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
