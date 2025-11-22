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
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 pb-12 border-l border-border last:pb-0"
    >
      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground font-mono flex items-center gap-1 mt-1 sm:mt-0 whitespace-nowrap">
          <Calendar className="w-3 h-3" />
          {date}
        </span>
      </div>
      
      <div className="text-lg text-primary font-medium mb-4 flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
        <MapPin className="w-4 h-4 flex-shrink-0" />
        <span className="overflow-hidden text-ellipsis">{subtitle}</span>
      </div>

      {description && (
        <ul className="space-y-2 text-muted-foreground">
          {description.map((item, i) => (
            <li key={i} className="leading-relaxed">
              • {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} index={index} />
      ))}
    </div>
  );
}
