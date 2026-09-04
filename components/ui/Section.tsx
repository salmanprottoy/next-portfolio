import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import SectionMotion from "./SectionMotion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className={cn(
        "w-full scroll-mt-24 px-5 py-20 md:px-10 md:py-28 lg:px-20 relative overflow-hidden",
        className
      )}
    >
      <SectionMotion>{children}</SectionMotion>
    </section>
  );
}
