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
      delay={index * 0.08}
      distance={18}
      duration={0.5}
      className="group relative pl-10 pb-8 last:pb-0 md:pl-16"
    >
      <div className="absolute bottom-0 left-[0.45rem] top-3 w-px bg-gradient-to-b from-primary/70 via-primary/25 to-transparent md:left-[0.7rem]" aria-hidden="true" />
      <div className="timeline-node absolute left-0 top-0" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>

      <article className="glass glow-hover p-5 transition-transform duration-300 group-hover:-translate-y-0.5 md:p-7">
        <div className="mb-5 flex flex-col gap-3 border-b border-border/60 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="font-heading text-balance text-xl font-semibold tracking-normal text-foreground md:text-2xl">{title}</h3>
            <div className="mt-2 flex items-start gap-2 text-sm font-medium text-primary">
              <AccessibleIcon icon={MapPin} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70" />
              <span>{subtitle}</span>
            </div>
          </div>
          <span className="date-chip inline-flex w-fit shrink-0 items-center gap-1.5 font-mono text-[0.68rem] text-muted-foreground">
            <AccessibleIcon icon={Calendar} className="h-3 w-3 text-accent" />
            {date}
          </span>
        </div>

        {description && (
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            {description.map((item, itemIndex) => (
              <li key={typeof item === "string" ? `${item}-${itemIndex}` : itemIndex} className="flex gap-3">
                <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80 shadow-[0_0_8px_hsl(var(--primary)/0.45)]" aria-hidden="true" />
                <span>{item}</span>
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
