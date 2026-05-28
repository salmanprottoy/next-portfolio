"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowDown } from "lucide-react";

interface HeroSectionProps {
  name: string;
  titleA: string;
  titleB: string;
  imageUrl: string;
  imageAlt: string;
  contactEmail: string;
  availabilityText?: string;
  ctaContactText?: string;
  ctaScrollText?: string;
}

export default function HeroSection({
  name,
  titleA,
  titleB,
  imageUrl,
  imageAlt,
  contactEmail,
  availabilityText = "Available for opportunities",
  ctaContactText = "Contact Me",
  ctaScrollText = "View Experience",
}: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center text-center gap-8 relative">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-8 -left-4 md:left-12 w-16 h-16 md:w-20 md:h-20 rounded-2xl glass gradient-border opacity-60 hidden sm:block" aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 -right-4 md:right-16 w-12 h-12 md:w-14 md:h-14 rounded-full glass opacity-50 hidden sm:block" aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-32 -left-8 md:left-8 w-10 h-10 rounded-xl glass opacity-40 hidden sm:block" aria-hidden="true"
      />

      {/* Profile image with glow */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-2xl opacity-60" />
        <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-[3px] border-primary/20 shadow-2xl">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 176px, 128px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Text content */}
      <div className="space-y-5 max-w-4xl relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-primary font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          {availabilityText}
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
            {name}
          </span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-lg md:text-xl text-muted-foreground font-light"
        >
          <span className="glass px-4 py-1.5 rounded-full text-sm md:text-base">
            {titleA}
          </span>
          <span className="hidden sm:block text-primary">•</span>
          <span className="glass px-4 py-1.5 rounded-full text-sm md:text-base">
            {titleB}
          </span>
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 mt-2"
      >
        <Link
          href={`mailto:${contactEmail}`}
          className="group px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30"
        >
          <Mail className="w-4 h-4" />
          {ctaContactText}
        </Link>
        <Link
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-3 rounded-full glass font-medium hover:bg-secondary/50 transition-all flex items-center gap-2"
        >
          {ctaScrollText}
          <ArrowDown className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-muted-foreground"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
