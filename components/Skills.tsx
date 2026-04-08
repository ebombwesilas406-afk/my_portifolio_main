"use client";

import type { Skill } from "@/lib/queries";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  Braces,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Server,
  Settings2
} from "lucide-react";
import { useMemo, useState } from "react";

type SkillsProps = {
  skills: Skill[];
};

const skillDetails: Record<string, readonly string[]> = {
  Python: ["FastAPI", "NumPy", "Pandas"],
  JavaScript: ["Async/Await", "DOM APIs", "Fetch API"],
  SQL: ["Joins", "Indexes", "Constraints"],
  Django: ["DRF", "ORM", "Auth"],
  React: ["Hooks", "State", "Components"],
  Git: ["Branches", "PRs", "Merges"],
  "Backend Logic": ["Validation", "Error handling", "API design"],
  "Database Design": ["Schemas", "Relations", "Normalization"],
  "System Design": ["Trade-offs", "Scalability", "Architecture"]
};

function iconFor(name: string) {
  const key = name.toLowerCase();
  if (key.includes("python") || key.includes("c/")) return Cpu;
  if (key.includes("javascript")) return Braces;
  if (key.includes("sql") || key.includes("database")) return Database;
  if (key.includes("django") || key.includes("react")) return Layers;
  if (key.includes("git")) return GitBranch;
  if (key.includes("system")) return Settings2;
  if (key.includes("backend")) return Server;
  return Layers;
}

function clampLevel(level: number) {
  return Math.max(0, Math.min(5, level));
}

