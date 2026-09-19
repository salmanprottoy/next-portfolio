"use client";

import AccessibleIcon from "@/components/ui/AccessibleIcon";
import MotionReveal from "@/components/ui/MotionReveal";
import { Calendar, MapPin } from "lucide-react";

export interface TimelineEntry {
  title: string;
  subtitle: string;
  date: string;
  description?: (string | React.ReactNode)[];
}

interface TimelineItemProps extends TimelineEntry {
  index: number;
}

export function TimelineItem({
  title,
  subtitle,
  date,
  description,
  index,
}: TimelineItemProps) {
  return (
    <MotionReveal
      delay={index * 0.06}
      distance={14}
      duration={0.45}
      className="group relative pl-8 pb-6 last:pb-0 md:pl-14"
    >
      <div className="absolute bottom-0 left-[0.45rem] top-2 w-px bg-border md:left-[0.65rem]" aria-hidden="true" />
      <div className="absolute left-0 top-0 font-mono text-[0.58rem] font-semibold tracking-[0.08em] text-muted-foreground" aria-hidden="true">
        <div className="timeline-node">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <article className="border border-border bg-card p-5 transition-colors hover:border-primary/20 md:p-6">
        <div className="mb-4 flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="font-display text-balance text-[1.05rem] font-semibold tracking-[-0.015em] text-foreground md:text-[1.25rem]">{title}</h3>
            <div className="mt-1.5 flex items-start gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-primary">
              <AccessibleIcon icon={MapPin} className="mt-0.5 h-3 w-3 shrink-0 text-primary/60" />
              <span>{subtitle}</span>
            </div>
          </div>
          <span className="date-chip inline-flex w-fit shrink-0 items-center gap-1.5">
            <AccessibleIcon icon={Calendar} className="h-3 w-3 text-accent" />
            {date}
          </span>
        </div>

        {description && (
          <ul className="space-y-2.5 font-mono text-[0.78rem] leading-[1.65] text-muted-foreground">
            {description.map((item, itemIndex) => (
              <li key={typeof item === "string" ? `${item}-${itemIndex}` : itemIndex} className="flex gap-2.5">
                <span className="mt-[0.58rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="font-sans min-w-0 break-words text-[0.82rem] leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </MotionReveal>
  );
}

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {items.map((item, index) => (
        <TimelineItem
          key={`${item.title}-${item.subtitle}-${item.date}`}
          {...item}
          index={index}
        />
      ))}
    </div>
  );
}
