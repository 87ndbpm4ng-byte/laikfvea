export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children ? <div className="mt-6 text-base leading-8 text-muted sm:text-lg">{children}</div> : null}
    </div>
  );
}
