"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

interface HeroSectionProps {
  name: string;
  titleA: string;
  titleB: string;
  imageUrl: string;
  imageAlt: string;
  contactEmail: string;
}

export default function HeroSection({
  name,
  titleA,
  titleB,
  imageUrl,
  imageAlt,
  contactEmail,
}: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center text-center gap-8">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10"
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 192px, 128px"
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="space-y-4 max-w-4xl">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
        >
          {name}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground font-light"
        >
          <span>{titleA}</span>
          <span className="hidden md:inline text-primary">•</span>
          <span>{titleB}</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 mt-4"
      >
        <Link
          href={`mailto:${contactEmail}`}
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Contact Me
        </Link>
        <Link
          href="#experience"
          className="px-8 py-3 rounded-full border border-border hover:bg-secondary/50 transition-colors font-medium"
        >
          View Experience
        </Link>
      </motion.div>
    </div>
  );
}
