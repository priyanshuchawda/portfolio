import type { ReactNode } from 'react';

export function CapabilityCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="border-border bg-muted/20 space-y-4 rounded-lg border p-6">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
