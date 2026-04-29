export default function Loading() {
  return (
    <div
      className="bg-background flex min-h-screen items-center justify-center"
      role="status"
      aria-label="Loading page content"
    >
      <div className="space-y-4 text-center">
        <div className="border-accent mx-auto h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
        <p className="text-muted-foreground font-mono text-sm">Loading…</p>
      </div>
    </div>
  );
}
