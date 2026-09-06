"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import AccessibleIcon from "@/components/ui/AccessibleIcon";

interface HeroSectionProps {
  name: string;
  eyebrow?: string;
  titleA: string;
  titleB: string;
  intro?: string;
  location?: string;
  imageUrl: string;
  imageAlt: string;
  contactEmail: string;
  resumeUrl?: string;
  resumeText?: string;
  availabilityText?: string;
  ctaContactText?: string;
  ctaScrollText?: string;
}

const traceNodes = [
  {
    index: "01",
    title: "retrieve",
    description: "Ground the context.",
    tools: "RAG · vector search",
  },
  {
    index: "02",
    title: "reason",
    description: "Connect the signal.",
    tools: "LLMs · caching",
  },
  {
    index: "03",
    title: "ship",
    description: "Make it dependable.",
    tools: "TypeScript · AWS",
  },
];

export default function HeroSection({
  name,
  eyebrow = "Software engineer · AI systems builder",
  titleA,
  titleB,
  intro = "I turn messy product problems into reliable software — then make AI useful in the real world.",
  location = "Jyväskylä, Finland",
  imageUrl,
  imageAlt,
  contactEmail,
  resumeUrl = "/api/resume",
  resumeText = "Resume",
  availabilityText = "Open to software & AI opportunities",
  ctaContactText = "Let's talk",
  ctaScrollText = "Explore the work",
}: HeroSectionProps) {
  const nameParts = name.split(" ");
  const lastName = nameParts.pop() || name;
  const firstName = nameParts.join(" ");

  return (
    <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-primary" />
          <span className="section-kicker">{eyebrow}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55 }}
          className="mb-7"
        >
          <h1 className="font-heading text-[clamp(3.25rem,7.4vw,7.2rem)] font-semibold leading-[0.84] tracking-normal text-foreground">
            <span className="block">{firstName}</span>
            <span className="block text-primary">
              {lastName}<span className="text-accent">.</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium"
        >
          <span className="title-chip">
            {titleA}
          </span>
          <span className="text-accent">+</span>
          <span className="title-chip title-chip-accent">
            {titleB}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.5 }}
          className="text-balance max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
        >
          {intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <AccessibleIcon icon={MapPin} className="h-4 w-4 text-primary" />
            {location}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {availabilityText}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            href={`mailto:${contactEmail}`}
            className="focus-ring command-button group"
          >
            <AccessibleIcon icon={Mail} className="h-4 w-4" />
            {ctaContactText}
            <AccessibleIcon icon={ArrowUpRight} className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring ghost-button"
          >
            <AccessibleIcon icon={FileText} className="h-4 w-4 text-primary" />
            {resumeText}
          </Link>
          <a
            href="#projects"
            className="focus-ring text-button"
          >
            {ctaScrollText}
            <AccessibleIcon icon={ArrowDown} className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.18, duration: 0.65, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:ml-auto"
      >
        <div className="hero-seal motion-safe" aria-hidden="true" />
        <div className="signal-card relative overflow-hidden p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between border-b border-border/70 pb-4">
            <span className="inline-flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
              <AccessibleIcon icon={Sparkles} className="h-3.5 w-3.5 text-accent" />
              Systems trace
            </span>
            <span className="status-chip text-primary">status / open</span>
          </div>

          <div className="mb-7 flex items-center gap-4">
            <div className="hero-portrait-frame">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                sizes="64px"
                className="object-cover grayscale-[0.15]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/15" />
            </div>
            <div className="min-w-0">
              <p className="atlas-label mb-1">Builder profile</p>
              <p className="truncate font-heading text-xl font-semibold tracking-normal text-foreground" translate="no">{name}</p>
              <p className="mt-1 text-sm text-muted-foreground">Human in the loop · thesis underway</p>
            </div>
          </div>

          <div className="trace-surface p-4 sm:p-5" role="img" aria-label="A systems trace from retrieval through reasoning to shipping">
            <div className="flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
              <span>input / messy problem</span>
              <span className="text-accent">output / useful system</span>
            </div>

            <div className="relative mt-8">
              <div className="trace-line absolute left-[16%] right-[16%] top-5 hidden h-px sm:block" aria-hidden="true">
                <span className="trace-packet motion-safe absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
              </div>
              <div className="trace-line absolute bottom-6 left-5 top-6 w-px sm:hidden" aria-hidden="true" />
              <div className="grid gap-5 sm:grid-cols-3 sm:gap-2">
                {traceNodes.map((node) => (
                  <div key={node.index} className="relative z-10 flex items-start gap-3 sm:block sm:text-center">
                    <span className="trace-node sm:mx-auto">
                      {node.index}
                    </span>
                    <div className="pt-0.5 sm:pt-4">
                      <p className="font-heading text-lg font-semibold tracking-normal text-foreground">{node.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{node.description}</p>
                      <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-wider text-primary/80">{node.tools}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
              <span>trace status</span>
              <span className="inline-flex items-center gap-1.5 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                open to opportunities
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="signal-meta p-3">
              <p className="atlas-label">Ships with</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Care + clarity</p>
            </div>
            <div className="signal-meta p-3">
              <p className="atlas-label">Reach me</p>
              <p className="mt-1 truncate text-sm font-semibold text-foreground">{contactEmail}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
