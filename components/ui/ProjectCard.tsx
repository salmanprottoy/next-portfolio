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

const kindMap: Record<ProjectKind, { icon: React.ElementType; color: string }> = {
  ai: { icon: Sparkles, color: "text-primary" },
  platform: { icon: Database, color: "text-accent" },
  research: { icon: BookOpen, color: "text-primary" },
  frontend: { icon: Code2, color: "text-accent" },
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
      delay={index * 0.06}
      distance={16}
      duration={0.45}
      className="group h-full"
    >
      <article className="flex h-full flex-col border border-border bg-card transition-colors hover:border-primary/25">
        <div className="flex items-start justify-between gap-4 border-b border-border p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className={`icon-tile h-8 w-8 ${visual.color} border-border bg-muted/30`}>
              <AccessibleIcon icon={Icon} className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">{eyebrow}</p>
              <p className={`font-mono text-[0.58rem] uppercase tracking-[0.08em] ${visual.color} font-semibold`}>SPEC · 0{index + 1}</p>
            </div>
          </div>
          {metric && metricLabel && (
            <div className="text-right">
              <p className={`font-display tabular-nums text-xl font-semibold tracking-[-0.02em] ${visual.color}`}>{metric}</p>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-muted-foreground">{metricLabel}</p>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="font-display text-balance text-[1.2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2.5 flex-1 font-mono text-[0.78rem] leading-[1.65] text-muted-foreground">{description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
            {tags.map((tag) => (
              <span key={tag} translate="no" className="border border-border bg-muted/20 px-1.5 py-1 font-mono text-[0.62rem] tracking-[0.04em] text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex min-h-11 items-center gap-4 border-t border-border bg-muted/10 px-4 py-2.5">
          {liveUrl && liveUrl !== "#" && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo for ${title}`}
              className="focus-ring inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.06em] text-primary hover:text-accent"
            >
              <AccessibleIcon icon={ExternalLink} className="h-3 w-3" />
              Live demo
            </Link>
          )}
          {sourceUrl && sourceUrl !== "#" && (
            <Link
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source or publication for ${title}`}
              className="focus-ring inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground hover:text-foreground"
            >
              <AccessibleIcon icon={kind === "research" ? BookOpen : Github} className="h-3 w-3" />
              {kind === "research" ? "Publication" : "Source"}
            </Link>
          )}
          {!liveUrl && (!sourceUrl || sourceUrl === "#") && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">
              <AccessibleIcon icon={Layers} className="h-3 w-3" />
              Private case study
            </span>
          )}
          <span className="ml-auto font-mono text-[0.58rem] uppercase tracking-[0.08em] text-muted-foreground/85">ledger entry</span>
        </div>
      </article>
    </MotionReveal>
  );
}
