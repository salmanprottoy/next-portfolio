"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import { socialMedia, resume } from "@/app/data/Data";
import Link from "next/link";

const Header = () => {
  const socialLinks = socialMedia.filter(
    (item) => item.name === "github" || item.name === "linkedin"
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="flex gap-4">
        {socialLinks.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {item.name === "github" ? (
              <Github className="w-6 h-6" />
            ) : (
              <Linkedin className="w-6 h-6" />
            )}
          </Link>
        ))}
      </div>

      <Link
        href={resume.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <FileText className="w-4 h-4" />
        <span className="font-medium text-sm">{resume.text}</span>
      </Link>
    </motion.header>
  );
};

export default Header;
