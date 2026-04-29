import Link from 'next/link';

interface CTAAction {
  label: string;
  href: string;
  external?: boolean;
}

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: CTAAction;
  secondary?: CTAAction;
}) {
  return (
    <section className="border-border/50 bg-muted/10 space-y-6 rounded-lg border px-6 py-12 text-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-balance">{title}</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {primary.external ? (
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-accent rounded-full px-8 py-3 font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            {primary.label}
          </a>
        ) : (
          <Link
            href={primary.href}
            className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-accent rounded-full px-8 py-3 font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            {primary.label}
          </Link>
        )}
        {secondary ? (
          secondary.external ? (
            <a
              href={secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-muted/50 hover:bg-muted focus-visible:ring-accent rounded-full border px-8 py-3 font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              {secondary.label}
            </a>
          ) : (
            <Link
              href={secondary.href}
              className="border-border bg-muted/50 hover:bg-muted focus-visible:ring-accent rounded-full border px-8 py-3 font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              {secondary.label}
            </Link>
          )
        ) : null}
      </div>
    </section>
  );
}
