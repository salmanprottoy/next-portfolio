"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Facebook,
  FileText,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { contact, resume, siteConfig, socialMedia } from "@/app/data/Data";
import AccessibleIcon from "@/components/ui/AccessibleIcon";
import useReducedMotionPreference from "@/hooks/useReducedMotionPreference";

const socialIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  insta: Instagram,
  youtube: Youtube,
};

export default function Footer() {
  const prefersReducedMotion = useReducedMotionPreference();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion === true ? "auto" : "smooth" });
  };

  return (
    <footer data-site-footer className="site-footer safe-area-inline relative z-10 w-full md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong px-6 py-7 md:px-8"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#hero" className="focus-ring group inline-flex items-center gap-2">
              <span className="brand-mark">SP</span>
              <span className="font-heading text-lg font-semibold tracking-normal text-foreground">Keep in touch.</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building dependable software and exploring useful AI from Jyväskylä, Finland.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex flex-wrap items-center gap-1">
              {socialMedia.map((item) => {
                const Icon = socialIconMap[item.name];
                if (!Icon) return null;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring touch-target rounded-none p-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label={item.label}
                    title={item.label}
                  >
                    <AccessibleIcon icon={Icon} className="h-4 w-4" />
                  </Link>
                );
              })}
              <Link
                href={resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring ml-2 inline-flex items-center gap-1.5 border border-primary/35 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary/60 hover:bg-primary/20"
              >
                <AccessibleIcon icon={FileText} className="h-3.5 w-3.5" />
                {resume.text}
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground/75 md:justify-end">
              <a href={`mailto:${contact.email}`} className="focus-ring inline-flex items-center gap-1.5 transition-colors hover:text-primary">
                <AccessibleIcon icon={Mail} className="h-3 w-3" />
                {contact.email}
              </a>
              <a href={`tel:${contact.phone}`} className="focus-ring inline-flex items-center gap-1.5 transition-colors hover:text-primary">
                <AccessibleIcon icon={Phone} className="h-3 w-3" />
                {contact.phone}
              </a>
              <Link href="/privacy-policy" className="focus-ring transition-colors hover:text-primary">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-border/60 pt-5 text-xs text-muted-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {siteConfig.fullName} · Last updated {siteConfig.lastUpdated}
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              Made with <AccessibleIcon icon={Heart} className="h-3 w-3 fill-red-400 text-red-400" /> and curiosity
            </span>
            <button
              onClick={scrollToTop}
              className="focus-ring touch-target rounded-none p-1.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label="Back to top"
              title="Back to top"
            >
              <AccessibleIcon icon={ArrowUp} className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
