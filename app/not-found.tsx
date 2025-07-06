import { Metadata } from "next";
import Link from "next/link";
import { Button, Text, Flex } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Page Not Found - Md. Salman Hossan Prottoy",
  description:
    "The page you're looking for doesn't exist. Return to Md. Salman Hossan Prottoy's portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center">
        <Text
          variant="heading-lg"
          weight="bold"
          color="tertiary"
          className="mb-4 text-6xl"
        >
          404
        </Text>
        <Text
          variant="heading-lg"
          weight="medium"
          color="secondary"
          className="mb-6"
        >
          Page Not Found
        </Text>
        <Text
          variant="body-lg"
          color="secondary"
          className="mb-8 max-w-md mx-auto"
        >
          The page you&apos;re looking for doesn&apos;t exist. It might have
          been moved, deleted, or you entered the wrong URL.
        </Text>
        <Flex direction="column" gap="md" align="center">
          <Link href="/">
            <Button size="lg" shape="pill" variant="primary">
              Go Back Home
            </Button>
          </Link>
          <Link href="/#projects">
            <Button size="lg" shape="pill" variant="outline">
              View My Projects
            </Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
}
