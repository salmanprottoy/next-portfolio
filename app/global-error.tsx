"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
        <main>
          <h1 className="text-balance text-2xl font-bold">Something went wrong!</h1>
          <p className="max-w-md text-muted-foreground">
            An unexpected error has occurred. Please try again or contact support if the issue persists.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="focus-ring command-button"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
