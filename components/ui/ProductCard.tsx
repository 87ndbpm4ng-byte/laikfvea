import { ArrowButton } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

export function ProductCard({
  name,
  image,
  alt,
  intro,
  copy,
  cta,
  href,
  points
}: {
  name: string;
  image: string;
  alt: string;
  intro: string;
  copy: string;
  cta: string;
  href: string;
  points: string[];
}) {
  return (
    <article
      id={name.toLowerCase()}
      className="group grid overflow-hidden rounded-brand border border-ink/5 bg-white shadow-[0_32px_100px_rgba(28,28,28,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_110px_rgba(28,28,28,0.095)] sm:grid-cols-[1.08fr_0.92fr]"
    >
      <div className="relative min-h-[560px] overflow-visible bg-[#F7F8F8] sm:min-h-[800px]">
        <div className="absolute inset-x-8 bottom-10 top-14 rounded-[48px] bg-accent/10 blur-3xl" />
        <div className="absolute bottom-12 left-1/2 h-14 w-3/5 -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />
        <ProductImage
          src={image}
          alt={alt}
          className="scale-[1.16] transition duration-500 group-hover:scale-[1.19]"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
      <div className="flex flex-col p-9 sm:p-12 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Laikfvea</p>
        <h3 className="mt-5 text-5xl font-semibold text-ink">{name}</h3>
        <p className="mt-5 text-xl font-semibold text-ink">{intro}</p>
        <p className="mt-4 text-sm leading-7 text-muted">{copy}</p>
        <ul className="mt-8 grid gap-3 text-sm text-muted">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-9">
          <ArrowButton href={href}>{cta}</ArrowButton>
        </div>
      </div>
    </article>
  );
}
