"use client";

import { useEffect, useMemo, useState } from "react";

type TerminalItem = readonly [label: string, value: string];

function useTypewriter(text: string, { speedMs = 18, startDelayMs = 80 }: { speedMs?: number; startDelayMs?: number } = {}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let cancelled = false;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    setShown("");

    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        if (cancelled) return;
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length && intervalId) clearInterval(intervalId);
      }, speedMs);
    }, startDelayMs);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [speedMs, startDelayMs, text]);

  return shown;
}

function TerminalRow({ item, index }: { item: TerminalItem; index: number }) {
  const [label, value] = item;
  const typedLabel = useTypewriter(label.toUpperCase(), {
    speedMs: 14,
    startDelayMs: 120 + index * 120
  });

  return (
    <div className="grid gap-1 border-b pb-3 [border-color:color-mix(in_oklab,var(--surface-border)_80%,transparent)]">
      <div className="flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]/80 shadow-[0_0_0_2px_rgba(0,0,0,0.0)]" />
        <span className="terminal-typed text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
          {typedLabel}
        </span>
      </div>
      <span className="text-[var(--muted)]">{value}</span>
    </div>
  );
}

export default function Terminal({ items }: { items: readonly TerminalItem[] }) {
  const headerMeta = useMemo(() => {
    return {
      title: "profile.ts",
      subtitle: "Developer Console"
    } as const;
  }, []);

  return (
    <section className="terminal-shell font-ui">
      <header className="terminal-topbar">
        <div className="flex items-center gap-2">
          <span className="terminal-dot bg-[#ff5f57]" />
          <span className="terminal-dot bg-[#febc2e]" />
          <span className="terminal-dot bg-[#28c840]" />
        </div>
        <div className="flex min-w-0 flex-col text-center">
          <span className="truncate text-[11px] tracking-[0.18em] text-[var(--text)]/80">
            {headerMeta.subtitle}
          </span>
          <span className="truncate text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            {headerMeta.title}
          </span>
        </div>
        <div className="w-10" />
      </header>

      <div className="terminal-body">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] text-[var(--muted)]">
            <span className="text-[var(--accent)]">$</span>
            <span className="uppercase">whoami</span>
          </div>
          <span className="status-pulse text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            online
          </span>
        </div>

        <div className="space-y-4 text-sm">
          {items.map((item, index) => (
            <TerminalRow key={item[0]} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

