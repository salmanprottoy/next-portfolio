"use client";
import { Button, Text, Flex } from "@/components/atoms";
import CirclesSVG from "@/components/atoms/CircleSVG";
import TypingEffect from "@/components/molecules/TypingEffect";
import Header from "@/components/organisms/Header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [prefix, setPrefix] = useState("");

  useEffect(() => {
    const isGitHubPages =
      window.location.hostname.includes("github.io") ||
      window.location.pathname.startsWith("/next-portfolio");

    setPrefix(isGitHubPages ? "/next-portfolio" : "");
  }, []);
  return (
    <main className="bg-primary md:px-[120px] py-6 w-full h-screen bg-circles">
      <Header />
      <CirclesSVG className="absolute z-0 top-0 left-0 w-full h-full" />
      <Flex
        direction="column"
        align="center"
        gap="none"
        className="w-full relative top-[160px] z-10"
      >
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
        <Flex direction="row" justify="center" className="w-full">
          <Button>Experience</Button>
          <Button>Skills</Button>
          <Button>Projects</Button>
          <Button>About</Button>
        </Flex>
      </Flex>
    </main>
  );
}
