"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { BriefcaseBusiness, FolderKanban, Home, Menu, UserRound, Wrench, X } from "lucide-react";

const links = [
  { href: "/" as Route, label: "Home", icon: Home },
  { href: "/about" as Route, label: "About", icon: UserRound },
  { href: "/projects" as Route, label: "Projects", icon: FolderKanban },
  { href: "/skills" as Route, label: "Skills", icon: Wrench },
  { href: "/services" as Route, label: "Services", icon: BriefcaseBusiness },
  { href: "/contact" as Route, label: "Contact", icon: UserRound }
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[70]">
      <nav className="relative z-[70] mx-auto mt-4 flex w-[min(96%,1100px)] items-center justify-between rounded-2xl px-4 py-3 surface-glass bg-[var(--bg)]/95 md:bg-[var(--surface)]">
        <Link
          href="/"
          aria-label="Home"
          className="group inline-flex items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        >
          <Image src="/assests/logo.png" alt="Logo" width={36} height={36} className="h-9 w-auto" />
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.14em] text-[var(--muted)] hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-lg bg-[var(--accent)]/15 p-2 text-[var(--accent)] ring-1 ring-[var(--surface-border)] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} strokeWidth={2.25} /> : <Menu size={18} strokeWidth={2.25} />}
          </button>
        </div>
        {mobileOpen ? (
          <div className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-[80] rounded-2xl p-3 surface-glass bg-[var(--bg)]/98 shadow-xl md:hidden">
            <div className="grid gap-1">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[var(--text)] hover:bg-white/50 hover:text-[var(--accent)] dark:hover:bg-slate-900/50"
                  >
                    <Icon size={15} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
