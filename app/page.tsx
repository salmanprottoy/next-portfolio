"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  Quote,
  Sparkles,
} from "lucide-react";
import AccessibleIcon from "@/components/ui/AccessibleIcon";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Section from "@/components/ui/Section";
import Timeline from "@/components/ui/Timeline";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GlassCard from "@/components/ui/GlassCard";
import {
  AboutMe,
  Educations,
  Experience,
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
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="section-kicker">{kicker}</span>
          <span className="section-rule max-w-20" />
        </div>
        <h2 className="font-heading text-balance text-4xl font-semibold tracking-normal text-foreground md:text-6xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
          {description}
        </p>
      )}
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

      <Section id="hero" className="min-h-[90vh] pt-32 md:pt-44">
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

      <Section id="about" className="border-t border-border/50 pt-16 md:pt-24">
        <SectionHeading
          kicker="About"
          title="Useful software, thoughtfully made."
          description="A little context on how I work and what I bring to a team."
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {AboutMe.map((paragraph, index) => (
              <p key={index} className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex items-start gap-3 border-l-2 border-accent/70 py-1 pl-4 text-sm text-muted-foreground">
              <AccessibleIcon icon={Quote} className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p>Build for the happy path. Design for everything that happens after it.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="signal-card p-5 sm:p-7"
          >
            <div className="mb-6 flex items-center justify-between border-b border-border/70 pb-4">
              <span className="section-kicker">Selected signals</span>
              <AccessibleIcon icon={Sparkles} className="h-4 w-4 text-accent" />
            </div>
            <div className="signal-grid grid grid-cols-2 gap-px overflow-hidden border border-border/70 bg-border/70">
              {impactStats.map((stat) => (
                <div key={stat.label} className="bg-card/85 p-4 sm:p-5">
                  <p className="font-heading tabular-nums text-3xl font-semibold tracking-normal text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="experience" className="border-t border-border/50">
        <SectionHeading
          kicker="Experience"
          title="Where I have shipped."
          description="Production systems, migrations, and product work across Japan and Bangladesh."
        />
        <div className="mb-8 flex items-center gap-3 text-sm text-muted-foreground">
          <AccessibleIcon icon={BriefcaseBusiness} className="h-4 w-4 text-primary" />
          <span>Software engineering · full stack · infrastructure · applied AI</span>
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

      <Section id="projects" className="border-t border-border/50">
        <ProjectsSection />
      </Section>

      <Section id="education" className="border-t border-border/50">
        <SectionHeading
          kicker="Education"
          title="Always still learning."
          description="The academic foundation behind my curiosity for intelligent systems, including my current thesis work."
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
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">{education.exam}</h3>
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

      <Section id="toolkit" className="border-t border-border/50">
        <SectionHeading
          kicker="Toolkit"
          title="How I approach the work."
          description="A practical mix of product thinking, systems craft, and curiosity."
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
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <SkillsSection skills={Skills} />
      </Section>

      <Section id="contact" className="border-t border-border/50 pb-16">
        <div className="signal-card p-7 sm:p-10 md:p-14">
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker mb-4">Contact</p>
              <h2 className="font-heading text-balance text-4xl font-semibold tracking-normal text-foreground md:text-6xl">
                Have a hard problem?
                <span className="block text-primary">Let&apos;s make it useful.</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                I&apos;m always interested in thoughtful product teams, ambitious engineering challenges, and applied AI that earns its place in the workflow.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-3">
              <Link
                href={`mailto:${contact.email}`}
                className="focus-ring command-button group"
              >
                <AccessibleIcon icon={Mail} className="h-4 w-4" />
                {contact.email}
                <AccessibleIcon icon={ArrowUpRight} className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

        </main>
        <Footer />
    </div>
  );
}
