/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-6 text-center antialiased">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-accent font-mono text-6xl font-black md:text-8xl">
              Oops
            </h1>
            <h2 className="text-2xl font-bold text-balance md:text-3xl">
              Something went wrong
            </h2>
            <p className="text-muted-foreground mx-auto max-w-md text-lg leading-relaxed">
              An unexpected error occurred. Don&apos;t worry, you can try again.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => reset()}
              className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-accent rounded-full px-8 py-4 font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Try Again
            </button>
            <a
              href="/"
              className="border-border bg-muted/50 hover:bg-muted focus-visible:ring-accent rounded-full border px-8 py-4 font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
