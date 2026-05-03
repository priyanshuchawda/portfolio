import Link from 'next/link';

export function StatsGrid({
  stats,
}: {
  stats: ReadonlyArray<{ value: string; label: string; href?: string }>;
}) {
  return (
    <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
      {stats.map((stat) => {
        const content = (
          <>
            <div className="text-foreground text-4xl font-black">
              {stat.value}
            </div>
            <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              {stat.label}
            </div>
          </>
        );

        if (!stat.href) {
          return (
            <div key={stat.label} className="space-y-2">
              {content}
            </div>
          );
        }

        const className =
          'focus-visible:ring-accent block space-y-2 rounded-lg transition-colors hover:bg-muted/30 focus-visible:ring-2 focus-visible:outline-none';

        return stat.href.startsWith('/') ? (
          <Link key={stat.label} href={stat.href} className={className}>
            {content}
          </Link>
        ) : (
          <a
            key={stat.label}
            href={stat.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
