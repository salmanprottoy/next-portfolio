"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { resume, siteConfig } from "@/app/data/Data";
import ThemeToggle from "@/components/ui/ThemeToggle";
import AccessibleIcon from "@/components/ui/AccessibleIcon";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const siteHeaderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateScrollState = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0);
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollState);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...navLinks.map((link) => link.href.slice(1))];
    const visibility = new Map<string, IntersectionObserverEntry>();
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibility.set(entry.target.id, entry));
        const visibleSection = Array.from(visibility.values())
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeForSkipLink = () => setMobileMenuOpen(false);
    document.addEventListener("portfolio:skip-to-content", closeForSkipLink);

    return () => document.removeEventListener("portfolio:skip-to-content", closeForSkipLink);
  }, []);

  useEffect(() => {
    const main = document.getElementById("main-content");
    const footer = document.querySelector<HTMLElement>("[data-site-footer]");
    const skipLink = document.getElementById("skip-link");
    const header = siteHeaderRef.current;

    if (!mobileMenuOpen) return;

    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    skipLink?.setAttribute("inert", "");
    header?.setAttribute("inert", "");

    return () => {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      skipLink?.removeAttribute("inert");
      header?.removeAttribute("inert");
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const getFocusableElements = () => Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector));
    getFocusableElements()[0]?.focus();

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu(true);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (!menu.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleMenuKeyDown);
    return () => document.removeEventListener("keydown", handleMenuKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = (restoreFocus = false) => {
    setMobileMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        ref={siteHeaderRef}
        className={`site-header fixed left-0 right-0 top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="mx-auto max-w-[90rem] px-4 md:px-8">
          <div className="glass-strong relative flex items-center justify-between px-3 py-2.5 md:px-5">
            <div
              className="absolute left-0 top-0 h-0.5 origin-left bg-primary transition-transform duration-150"
              style={{ transform: `scaleX(${scrollProgress / 100})`, width: "100%" }}
              aria-hidden="true"
            />

            <div className="flex items-center gap-3">
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="focus-ring touch-target rounded-none p-2 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground lg:hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-haspopup="dialog"
              >
                <AccessibleIcon icon={mobileMenuOpen ? X : Menu} className="h-5 w-5" />
              </button>

              <a href="#hero" className="focus-ring group inline-flex items-center gap-2">
                <span className="brand-mark">
                  {siteConfig.shortName}
                </span>
                <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground sm:block">
                  Personal archive / 2026
                </span>
              </a>
            </div>

            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const section = link.href.slice(1);
                const active = activeSection === section;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "location" : undefined}
                    className={`focus-ring nav-link ${active ? "is-active" : ""}`}
                  >
                    <span className="relative z-10">{link.label}</span>

                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-1.5">
              <Link
                href={resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring hidden h-11 min-h-11 items-center gap-1.5 border border-primary/35 bg-primary/10 px-3 text-xs font-semibold text-primary transition-colors hover:border-primary/60 hover:bg-primary/20 sm:flex"
              >
                <AccessibleIcon icon={FileText} className="h-3.5 w-3.5" />
                {resume.text}
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="site-mobile-menu glass-strong fixed left-4 right-4 z-40 p-4 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mb-3 flex items-center justify-between border-b border-border/60 pb-3">
              <span className="section-kicker">Navigate</span>
              <button
                type="button"
                onClick={() => closeMobileMenu(true)}
                className="focus-ring touch-target rounded-none p-2 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                aria-label="Close menu"
              >
                <AccessibleIcon icon={X} className="h-4 w-4" />
              </button>
            </div>
            <nav id="mobile-navigation" className="flex flex-col gap-1" aria-label="Mobile navigation links">
              {navLinks.map((link) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => closeMobileMenu()}
                    aria-current={active ? "location" : undefined}
                    className={`focus-ring flex items-center gap-3 border-l px-4 py-3 text-left text-sm font-semibold transition-colors ${active ? "border-primary bg-primary/10 text-primary" : "border-transparent text-muted-foreground hover:border-primary/40 hover:bg-secondary/60 hover:text-foreground"}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-primary" : "bg-muted-foreground/50"}`} aria-hidden="true" />
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
