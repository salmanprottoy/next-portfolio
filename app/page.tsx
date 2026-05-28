"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Award, BookOpen, GraduationCap, FlaskConical, Users } from "lucide-react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Section from "@/components/ui/Section";
import Timeline from "@/components/ui/Timeline";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import {
  Experience,
  Educations,
  Skills,
  AboutMe,
  contact,
  heroConfig,
  ResearchExperience,
  Publications,
  HonorsAndAwards,
  ExtraCurricular,
} from "@/app/data/Data";

export default function Home() {
  const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
    ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
    : "/salman.jpg";

  return (
    <main className="bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 relative">
      <AnimatedBackground />
      <Header />

      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-24 md:pt-44 md:pb-36 min-h-[90vh]">
        <HeroSection
          name={heroConfig.name}
          titleA={heroConfig.titleA}
          titleB={heroConfig.titleB}
          imageUrl={profileImageUrl}
          imageAlt={heroConfig.name}
          contactEmail={contact.email}
          availabilityText={heroConfig.availabilityText}
          ctaContactText={heroConfig.ctaContactText}
          ctaScrollText={heroConfig.ctaScrollText}
        />
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Get to know me</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading">
                About Me
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {AboutMe.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg">{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-purple-500/20 to-primary/10 rounded-3xl opacity-40 group-hover:opacity-60 blur-2xl transition-opacity duration-700" />
            <GlassCard gradientBorder className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden p-0">
              <Image
                src={profileImageUrl}
                alt="About Me"
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Work History</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading">
              Experience
            </h2>
          </div>

          <Timeline
            items={Experience.map((exp) => ({
              title: exp.jobTitle,
              subtitle: exp.company,
              date: exp.date,
              description: exp.bullets,
            }))}
          />
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Academic Background</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading">
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {Educations.map((edu, index) => (
              <motion.div
                key={`${edu.exam}-${edu.year}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-foreground">{edu.exam}</h3>
                      <p className="text-sm text-primary font-medium">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground font-mono">{edu.year}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Research Work</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading">
              Research
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {ResearchExperience.map((res, index) => (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
                  <div className="flex items-start gap-4 relative">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FlaskConical className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-bold text-foreground">{res.title}</h3>
                        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-full w-fit">{res.date}</span>
                      </div>
                      <p className="text-sm text-primary font-medium">{res.institution}</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {res.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Published Work</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading">
              Publications
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {Publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard gradientBorder glow className="relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1 min-w-0">
                      <h3 className="font-bold text-foreground text-base md:text-lg leading-snug">{pub.title}</h3>
                      <p className="text-sm text-primary font-medium">{pub.conference}</p>
                      <p className="text-xs text-muted-foreground">{pub.publisher}</p>
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-full">{pub.year}</span>
                        {pub.doi && (
                          <Link
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                          >
                            View Publication <ExternalLink className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground/80 italic">Authors: {pub.authors}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Honors & Awards Section */}
      <Section id="honors">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Recognition</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading">
              Honors & Awards
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {HonorsAndAwards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/5 rounded-full" />
                  <div className="flex items-start gap-4 relative">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-bold text-foreground">{award.title}</h3>
                        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-full w-fit">{award.date}</span>
                      </div>
                      <p className="text-sm text-primary font-medium">{award.institution}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Extra-Curricular Section */}
      <Section id="extra">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Beyond the Desk</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading">
              Extra-Curricular
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {ExtraCurricular.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/5 rounded-full" />
                  <div className="flex items-start gap-4 relative">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-full w-fit">{item.date}</span>
                      </div>
                      <p className="text-sm text-primary font-medium">{item.organization}</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <ProjectsSection />
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SkillsSection skills={Skills} />
      </Section>

      <Footer />
    </main>
  );
}
