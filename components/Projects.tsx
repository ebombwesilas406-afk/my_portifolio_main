"use client";

import type { Project } from "@/lib/queries";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ExternalLink, Link as LinkIcon } from "lucide-react";
import { useMemo, useState } from "react";

type ProjectsProps = {
  projects: Project[];
};

type Category = "All" | "Web Apps" | "Automation" | "Python/Django";

const categories: readonly Category[] = ["All", "Web Apps", "Automation", "Python/Django"];

function splitTags(value: string) {
  return value
    .split(/[,\u2022|/]/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

function inferCategory(project: Project): Exclude<Category, "All"> {
  const haystack = `${project.title} ${project.description} ${project.tech_stack}`.toLowerCase();
  if (haystack.includes("django") || haystack.includes("python")) return "Python/Django";
  if (
    haystack.includes("scrap") ||
    haystack.includes("automation") ||
    haystack.includes("beautifulsoup") ||
    haystack.includes("selenium") ||
    haystack.includes("pipeline")
  )
    return "Automation";
  return "Web Apps";
}

function highlightFor(project: Project) {
  const title = project.title.toLowerCase();
  const tech = project.tech_stack.toLowerCase();
  if (title.includes("rental")) return "Integrated M-Pesa-ready billing workflows.";
  if (title.includes("spider") || tech.includes("beautifulsoup")) return "Scraped and cleaned large datasets with repeatable pipelines.";
  if (title.includes("jarvis") || tech.includes("automation")) return "Built task automations and API-driven actions.";
  if (title.includes("school") || title.includes("sms")) return "Designed admin workflows for records and operations.";
  if (title.includes("e-commerce") || title.includes("shop")) return "Implemented cart + order flow with clean data modeling.";
  if (title.includes("portfolio") || tech.includes("next")) return "Optimized UI + data layer with Supabase-backed content.";
  return "Focused on reliability, clarity, and practical engineering trade-offs.";
}

function isFeatured(project: Project) {
  return /rental|management system/i.test(project.title);
}

type TileSize = "featured" | "half" | "third";

function tileSizeForIndex(count: number, index: number, allowFeatured: boolean): TileSize {
  if (count <= 1) return "featured";
  if (count === 2) return "half";
  if (count === 4) return "half";
  if (allowFeatured && count >= 5 && index === 0) return "featured";
  return "third";
}

function tileClassName(size: TileSize) {
  if (size === "featured") return "md:col-span-7 md:row-span-2";
  if (size === "half") return "md:col-span-6";
  return "md:col-span-4";
}

function ProjectTile({
  project,
  featured,
  size
}: {
  project: Project;
  featured: boolean;
  size: TileSize;
}) {
  const tags = useMemo(() => splitTags(project.tech_stack), [project.tech_stack]);
  const highlight = useMemo(() => highlightFor(project), [project]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: [0.21, 1, 0.21, 1] }}
      className={[
        "group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-[var(--surface)]/35 p-5 backdrop-blur-lg",
        "shadow-[0_18px_55px_rgba(0,0,0,0.18)]",
        "hover:[border-color:color-mix(in_oklab,var(--accent)_55%,rgba(15,23,42,1))] hover:shadow-[0_22px_70px_color-mix(in_oklab,var(--accent)_18%,transparent)]",
        tileClassName(size)
      ].join(" ")}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_10%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="muted-label">Project Archive</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.github_url ?? undefined}
              target={project.github_url ? "_blank" : undefined}
              rel={project.github_url ? "noreferrer" : undefined}
              aria-disabled={!project.github_url}
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-[var(--surface-border)]",
                "bg-white/5 text-[var(--muted)] transition duration-300 ease-out hover:text-[var(--accent)] hover:bg-white/10",
                project.github_url ? "" : "pointer-events-none opacity-40"
              ].join(" ")}
              title="GitHub"
            >
              <LinkIcon size={18} />
            </a>
            <a
              href={project.live_url ?? undefined}
              target={project.live_url ? "_blank" : undefined}
              rel={project.live_url ? "noreferrer" : undefined}
              aria-disabled={!project.live_url}
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-[var(--surface-border)]",
                "bg-white/5 text-[var(--muted)] transition duration-300 ease-out hover:text-[var(--accent)] hover:bg-white/10",
                project.live_url ? "" : "pointer-events-none opacity-40"
              ].join(" ")}
              title="External Link"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </header>

        <div className="relative overflow-hidden rounded-2xl ring-1 ring-[var(--surface-border)]">
          <div className="flex items-center gap-2 border-b border-slate-800/50 bg-black/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 truncate font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              {project.title.replace(/\s+/g, "_").toLowerCase()}.png
            </span>
          </div>

          {project.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image_url}
              alt={`${project.title} screenshot`}
              className="h-44 w-full object-cover grayscale transition duration-500 ease-out group-hover:grayscale-0 md:h-56"
              loading="lazy"
            />
          ) : (
            <div className="flex h-44 w-full items-center justify-center bg-[radial-gradient(500px_circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)] md:h-56">
              <span className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                screenshot pending
              </span>
            </div>
          )}
        </div>

        <p className="text-sm leading-6 text-[var(--muted)]">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, featured ? 8 : 6).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] ring-1 ring-[var(--surface-border)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-1 overflow-hidden">
          <p className="translate-y-3 text-[12px] leading-6 text-[var(--muted)] opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-ui uppercase tracking-[0.18em] text-[var(--accent)]">
              Technical highlight:
            </span>{" "}
            {highlight}
          </p>
        </div>

        <Link
          href={`/projects#project-${project.id}`}
          className="mt-1 w-fit font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] hover:text-[var(--accent)]"
        >
          Open record →
        </Link>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const [active, setActive] = useState<Category>("All");

  const normalized = useMemo(() => {
    const featuredFirst = [...projects];
    featuredFirst.sort((a, b) => Number(isFeatured(b)) - Number(isFeatured(a)));
    return featuredFirst;
  }, [projects]);

  const filtered = useMemo(() => {
    if (active === "All") return normalized;
    return normalized.filter((p) => inferCategory(p) === active);
  }, [active, normalized]);

  const featuredId = useMemo(() => {
    const explicit = normalized.find((p) => isFeatured(p))?.id;
    return explicit ?? normalized[0]?.id ?? -1;
  }, [normalized]);

  const allowFeatured = active === "All" && filtered.length >= 5;

  return (
    <section id="projects" className="section-shell console-grid">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="muted-label">Projects</p>
          <h2 className="section-title mt-3">Project Archive</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Practical systems, utilities, and experiments—organized for quick scanning and deeper inspection.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:grid-cols-none sm:auto-cols-max sm:grid-flow-col sm:gap-2 md:justify-end">
          {categories.map((cat) => {
            const selected = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={[
                  "font-ui text-[10px] uppercase tracking-[0.22em] transition duration-300 ease-out sm:text-[11px]",
                  "h-10 rounded-full px-3 ring-1 ring-[var(--surface-border)] backdrop-blur-md sm:px-4",
                  "flex items-center justify-center whitespace-nowrap",
                  selected
                    ? "bg-[var(--accent)]/18 text-[var(--accent)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_25%,transparent),0_18px_45px_color-mix(in_oklab,var(--accent)_15%,transparent)]"
                    : "bg-white/5 text-[var(--muted)] hover:bg-white/10 hover:text-[var(--accent)]"
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className="mt-10 grid gap-6 md:grid-cols-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } }
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectTile
                key={project.id}
                project={project}
                featured={project.id === featuredId}
                size={tileSizeForIndex(filtered.length, index, allowFeatured)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
