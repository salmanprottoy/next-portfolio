import { Metadata } from "next";
import Link from "next/link";

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
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold text-primary font-heading">404</h1>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            The page you&apos;re looking for doesn&apos;t exist. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
          >
            Go Back Home
          </Link>
          <Link 
            href="/#projects"
            className="px-8 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary/10 transition-colors"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
