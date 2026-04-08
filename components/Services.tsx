"use client";

import type { Service } from "@/lib/queries";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Code2, Cpu, DatabaseZap, Server } from "lucide-react";
import { useMemo } from "react";

type ServicesProps = {
  services: Service[];
};

type ServiceKind = "web" | "scraping" | "backend" | "automation";

function normalizeKind(service: Service): ServiceKind {
  const title = service.title.toLowerCase();
  const icon = service.icon.toLowerCase();
  const text = `${title} ${icon}`;
  if (text.includes("scrap") || text.includes("extract") || text.includes("data")) return "scraping";
  if (text.includes("backend") || text.includes("api") || text.includes("server")) return "backend";
  if (text.includes("automation") || text.includes("script") || text.includes("workflow")) return "automation";
  return "web";
}

const iconByKind = {
  web: Code2,
  scraping: DatabaseZap,
  backend: Server,
  automation: Cpu
} as const;

const deliverablesByKind: Record<ServiceKind, readonly string[]> = {
  web: ["Responsive UI", "Auth & dashboards", "Deploy-ready builds"],
  scraping: ["Custom parsers", "Headless browsing", "Data structuring"],
  backend: ["REST APIs", "Database integration", "Validation & security"],
  automation: ["Workflow scripts", "Task scheduling", "Integration glue"]
};

const tagsByKind: Record<ServiceKind, readonly string[]> = {
  web: ["Next.js", "React", "Tailwind", "Supabase"],
  scraping: ["Python", "BeautifulSoup", "Selenium", "SQL"],
  backend: ["Python", "Django", "Postman", "SQL"],
  automation: ["Python", "APIs", "Automation", "CLI tools"]
};

function ServiceFeatureCard({ service }: { service: Service }) {
  const kind = normalizeKind(service);
  const Icon = iconByKind[kind];
  const deliverables = deliverablesByKind[kind];
  const tags = tagsByKind[kind];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, color-mix(in oklab, var(--accent) 18%, transparent), transparent 60%)`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.21, 1, 0.21, 1] }}
      onPointerMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      className={[
        "group relative overflow-hidden rounded-2xl border border-slate-800/70 p-6",
        "bg-[var(--surface)]/25 backdrop-blur-xl",
        "shadow-[0_18px_55px_rgba(0,0,0,0.18)]",
        "transition duration-300 ease-out",
        "hover:[border-color:color-mix(in_oklab,var(--accent)_55%,rgba(15,23,42,1))] hover:shadow-[0_22px_70px_color-mix(in_oklab,var(--accent)_18%,transparent)]"
      ].join(" ")}
    >
      <motion.div
        style={{ backgroundImage: bg }}
        className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)]/14 text-[var(--accent)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_20%,transparent),0_18px_40px_color-mix(in_oklab,var(--accent)_14%,transparent)]">
            <motion.div whileHover={{ rotate: kind === "backend" ? 6 : 0, y: -1 }} transition={{ duration: 0.18 }}>
              <Icon size={18} />
            </motion.div>
          </div>

          <span className="font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            solution_arch
          </span>
        </div>

        <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.description}</p>

        <div className="mt-5">
          <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
            key deliverables
          </p>
          <ul className="mt-3 grid gap-2">
            {deliverables.map((d) => (
              <li key={d} className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                <span className="text-[var(--accent)]">[✓]</span> {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] ring-1 ring-slate-800/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/contact#contact"
            className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] hover:text-[var(--accent)]"
          >
            Inquire → Start a project
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services({ services }: ServicesProps) {
  const ordered = useMemo(() => {
    const list = [...services];
    list.sort((a, b) => normalizeKind(a).localeCompare(normalizeKind(b)));
    return list;
  }, [services]);

  const isEmpty = services.length === 0;

  return (
    <section id="services" className="section-shell console-grid relative">
      <svg className="network-lines" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden>
        <path d="M90 130 C 240 40, 340 230, 520 160 S 820 120, 980 210 S 1140 300, 1190 220" />
        <path d="M40 430 C 210 300, 390 540, 560 420 S 860 360, 1040 520 S 1160 650, 1220 560" />
        <path d="M150 640 C 280 540, 430 660, 590 590 S 860 520, 1030 610 S 1160 670, 1210 640" />
      </svg>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="muted-label">Services</p>
          <h2 className="section-title mt-3">Solution Architecture</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Modular offerings designed for clean delivery, technical depth, and real-world constraints.
          </p>
        </div>
      </div>

      {isEmpty ? (
        <div className="mt-10 terminal-shell">
          <div className="terminal-topbar">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <div className="flex min-w-0 flex-col text-center">
              <span className="truncate text-[11px] tracking-[0.18em] text-[var(--text)]/80">
                services.log
              </span>
              <span className="truncate font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                status
              </span>
            </div>
            <div className="w-10" />
          </div>
          <div className="terminal-body">
            <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              NO DATA: services table is empty. Add rows in Supabase to populate this gallery
              <span className="blink-underscore">_</span>
            </p>
          </div>
        </div>
      ) : (
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {ordered.map((service) => (
            <motion.div
              key={service.id}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              className="md:col-span-4"
            >
              <ServiceFeatureCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