function SegmentedMasteryBar({ level, hovered }: { level: number; hovered: boolean }) {
  const safe = clampLevel(level);
  const blocks = Array.from({ length: 5 });

  return (
    <div className="flex items-center gap-1.5">
      {blocks.map((_, idx) => {
        const filled = idx < safe;
        return (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.28, delay: idx * 0.06, ease: [0.21, 1, 0.21, 1] }}
            className={[
              "h-2.5 w-2.5 rounded-[6px] ring-1 transition duration-300 ease-out sm:w-4",
              filled
                ? "bg-teal-500/70 ring-teal-400/40 shadow-[0_0_0_1px_rgba(20,184,166,0.18),0_14px_30px_rgba(20,184,166,0.14)]"
                : "bg-slate-800/50 ring-slate-700/50",
              hovered ? "[animation:block-shimmer_900ms_ease-in-out_infinite]" : ""
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

function SkillRow({
  skill,
  hovered,
  dimmed,
  onHover
}: {
  skill: Skill;
  hovered: boolean;
  dimmed: boolean;
  onHover: (id: number | null) => void;
}) {
  const Icon = iconFor(skill.name);
  const details = skill.details ?? skillDetails[skill.name] ?? [];

  return (
    <div
      onMouseEnter={() => onHover(skill.id)}
      onMouseLeave={() => onHover(null)}
      className={[
        "group relative rounded-xl px-3 py-3 transition duration-300 ease-out",
        "hover:bg-white/5",
        dimmed ? "opacity-45" : "opacity-100"
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-[var(--surface-border)]">
            <Icon size={18} className="text-[var(--muted)]" />
          </span>
          <span className="min-w-0 break-words font-ui text-[11px] uppercase tracking-[0.16em] text-[var(--text)]/85 sm:text-[12px] sm:tracking-[0.22em]">
            {skill.name}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="hidden font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] sm:inline">
            lvl: {clampLevel(skill.level)}/5
          </span>
          <SegmentedMasteryBar level={skill.level} hovered={hovered} />
        </div>
      </div>

      <AnimatePresence>
        {hovered && details.length ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.21, 1, 0.21, 1] }}
            className="mt-3 rounded-xl border border-slate-800/60 bg-[var(--surface)]/35 p-3 backdrop-blur-lg"
          >
            <p className="font-ui text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
              tooltip
            </p>
            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{details.join(" • ")}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function ModuleHeader({ label }: { label: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(dx * 0.05);
        y.set(dy * 0.05);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="flex min-w-0 flex-col items-center justify-center gap-1 px-2 py-2 text-center sm:flex-row sm:justify-between sm:gap-3 sm:px-4 sm:py-3"
    >
      <p className="truncate font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
        [{label}]
      </p>
      <span className="font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
        synced
      </span>
    </motion.div>
  );
}

function ModuleShell({
  label,
  children,
  className
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "terminal-shell overflow-hidden border border-slate-800/60 bg-[var(--surface)]/28 backdrop-blur-lg",
        className ?? ""
      ].join(" ")}
    >
      <div className="terminal-topbar">
        <div className="flex items-center gap-2">
          <span className="terminal-dot bg-[#ff5f57]" />
          <span className="terminal-dot bg-[#febc2e]" />
          <span className="terminal-dot bg-[#28c840]" />
        </div>
        <ModuleHeader label={label} />
        <div className="w-4 sm:w-10" />
      </div>
      <div className="terminal-body px-4 py-4 sm:px-5 sm:py-5">{children}</div>
    </div>
  );
}

export default function Skills({ skills }: SkillsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Group skills by category from database
  const groupedByCategory = useMemo(() => {
    const map = new Map<string, Skill[]>();
    for (const skill of skills) {
      const category = skill.category;
      if (!map.has(category)) map.set(category, []);
      map.get(category)!.push(skill);
    }
    return map;
  }, [skills]);

  const hoveredInCategory = useMemo(() => {
    if (hoveredId === null) return null;
    for (const [category, categorySkills] of groupedByCategory) {
      if (categorySkills.some((s) => s.id === hoveredId)) return category;
    }
    return null;
  }, [hoveredId, groupedByCategory]);

  const isEmpty = skills.length === 0;

  return (
    <section id="skills" className="section-shell console-grid skills-circuit">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="muted-label">Skills</p>
          <h2 className="section-title mt-3">Technical Dashboard</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            System modules organized for fast scanning, technical depth, and clean UI.
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
                skills.log
              </span>
              <span className="truncate font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                status
              </span>
            </div>
            <div className="w-10" />
          </div>
          <div className="terminal-body px-4 py-4 sm:px-5 sm:py-5">
            <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              NO DATA: skills table is empty. Add rows in Supabase to populate this dashboard
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
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {Array.from(groupedByCategory).map(([category, categorySkills], idx) => (
            <motion.div
              key={category}
              layout
              className={idx === 0 ? "md:col-span-5" : idx === 1 ? "md:col-span-7" : "md:col-span-12"}
            >
              <ModuleShell label={`MODULE_${String(idx + 1).padStart(2, "0")}_${category.toUpperCase()}`} className="h-full">
                <div className={idx === 1 ? "grid gap-2 sm:grid-cols-2" : idx === 2 ? "grid gap-2 md:grid-cols-2" : "space-y-2"}>
                  {categorySkills.map((skill) => (
                    <SkillRow
                      key={skill.id}
                      skill={skill}
                      hovered={hoveredId === skill.id}
                      dimmed={hoveredInCategory === category && hoveredId !== null && hoveredId !== skill.id}
                      onHover={setHoveredId}
                    />
                  ))}
                </div>
              </ModuleShell>
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="mt-10 terminal-shell">
        <div className="terminal-topbar">
          <div className="flex items-center gap-2">
            <span className="terminal-dot bg-[#ff5f57]" />
            <span className="terminal-dot bg-[#febc2e]" />
            <span className="terminal-dot bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-col text-center">
            <span className="truncate text-[11px] tracking-[0.18em] text-[var(--text)]/80">
              System Status
            </span>
            <span className="truncate font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
              status.log
            </span>
          </div>
          <div className="w-10" />
        </div>
        <div className="terminal-body px-4 py-4 sm:px-5 sm:py-5">
          <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            STATUS: ALL SYSTEMS OPERATIONAL | LOC: BUTERE_KENYA | CURSOR: BLINKING
            <span className="blink-underscore">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}
