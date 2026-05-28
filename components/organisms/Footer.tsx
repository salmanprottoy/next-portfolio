"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  Phone,
  Mail,
  FileText,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
import { socialMedia, resume, siteConfig, contact } from "@/app/data/Data";

const socialIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  insta: Instagram,
  youtube: Youtube,
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full px-4 md:px-8 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-strong rounded-2xl px-6 md:px-8 py-8"
      >
        {/* Top row: Social links + Back to top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-border/40">
          {/* All social links */}
          <div className="flex items-center gap-1">
            {socialMedia.map((item) => {
              const Icon = socialIconMap[item.name];
              if (!Icon) return null;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>

          {/* Resume + Back to top */}
          <div className="flex items-center gap-2">
            <Link
              href={resume.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row: Info + Contact */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <Heart className="w-3 h-3 inline text-red-400 fill-red-400" />{" "}
              by {siteConfig.fullName}
            </p>
            <p className="text-xs text-muted-foreground/50">
              © {new Date().getFullYear()} · Last updated {siteConfig.lastUpdated}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="w-3 h-3" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3" />
              {contact.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
