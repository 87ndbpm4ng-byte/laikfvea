export function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-brand bg-white p-7 shadow-soft">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{body}</p>
    </article>
  );
}
