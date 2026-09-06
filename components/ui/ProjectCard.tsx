"use client";

import AccessibleIcon from "@/components/ui/AccessibleIcon";
import MotionReveal from "@/components/ui/MotionReveal";
import {
  BookOpen,
  Code2,
  Database,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { ProjectKind } from "@/app/data/projects";

interface ProjectCardProps {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  kind: ProjectKind;
  metric?: string;
  metricLabel?: string;
  liveUrl?: string;
  sourceUrl?: string;
  index?: number;
}

const kindMap: Record<ProjectKind, { icon: React.ElementType; color: string; background: string }> = {
  ai: { icon: Sparkles, color: "text-primary", background: "bg-primary/10" },
  platform: { icon: Database, color: "text-accent", background: "bg-accent/10" },
  research: { icon: BookOpen, color: "text-primary", background: "bg-primary/10" },
  frontend: { icon: Code2, color: "text-accent", background: "bg-accent/10" },
};

export default function ProjectCard({
  title,
  eyebrow,
  description,
  tags,
  kind,
  metric,
  metricLabel,
  liveUrl,
  sourceUrl,
  index = 0,
}: ProjectCardProps) {
  const visual = kindMap[kind];
  const Icon = visual.icon;

  return (
    <MotionReveal
      delay={index * 0.08}
      distance={24}
      duration={0.5}
      className="group h-full"
    >
      <article className="glass glow-hover flex h-full flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-start justify-between gap-4 border-b border-border/60 p-5 sm:p-6">
          <div className={`icon-tile ${visual.background} ${visual.color}`}>
            <AccessibleIcon icon={Icon} className="h-5 w-5" />
          </div>
          {metric && metricLabel && (
            <div className="text-right">
              <p className={`font-heading tabular-nums text-2xl font-semibold tracking-tight ${visual.color}`}>{metric}</p>
              <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">{metricLabel}</p>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="mb-3 font-mono text-[0.64rem] uppercase tracking-[0.15em] text-muted-foreground">{eyebrow}</p>
          <h3 className="font-heading text-balance text-2xl font-semibold tracking-normal text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} translate="no" className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex min-h-14 items-center gap-4 border-t border-border/60 px-5 py-3 sm:px-6">
          {liveUrl && liveUrl !== "#" && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo for ${title}`}
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/75"
            >
              <AccessibleIcon icon={ExternalLink} className="h-3.5 w-3.5" />
              Live demo
            </Link>
          )}
          {sourceUrl && sourceUrl !== "#" && (
            <Link
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source or publication for ${title}`}
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <AccessibleIcon icon={kind === "research" ? BookOpen : Github} className="h-3.5 w-3.5" />
              {kind === "research" ? "Publication" : "Source"}
            </Link>
          )}
          {!liveUrl && (!sourceUrl || sourceUrl === "#") && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.64rem] uppercase tracking-wider text-muted-foreground/65">
              <AccessibleIcon icon={Layers} className="h-3.5 w-3.5" />
              Private case study
            </span>
          )}
        </div>
      </article>
    </MotionReveal>
  );
}
