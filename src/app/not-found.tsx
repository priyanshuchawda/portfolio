import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-accent font-mono text-8xl font-black tracking-tighter md:text-9xl">
            404
          </h1>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Page not found
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md text-lg leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-4 font-bold transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/#projects"
            className="border-border bg-muted/50 hover:bg-muted rounded-full border px-8 py-4 font-bold transition-all"
          >
            View Projects
          </Link>
        </div>

        <p className="text-muted-foreground text-sm">
          Or use the command palette{' '}
          <kbd className="border-border bg-muted rounded-md border px-2 py-1 font-mono text-xs">
            Ctrl+K
          </kbd>{' '}
          to navigate.
        </p>
      </div>
    </main>
  );
}
