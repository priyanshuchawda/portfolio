import { siteConfig } from '@/lib/site';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function FreshnessNote({
  date = siteConfig.lastUpdated,
}: {
  date?: string;
}) {
  return (
    <p className="text-muted-foreground text-sm">
      Last updated:{' '}
      <time dateTime={date}>{dateFormatter.format(new Date(date))}</time>
    </p>
  );
}
