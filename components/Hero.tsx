 "use client";

 import Link from "next/link";
 import { motion } from "framer-motion";
 import { ArrowRight, FolderKanban, Home, Mail, UserRound, Wrench, BriefcaseBusiness } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero-blueprint section-shell relative grid gap-10 pt-16 md:grid-cols-12">
      <motion.div
        className="relative z-10 flex flex-col justify-center md:col-span-7"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } }
        }}
      >
        <motion.p
          className="muted-label mb-4"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: [0.21, 1, 0.21, 1] }}
        >
          Silas Omulama
        </motion.p>

        <motion.h1
          className="font-heading hero-gradient-text text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl"
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: [0.21, 1, 0.21, 1] }}
        >
          Building practical systems with purpose.
        </motion.h1>

        <motion.div
          className="mt-6"
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: [0.21, 1, 0.21, 1] }}
        >
          <span className="code-pill">
            <span className="text-[var(--accent)]">&lt;/&gt;</span>
            Aspiring Software Developer
          </span>
        </motion.div>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg"
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: [0.21, 1, 0.21, 1] }}
        >
          I build practical web applications, automation tools, and backend systems while learning and growing in ICT.
        </motion.p>

        <motion.p
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border px-4 py-3 text-sm surface-glass"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: [0.21, 1, 0.21, 1] }}
        >
          <span className="status-pulse" aria-hidden />
          <span className="font-ui text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Open to collaboration, learning opportunities, and projects
          </span>
        </motion.p>

        <motion.div
          className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-fit sm:flex-row sm:items-center"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.55, ease: [0.21, 1, 0.21, 1] }}
        >
          <Link href="/projects" className="cta-primary group justify-center sm:justify-start">
            <span>View Projects</span>
            <ArrowRight className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-[3px]" size={16} />
          </Link>
          <Link href="/contact" className="cta-outline-teal justify-center sm:justify-start">
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 md:col-span-5"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 1, 0.21, 1], delay: 0.2 }}
      >
        <div className="terminal-shell ide-float h-full">
          <header className="terminal-topbar">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <div className="flex min-w-0 flex-col text-center">
              <span className="truncate text-[11px] tracking-[0.18em] text-[var(--text)]/80">
                Floating IDE
              </span>
              <span className="truncate text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                focus.md
              </span>
            </div>
            <div className="w-10" />
          </header>
          <div className="terminal-body">
            <p className="muted-label">Current Focus</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Learning, building real-world systems, and strengthening core skills in backend development, automation, and practical web engineering.
            </p>
          </div>
        </div>
      </motion.div>

      <nav className="relative z-10 hidden md:col-span-12 md:block">
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="dock-pill">
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link href="/about" className="dock-pill">
            <UserRound size={16} />
            <span>About</span>
          </Link>
          <Link href="/projects" className="dock-pill">
            <FolderKanban size={16} />
            <span>Projects</span>
          </Link>
          <Link href="/skills" className="dock-pill">
            <Wrench size={16} />
            <span>Skills</span>
          </Link>
          <Link href="/services" className="dock-pill">
            <BriefcaseBusiness size={16} />
            <span>Services</span>
          </Link>
          <Link href="/contact" className="dock-pill">
            <Mail size={16} />
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </section>
  );
}
