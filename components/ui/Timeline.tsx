"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-3 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-[7px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(45,212,191,0.5)] ring-[3px] ring-background" />

      {/* Content card */}
      <div className="glass rounded-xl p-5 md:p-6 glow-hover transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
          <h3 className="text-lg md:text-xl font-bold text-foreground">{title}</h3>
          <span className="text-xs md:text-sm text-muted-foreground font-mono flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-full w-fit">
            <Calendar className="w-3 h-3 text-primary" />
            {date}
          </span>
        </div>

        <div className="text-sm md:text-base text-primary font-medium mb-3 flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-primary/70" />
          <span className="truncate">{subtitle}</span>
        </div>

        {description && (
          <ul className="space-y-1.5 text-muted-foreground text-sm leading-relaxed">
            {description.map((item, i) => (
              <li key={typeof item === "string" ? `${item}-${i}` : i} className="flex gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
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
