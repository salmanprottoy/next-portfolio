import { Button } from "@/components/atoms/display/Button";
import { Text } from "@/components/atoms/typography/Text";
import { Flex } from "@/components/atoms/layouts/Flex";
import Header from "@/components/organism/navigation/Header";
import TypingEffect from "@/components/TypingEffect";
import Image from "next/image";
import CirclesSVG from "@/components/CirclesSVG";
export default function Home() {
  return (
    <main className="bg-primary md:px-[120px] py-6 w-full h-screen bg-circles">
      <Header />
      <CirclesSVG className="absolute z-0 top-0 left-0 w-full h-full" />
      <Flex
        direction="row"
        alignItems="center"
        gap="0px"
        className="w-full relative top-[160px] z-10"
      >
        <Flex direction="row" justifyContent="center" className="w-full pb-6">
          <Image
            src={"/images/salmanprottoy.jpg"}
            width={120}
            height={120}
            alt="Salman Prottoy"
            className="rounded-full"
          />
        </Flex>
        <Flex direction="row" justifyContent="center" className="w-full">
          <Text
            text="Software Engineer"
            className="font-karla text-[26px] uppercase text-tertiary tracking-widest"
          />
        </Flex>
        <Flex direction="row" justifyContent="center" className="w-full pb-8">
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
        <Flex direction="row" justifyContent="center" className="w-full">
          <Button>Experience</Button>
          <Button>Skills</Button>
          <Button>Projects</Button>
          <Button>About</Button>
        </Flex>
      </Flex>
    </main>
  );
}
