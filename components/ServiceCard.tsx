import type { Service } from "@/lib/queries";
import { Code2, Database, Server, Wrench } from "lucide-react";

const iconMap = {
  Code: Code2,
  Database,
  Server,
  Zap: Wrench
} as const;

export default function ServiceCard({ service }: { service: Service }) {
  const ServiceIcon =
    iconMap[service.icon as keyof typeof iconMap] ?? Wrench;

  return (
    <article className="bento-tile md:col-span-3">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-[var(--accent)]">
        <ServiceIcon size={18} />
      </div>
      <h3 className="mt-3 section-title text-2xl md:text-3xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{service.description}</p>
    </article>
  );
}
