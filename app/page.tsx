"use client";
import { WorkExperienceCard } from "@/components/molecules/WorkExperienceCard";
import { Button, Text, Flex, SkillBadge, Grid } from "@/components/atoms";
import {
  TechIcon,
  ReactIcon,
  Javascript,
  Python,
  Nodejs,
  Firebase,
} from "@/components/atoms/Icon";
import CirclesSVG from "@/components/atoms/CircleSVG";
import TypingEffect from "@/components/molecules/TypingEffect";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import Header from "@/components/organisms/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "@/components/organisms/Footer";
import {
  Projects,
  Experience,
  AboutMe,
  Skills,
  contact,
} from "@/app/data/Data";
import * as Icons from "@/components/icons";

export default function Home() {
  const [prefix, setPrefix] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
  ];

  useEffect(() => {
    const isGitHubPages =
      window.location.hostname.includes("github.io") ||
      window.location.pathname.startsWith("/next-portfolio");

    setPrefix(isGitHubPages ? "/next-portfolio" : "");

    // Intersection Observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="bg-primary w-full overflow-x-hidden">
        <div className=" px-8 md:px-[120px] py-6">
          <Header />
        </div>

        {/* Dot Navigation */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
          <Flex direction="column" gap="md" align="center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-tertiary scale-125"
                    : "bg-tertiary/30 hover:bg-tertiary/60"
                }`}
                title={section.label}
              />
            ))}
          </Flex>
        </div>

        {/* Section 1: Hero */}
        <section
          id="hero"
          className="h-screen flex items-center justify-center bg-primary relative"
        >
          {/* Mail Icon in top right */}
          <a
            href={`mailto:${contact.email}`}
            className="absolute bottom-[7.5rem] right-8 md:right-[5rem] z-20 p-2 rounded-lg bg-dark/40 hover:bg-dark/70 transition"
            title={contact.text}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-tertiary"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </a>
          <Flex direction="column" align="center" gap="none" className="w-full">
            <Flex direction="row" justify="center" className="w-full pb-6">
              <Image
                src={`${prefix}/images/salmanprottoy.jpg`}
                width={120}
                height={120}
                alt="Salman Prottoy"
                className="rounded-full"
              />
            </Flex>
            <Flex direction="row" justify="center" className="w-full">
              <Text
                variant="body-lg"
                weight="medium"
                color="tertiary"
                className="font-karla uppercase tracking-widest"
              >
                Software Engineer
              </Text>
            </Flex>
            <Flex direction="row" justify="center" className="w-full pb-8">
              <TypingEffect
                text={[
                  "",
                  "MD.",
                  "MD. SALMAN",
                  "MD. SALMAN HOSSAN",
                  "MD. SALMAN HOSSAN PROTTOY",
                ]}
                speed={50}
              />
            </Flex>
            <Flex
              direction="column"
              justify="center"
              align="center"
              className="w-full gap-4 md:flex-row flex-wrap"
            >
              <Button
                size="xl"
                shape="pill"
                variant={activeSection === "experience" ? "outline" : "primary"}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </Button>
              <Button
                size="xl"
                shape="pill"
                variant={activeSection === "skills" ? "outline" : "primary"}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Button>
              <Button
                size="xl"
                shape="pill"
                variant={activeSection === "projects" ? "outline" : "primary"}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
              <Button
                size="xl"
                shape="pill"
                variant={activeSection === "about" ? "outline" : "primary"}
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
            </Flex>
          </Flex>
        </section>

        {/* Section 2: Experience */}
        <section
          id="experience"
          className="min-h-screen px-5 md:px-[120px] py-6 flex items-center justify-center bg-dark"
        >
          <Flex direction="column" align="center" className="w-full">
            <Text
              variant="heading-lg"
              weight="bold"
              color="light"
              className="text-center mb-8"
            >
              Work Experience
            </Text>
            {/* Mobile: Swiper with 1 card at a time */}
            <div className="block md:hidden w-full overflow-hidden">
              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides={true}
                style={{ paddingBottom: 24 }}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              >
                {Experience.map((exp, index) => (
                  <SwiperSlide key={index}>
                    <WorkExperienceCard
                      jobTitle={exp.jobTitle}
                      company={exp.company}
                      date={exp.date}
                      bullets={exp.bullets}
                      active={activeSlide === index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Desktop: Swiper with 2 cards at a time, left card active */}
            <div className="hidden md:block w-full overflow-hidden">
              <Swiper
                spaceBetween={24}
                slidesPerView={2}
                style={{ paddingBottom: 24 }}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              >
                {Experience.map((exp, index) => (
                  <SwiperSlide key={index}>
                    <WorkExperienceCard
                      jobTitle={exp.jobTitle}
                      company={exp.company}
                      date={exp.date}
                      bullets={exp.bullets}
                      active={activeSlide === index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Flex>
        </section>

        {/* Section 3: Skills */}
        <section
          id="skills"
          className="min-h-screen px-5 md:px-[120px] py-6 flex items-center justify-center bg-primary"
        >
          <Flex direction="column" align="center" className="w-full">
            <Text
              variant="heading-lg"
              weight="bold"
              color="light"
              className="text-center mb-8"
            >
              Skills
            </Text>
            <div className="w-full">
              <Flex direction="row" justify="center" gap="md" wrap="wrap">
                {Skills.map((skill, idx) => {
                  const IconComponent = Icons[skill.icon as keyof typeof Icons];
                  return (
                    <SkillBadge
                      key={idx}
                      icon={
                        IconComponent ? (
                          <IconComponent className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 rounded" />
                        )
                      }
                      label={skill.name}
                    />
                  );
                })}
              </Flex>
            </div>
          </Flex>
        </section>

        {/* Section 4: Projects */}
        <section
          id="projects"
          className="min-h-screen px-5 md:px-[120px] py-6 flex items-center justify-center bg-dark"
        >
          <Flex direction="column" align="center" className="w-full">
            <Text
              variant="heading-lg"
              weight="bold"
              color="light"
              className="text-center mb-8"
            >
              Projects
            </Text>
            <div className="w-full overflow-hidden">
              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 3 },
                }}
                style={{ paddingBottom: 24 }}
              >
                {Projects.map((project, idx) => (
                  <SwiperSlide key={idx}>
                    <ProjectCard
                      image={project.image}
                      title={project.content.title}
                      description={project.content.desc}
                      link={project.repo}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Flex>
        </section>

        {/* Section 5: About */}
        <section
          id="about"
          className="min-h-screen px-5 md:px-[120px] py-6 flex items-center justify-center bg-primary"
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            className="w-full max-w-5xl gap-10 md:gap-20 md:flex-row"
          >
            {/* Photo */}
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <Image
                src="/images/salmanprottoy.jpg"
                alt="Md. Salman Hossan Prottoy"
                width={288}
                height={288}
                className="w-72 h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* About Text */}
            <div className="flex-1 text-center md:text-left">
              <Text
                variant="heading-lg"
                weight="bold"
                color="light"
                className="mb-6"
              >
                About Me
              </Text>
              {AboutMe.map((para, idx) => (
                <div
                  key={idx}
                  className={
                    idx === 0
                      ? "text-light text-lg mb-4 leading-relaxed"
                      : "text-light leading-relaxed"
                  }
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </Flex>
        </section>
      </main>
      <Footer />
    </>
  );
}
