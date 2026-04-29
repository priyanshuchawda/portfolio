import type { TimelineItem as TimelineItemType } from '@/data/profile';

export function Timeline({
  items,
}: {
  items: ReadonlyArray<TimelineItemType>;
}) {
  return (
    <div className="border-border relative ml-3 space-y-8 border-l pl-6">
      {items.map((item) => (
        <TimelineItem key={`${item.year}-${item.title}`} item={item} />
      ))}
    </div>
  );
}

function TimelineItem({ item }: { item: TimelineItemType }) {
  const isActive = 'active' in item && item.active;

  return (
    <div className="relative">
      <div
        className={`border-background absolute top-1 -left-[1.9375rem] h-4 w-4 rounded-full border-4 ${
          isActive ? 'bg-accent' : 'bg-muted-foreground'
        }`}
        aria-hidden="true"
      ></div>
      <div className="text-muted-foreground mb-1 font-mono text-sm">
        {item.year}
      </div>
      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
