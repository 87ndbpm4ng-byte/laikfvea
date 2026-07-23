import fs from "node:fs";
import path from "node:path";

function getManualImages(folder: "go" | "pro") {
  const manualDirectory = path.join(process.cwd(), "public", "manuals", folder);

  return fs
    .readdirSync(manualDirectory)
    .filter((file) => /\.jpe?g$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/manuals/${folder}/${file}`);
}

export function UserManualPage({ title, folder }: { title: string; folder: "go" | "pro" }) {
  const images = getManualImages(folder);

  return (
    <div className="bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Everything you need to get started with your Laikfvea bottle.
        </p>
      </section>

      <section className="mx-auto mt-20 flex max-w-[900px] flex-col gap-20" aria-label={`${title} pages`}>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${title} page ${index + 1}`}
            className="mx-auto block h-auto w-full max-w-[900px]"
          />
        ))}
      </section>
    </div>
  );
}
