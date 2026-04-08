"use client";

import Link, { type LinkProps } from "next/link";
import type { Route } from "next";

type LogoProps = {
  href?: LinkProps["href"];
  className?: string;
  sizeClassName?: string;
};

export default function Logo({ href = "/" as Route, className, sizeClassName = "h-9" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Home"
      className={[
        "group inline-flex items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        className ?? ""
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex items-center font-ui text-[12px] uppercase tracking-[0.18em]",
          sizeClassName
        ].join(" ")}
      >
        <span className="text-[#14B8A6] transition duration-300 ease-out group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]">
          {"{"}
        </span>
        <span className="mx-1 origin-center text-white transition duration-300 ease-out group-hover:scale-105">
          SO
        </span>
        <span className="text-[#14B8A6] transition duration-300 ease-out group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]">
          {"}"}
        </span>
      </span>
    </Link>
  );
}

