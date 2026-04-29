export function PageHeader({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <header className="space-y-4">
      {eyebrow ? (
        <p className="text-accent font-mono text-sm tracking-widest uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-bold text-balance md:text-5xl">{title}</h1>
      <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
        {description}
      </p>
    </header>
  );
}
