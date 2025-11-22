"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Section from "@/components/ui/Section";
import Timeline from "@/components/ui/Timeline";
import {
  Experience,
  Educations,
  Projects,
  Skills,
  AboutMe,
  contact,
  ResearchExperience,
  Publications,
  HonorsAndAwards,
} from "@/app/data/Data";


export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      <Header />

      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`}
              alt="Md. Salman Hossan Prottoy"
              fill
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
              Md. Salman Hossan Prottoy
            </motion.h1>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground font-light"
            >
              <span>Software Engineer</span>
              <span className="hidden md:inline text-primary">•</span>
              <span>AI Researcher</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mt-4"
          >
            <Link
              href={`mailto:${contact.email}`}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full border border-border hover:bg-secondary/50 transition-colors font-medium"
            >
              View Work
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {AboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-card">
               {/* Placeholder for a more abstract or different image if desired, using profile for now */}
               <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`}
                  alt="About Me"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software engineering and research.
            </p>
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
      <Section id="education" className="bg-secondary/30">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Education</h2>
          </div>
          
          <Timeline
            items={Educations.map((edu) => ({
              title: edu.exam,
              subtitle: edu.institution,
              date: edu.year,
            }))}
          />
        </div>
      </Section>

       {/* Research Section */}
       <Section id="research">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Research</h2>
          </div>
          
          <Timeline
            items={ResearchExperience.map((res) => ({
              title: res.title,
              subtitle: res.institution,
              date: res.date,
              description: res.bullets,
            }))}
          />
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" className="bg-secondary/30">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Publications</h2>
          </div>

          <Timeline
            items={Publications.map((pub) => ({
              title: pub.title,
              subtitle: pub.conference,
              date: pub.year,
              description: [
                `Authors: ${pub.authors}`,
                pub.publisher,
                pub.doi ? (
                  <Link
                    key="doi"
                    href={pub.doi}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    View Publication <ExternalLink className="w-3 h-3" />
                  </Link>
                ) : null,
              ].filter(Boolean) as (string | React.ReactNode)[],
            }))}
          />
        </div>
      </Section>

      {/* Honors & Awards Section */}
      <Section id="honors">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Honors & Awards</h2>
          </div>
          
          <Timeline
            items={HonorsAndAwards.map((award) => ({
              title: award.title,
              subtitle: award.institution,
              date: award.date,
              description: [award.description],
            }))}
          />
        </div>
      </Section>


      {/* Skills Section */}
      <Section id="skills" className="bg-secondary/30">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {Skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default"
              >
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Featured Projects</h2>
            <p className="text-muted-foreground">A selection of my work.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.imageDetails.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.repo && (
                      <Link
                        href={project.repo}
                        target="_blank"
                        className="p-2 rounded-full bg-background text-foreground hover:text-primary transition-colors"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="p-2 rounded-full bg-background text-foreground hover:text-primary transition-colors"
                        title="View Live"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.content.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                    {project.content.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.content.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
