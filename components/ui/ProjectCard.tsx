"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  sourceUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group h-full"
    >
      <div className="glass rounded-2xl overflow-hidden h-full flex flex-col glow-hover transition-all duration-300 hover:-translate-y-1">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

        {/* Icon / visual header */}
        <div className="p-6 pb-0">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Layers className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-2 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-secondary/50 text-xs text-muted-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 border-t border-border/50 flex items-center gap-3">
          {liveUrl && liveUrl !== "#" && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo for ${title}`}
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </Link>
          )}
          {sourceUrl && sourceUrl !== "#" && (
            <Link
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title}`}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
