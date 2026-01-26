import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Section from "@/components/ui/Section";
import Timeline from "@/components/ui/Timeline";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import {
  Experience,
  Educations,
  Skills,
  AboutMe,
  contact,
  ResearchExperience,
  Publications,
  HonorsAndAwards,
} from "@/app/data/Data";

export default function Home() {
  const profileImageUrl = process.env.NEXT_PUBLIC_S3_BASE_URL
    ? `${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/salmanprottoy.jpg`
    : "/favicon.svg";

  return (
    <main className="bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      <Header />

      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32">
        <HeroSection
          name="Md. Salman Hossan Prottoy"
          titleA="Software Engineer"
          titleB="AI Researcher"
          imageUrl={profileImageUrl}
          imageAlt="Md. Salman Hossan Prottoy"
          contactEmail={contact.email}
        />
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {AboutMe.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-card">
              {/* Placeholder for a more abstract or different image if desired, using profile for now */}
              <Image
                src={profileImageUrl}
                alt="About Me"
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
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
      <Section id="education" className="bg-secondary/30">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Education
            </h2>
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Research
            </h2>
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Publications
            </h2>
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
                    rel="noopener noreferrer"
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Honors & Awards
            </h2>
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
        <SkillsSection skills={Skills} />
      </Section>

      <Footer />
    </main>
  );
}
