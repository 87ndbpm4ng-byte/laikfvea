import Image from "next/image";

export function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  unoptimized = false
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  unoptimized?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      unoptimized={unoptimized}
      className={`object-contain drop-shadow-[0_28px_34px_rgba(28,28,28,0.12)] ${className}`}
    />
  );
}

export function ProductStage({
  src,
  alt,
  className = "",
  imageClassName = "scale-110",
  priority = false
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-brand ${className}`}>
      <div className="absolute inset-x-8 bottom-12 top-12 rounded-[48px] bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-14 w-3/5 -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />
      <ProductImage
        src={src}
        alt={alt}
        priority={priority}
        className={imageClassName}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}
