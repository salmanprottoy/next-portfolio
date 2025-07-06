"use client";
import { WorkExperienceCard } from "@/components/molecules/WorkExperienceCard";
import { Button, Text, Flex, SkillBadge } from "@/components/atoms";
import TypingEffect from "@/components/molecules/TypingEffect";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import Header from "@/components/organisms/Header";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
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
import Icon from "@/components/atoms/Icon";

export default function Home() {
  const [prefix, setPrefix] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [activeExperienceSlide, setActiveExperienceSlide] = useState(0);
  const [activeProjectsSlide, setActiveProjectsSlide] = useState(0);
  const experienceSwiperRef = useRef<any>(null);
  const projectsSwiperRef = useRef<any>(null);

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
      <main className="bg-primary w-full overflow-x-hidden" role="main">
        <div className=" px-8 md:px-[120px] py-6">
          <Header />
        </div>

        {/* Dot Navigation */}
        <nav
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
          aria-label="Page navigation"
        >
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
                aria-label={`Navigate to ${section.label} section`}
                aria-current={activeSection === section.id ? "page" : undefined}
              />
            ))}
          </Flex>
        </nav>

        {/* Section 1: Hero */}
        <section
          id="hero"
          className="h-screen flex items-center justify-center bg-primary relative"
          aria-labelledby="hero-heading"
        >
          {/* Mail Icon in top right */}
          <a
            href={`mailto:${contact.email}`}
            className="absolute bottom-[7.5rem] right-8 md:right-[5rem] z-20 p-2 rounded-lg bg-dark/40 hover:bg-dark/70 transition"
            title={contact.text}
            aria-label="Send email to Salman Prottoy"
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
              aria-hidden="true"
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
                alt="Salman Prottoy - Software Engineer and Web Developer"
                className="rounded-full"
                priority
              />
            </Flex>
            <Flex direction="row" justify="center" className="w-full pb-2">
              <Text
                variant="body-lg"
                weight="medium"
                color="tertiary"
                className="font-karla uppercase tracking-widest"
                id="hero-heading"
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
              role="group"
              aria-label="Navigation buttons"
            >
              <Button
                size="xl"
                shape="pill"
                variant={activeSection === "experience" ? "outline" : "primary"}
                onClick={() => scrollToSection("experience")}
                aria-label="View work experience"
              >
                Experience
              </Button>
              <Button
                size="xl"
                shape="pill"
                variant={activeSection === "skills" ? "outline" : "primary"}
                onClick={() => scrollToSection("skills")}
                aria-label="View technical skills"
              >
                Skills
              </Button>
              <Button
                size="xl"
                shape="pill"
                variant={activeSection === "projects" ? "outline" : "primary"}
                onClick={() => scrollToSection("projects")}
                aria-label="View projects"
              >
                Projects
              </Button>
              <Button
                size="xl"
                shape="pill"
                variant={activeSection === "about" ? "outline" : "primary"}
                onClick={() => scrollToSection("about")}
                aria-label="Learn more about Salman"
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
                onSwiper={(swiper) => (experienceSwiperRef.current = swiper)}
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides={true}
                style={{ paddingBottom: 24 }}
                onSlideChange={(swiper) =>
                  setActiveExperienceSlide(swiper.activeIndex)
                }
              >
                {Experience.map((exp, index) => (
                  <SwiperSlide key={index}>
                    <WorkExperienceCard
                      jobTitle={exp.jobTitle}
                      company={exp.company}
                      date={exp.date}
                      bullets={exp.bullets}
                      active={activeExperienceSlide === index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {Experience.length >= 2 && (
                <div className="flex justify-center mt-5">
                  {Experience.map((_, idx) => {
                    let show = false;
                    if (Experience.length <= 3) show = true;
                    else if (
                      idx === activeExperienceSlide ||
                      (activeExperienceSlide === 0 && idx < 3) ||
                      (activeExperienceSlide === Experience.length - 1 &&
                        idx >= Experience.length - 3) ||
                      (idx >= activeExperienceSlide - 1 &&
                        idx <= activeExperienceSlide + 1)
                    )
                      show = true;
                    if (!show) return null;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          experienceSwiperRef.current?.slideTo(idx);
                          setActiveExperienceSlide(idx);
                        }}
                        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                          activeExperienceSlide === idx
                            ? "bg-white scale-125"
                            : "bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            {/* Desktop: Swiper with 2 cards at a time, left card active */}
            <div className="hidden md:block w-full overflow-hidden">
              <Swiper
                onSwiper={(swiper) => (experienceSwiperRef.current = swiper)}
                spaceBetween={24}
                slidesPerView={2}
                style={{ paddingBottom: 24 }}
                onSlideChange={(swiper) =>
                  setActiveExperienceSlide(swiper.activeIndex)
                }
              >
                {Experience.map((exp, index) => (
                  <SwiperSlide key={index}>
                    <WorkExperienceCard
                      jobTitle={exp.jobTitle}
                      company={exp.company}
                      date={exp.date}
                      bullets={exp.bullets}
                      active={activeExperienceSlide === index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {Experience.length > 2 && (
                <div className="flex justify-center mt-5 pb-2">
                  {Experience.map((_, idx) => {
                    let show = false;
                    if (Experience.length <= 3) show = true;
                    else if (
                      idx === activeExperienceSlide ||
                      (activeExperienceSlide === 0 && idx < 3) ||
                      (activeExperienceSlide === Experience.length - 1 &&
                        idx >= Experience.length - 3) ||
                      (idx >= activeExperienceSlide - 1 &&
                        idx <= activeExperienceSlide + 1)
                    )
                      show = true;
                    if (!show) return null;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          experienceSwiperRef.current?.slideTo(idx);
                          setActiveExperienceSlide(idx);
                        }}
                        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                          activeExperienceSlide === idx
                            ? "bg-white scale-125"
                            : "bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    );
                  })}
                </div>
              )}
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
                  return (
                    <SkillBadge
                      key={idx}
                      icon={
                        <Icon
                          name={
                            skill.icon as import("@/components/atoms/Icon").IconName
                          }
                          className="w-6 h-6 text-black group-hover:text-white transition-colors"
                        />
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
                onSwiper={(swiper) => (projectsSwiperRef.current = swiper)}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{ 768: { slidesPerView: 3 } }}
                style={{ paddingBottom: 24 }}
                onSlideChange={(swiper) =>
                  setActiveProjectsSlide(swiper.activeIndex)
                }
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
              {Projects.length >= 4 && (
                <div className="flex justify-center mt-6 pb-2">
                  {Projects.map((_, idx) => {
                    let show = false;
                    if (Projects.length <= 3) show = true;
                    else if (
                      idx === activeProjectsSlide ||
                      (activeProjectsSlide === 0 && idx < 3) ||
                      (activeProjectsSlide === Projects.length - 1 &&
                        idx >= Projects.length - 3) ||
                      (idx >= activeProjectsSlide - 1 &&
                        idx <= activeProjectsSlide + 1)
                    )
                      show = true;
                    if (!show) return null;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          projectsSwiperRef.current?.slideTo(idx);
                          setActiveProjectsSlide(idx);
                        }}
                        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                          activeProjectsSlide === idx
                            ? "bg-white scale-125"
                            : "bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </Flex>
        </section>

        {/* Section 5: About */}
        <section
          id="about"
          className="min-h-screen px-5 md:px-[120px] py-6 flex items-center justify-center bg-primary"
        >
          <Flex direction="column" align="center" className="w-full">
            <Text
              variant="heading-lg"
              weight="bold"
              color="light"
              className="text-center mb-8"
            >
              About Me
            </Text>
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
              <div className="flex-1 md:text-left">
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
          </Flex>
        </section>
      </main>
      <Footer />
    </>
  );
}
