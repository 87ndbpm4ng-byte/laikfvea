import { navItems } from "@/content/navigation";
import { AmazonButton } from "@/components/ui/Button";

export function MobileMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-x-0 top-20 min-h-[calc(100vh-5rem)] border-t border-ink/5 bg-white px-6 pb-7 pt-2 lg:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="rounded-brand px-2 py-4 text-lg font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
            onClick={onNavigate}
          >
            {item.label}
          </a>
        ))}
        <div className="pt-3">
          <AmazonButton />
        </div>
      </div>
    </div>
  );
}
