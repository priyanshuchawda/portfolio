export function StatsGrid({
  stats,
}: {
  stats: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2">
          <div className="text-foreground text-4xl font-black">
            {stat.value}
          </div>
          <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
