"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  Languages,
  Mail,
  Quote,
  Sparkles,
} from "lucide-react";
import AccessibleIcon from "@/components/ui/AccessibleIcon";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Section from "@/components/ui/Section";
import dynamic from "next/dynamic";
import Timeline from "@/components/ui/Timeline";
import HeroSection from "@/components/sections/HeroSection";
import GlassCard from "@/components/ui/GlassCard";

// Below-fold heavy sections — code-split to reduce initial JS (TBT)
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection"), {
  loading: () => <div className="h-32 animate-pulse bg-muted/20" aria-hidden="true" />,
});
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), {
  loading: () => <div className="h-32 animate-pulse bg-muted/20" aria-hidden="true" />,
});
import {
  AboutMe,
  Awards,
  Educations,
  Experience,
  Languages as SpokenLanguages,
  Publications,
  Skills,
  contact,
  focusAreas,
  heroConfig,
  impactStats,
  resume,
} from "@/app/data/Data";

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-3 flex items-center gap-3">
        <span className="section-kicker">{kicker}</span>
        <span className="section-rule max-w-16" />
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-balance text-[2.05rem] font-semibold leading-[0.92] tracking-[-0.03em] text-foreground md:text-[3.2rem]">
          {title}
        </h2>
        {description && (
          <p className="max-w-sm font-mono text-[0.72rem] leading-relaxed tracking-[0.02em] text-muted-foreground md:text-right">
            {description}
          </p>
        )}
      </div>
      <div className="trace-divider mt-6" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
    ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
    : "/salman.jpg";

  return (
    <div className="portfolio-shell relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary/30">
        <a
          id="skip-link"
          href="#main-content"
          className="focus-ring skip-link"
          onClick={(event) => {
            event.preventDefault();
            document.dispatchEvent(new Event("portfolio:skip-to-content"));
            window.requestAnimationFrame(() => {
              const mainContent = document.getElementById("main-content");
              mainContent?.focus({ preventScroll: true });
              window.history.replaceState(null, "", "#main-content");
            });
          }}
        >
          Skip to content
        </a>
        <div className="grid-canvas pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden="true" />
        <Header />
        <main id="main-content" tabIndex={-1}>

      <Section id="hero" className="pt-28 md:pt-36">
        <HeroSection
          name={heroConfig.name}
          eyebrow={heroConfig.eyebrow}
          titleA={heroConfig.titleA}
          titleB={heroConfig.titleB}
          intro={heroConfig.intro}
          location={heroConfig.location}
          imageUrl={profileImageUrl}
          imageAlt={heroConfig.name}
          contactEmail={contact.email}
          resumeUrl={resume.link}
          resumeText={resume.text}
          availabilityText={heroConfig.availabilityText}
          ctaContactText={heroConfig.ctaContactText}
          ctaScrollText={heroConfig.ctaScrollText}
        />
      </Section>

      <Section id="about" className="border-t border-border pt-10 md:pt-16">
        <SectionHeading
          kicker="About — Field ledger"
          title="Systems that survive contact with users."
          description="How I work: retrieval that grounds, infrastructure that holds, and interfaces that don't lie."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {AboutMe.map((paragraph, index) => (
              <p key={index} className="max-w-2xl text-[15px] leading-[1.75] text-muted-foreground md:text-[17px]">
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex items-start gap-3 border-l-2 border-accent py-1.5 pl-4 font-mono text-[0.72rem] leading-relaxed tracking-[0.02em] text-muted-foreground">
              <AccessibleIcon icon={Quote} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              <p>Build for the happy path. Design for everything that happens after it.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="border border-border bg-card"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                Selected signals // ledger
              </span>
              <AccessibleIcon icon={Sparkles} className="h-3.5 w-3.5 text-accent" />
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-border">
              {impactStats.map((stat) => (
                <div key={stat.label} className="p-4 sm:p-5">
                  <p className="font-display tabular-nums text-[1.7rem] font-semibold tracking-[-0.02em] text-primary sm:text-[1.9rem]">{stat.value}</p>
                  <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border bg-muted/20 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.08em] text-muted-foreground">
              Source: production telemetry · Brand Cloud / W3 / JYU
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="experience" className="border-t border-border">
        <SectionHeading
          kicker="Experience — Service record"
          title="Where I have shipped."
          description="Production systems, zero-downtime migrations, and product work · Japan ↔ Bangladesh · 2021–2026"
        />
        <div className="mb-6 flex items-center gap-2 border border-border bg-muted/20 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">
          <AccessibleIcon icon={BriefcaseBusiness} className="h-3.5 w-3.5 text-primary" />
          <span>Software engineering · full stack · infrastructure · applied AI</span>
          <span className="ml-auto hidden sm:inline">4 roles · 2 countries · continuous shipping</span>
        </div>
        <Timeline
          items={Experience.map((experience) => ({
            title: experience.jobTitle,
            subtitle: experience.company,
            date: experience.date,
            description: experience.bullets,
          }))}
        />
      </Section>

      <Section id="projects" className="border-t border-border">
        <ProjectsSection />
      </Section>

      <Section id="education" className="border-t border-border">
        <SectionHeading
          kicker="Education — Research ledger"
          title="Always still learning."
          description="The academic foundation behind intelligent systems — thesis in multi-objective optimization."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {Educations.map((education, index) => (
            <motion.div
              key={`${education.exam}-${education.year}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard hover className="h-full">
                <div className="flex h-full flex-col justify-between gap-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="icon-tile h-11 w-11 shrink-0">
                      <AccessibleIcon icon={GraduationCap} className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{education.year}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{education.exam}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary">{education.institution}</p>
                    {education.detail && (
                      <p className="status-chip status-chip-accent mt-3 w-fit">
                        {education.detail}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="awards" className="border-t border-border">
        <SectionHeading
          kicker="Recognition — Peer review"
          title="Awards & Publications."
          description="Research that shipped beyond the lab — peer-reviewed and awarded."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard hover className="h-full">
              <div className="flex h-full flex-col gap-6">
                <div className="flex items-start justify-between gap-5">
                  <div className="icon-tile h-11 w-11 shrink-0 bg-primary/10 text-primary">
                    <AccessibleIcon icon={Award} className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{Awards[0].date}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{Awards[0].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{Awards[0].description}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {Publications.map((pub) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <GlassCard hover className="h-full">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex items-start justify-between gap-5">
                    <div className="icon-tile h-11 w-11 shrink-0 bg-accent/10 text-accent">
                      <AccessibleIcon icon={BookOpen} className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{pub.venue}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{pub.title}</h3>
                    <p className="mt-2 text-xs font-medium text-primary">{pub.authors}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pub.detail}</p>
                    {pub.link && (
                      <Link
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/75"
                      >
                        <AccessibleIcon icon={ExternalLink} className="h-3.5 w-3.5" />
                        Read publication
                      </Link>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {SpokenLanguages.map((lang) => (
            <span key={lang.name} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-xs">
              <AccessibleIcon icon={Languages} className="h-3 w-3 text-muted-foreground" />
              <span className="font-semibold text-foreground">{lang.name}:</span>
              <span className="text-muted-foreground">{lang.level}</span>
            </span>
          ))}
        </div>
      </Section>

      <Section id="toolkit" className="border-t border-border">
        <SectionHeading
          kicker="Toolkit — Instrumentation"
          title="How I approach the work."
          description="A practical mix of product thinking, systems craft, and curiosity — one pipeline, end to end."
        />

        <div className="mb-16 grid gap-4 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass glow-hover p-6"
            >
              <p className="area-label mb-12 font-mono text-[0.68rem] tracking-[0.18em]">{area.label}</p>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <SkillsSection skills={Skills} />
      </Section>

      <Section id="contact" className="border-t border-border pb-12">
        <div className="border border-border bg-card p-6 sm:p-10 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">Contact — Open channel</p>
              <h2 className="mt-3 font-display text-balance text-4xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground md:text-6xl">
                Have a hard problem?
                <span className="block text-primary">Let&apos;s make it useful.</span>
              </h2>
              <p className="mt-4 max-w-lg font-mono text-[0.78rem] leading-relaxed tracking-[0.01em] text-muted-foreground">
                I&apos;m always interested in thoughtful product teams, ambitious engineering challenges, and applied AI that earns its place in the workflow.
              </p>
              <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">
                Jyväskylä, Finland · salman.prottoy@gmail.com · +358 44 955 0788
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-3">
              <Link href={`mailto:${contact.email}`} className="focus-ring command-button group">
                <AccessibleIcon icon={Mail} className="h-4 w-4" />
                {contact.email}
                <AccessibleIcon icon={ArrowUpRight} className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <p className="font-mono text-[0.62rem] text-muted-foreground">Usually replies within a day. Thesis-friendly hours.</p>
            </div>
          </div>
        </div>
      </Section>

        </main>
        <Footer />
    </div>
  );
}
