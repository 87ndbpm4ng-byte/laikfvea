export function AbstractScene({ label, compact = false }: { label: string; compact?: boolean }) {
  const orbitSize = compact ? "h-28 w-28" : "h-44 w-44";
  const bottleHeight = compact ? "h-48" : "h-72";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-12 w-2/3 -translate-x-1/2 rounded-full bg-ink/7 blur-2xl" />
      <div className="absolute inset-x-8 bottom-8 top-8 rounded-[36px] border border-white/90 bg-panel/55" />
      <div className="absolute left-1/2 top-1/2 h-px w-4/5 -translate-x-1/2 bg-ink/6" />
      <div className="absolute left-1/2 top-1/2 w-3/5 -translate-x-1/2 rounded-full border border-ink/8" />
      <div
        className={`absolute left-1/2 top-1/2 ${orbitSize} -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40`}
      />
      <div
        className={`absolute left-1/2 top-1/2 ${bottleHeight} w-20 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-ink/12 bg-white/70 shadow-[0_18px_50px_rgba(28,28,28,0.055)]`}
      >
        <div className="mx-auto mt-5 h-6 w-12 rounded-full border border-ink/10 bg-white" />
        <div className="absolute inset-x-5 bottom-8 h-10 rounded-full bg-accent/18" />
      </div>
      <p className="absolute bottom-7 left-8 text-xs font-semibold uppercase tracking-[0.18em] text-muted/70">
        {label}
      </p>
    </div>
  );
}
