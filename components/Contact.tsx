import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-shell console-grid pb-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="muted-label">Contact</p>
          <h2 className="section-title mt-3">Get in Touch</h2>
          <p className="mt-4 font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            &gt; system_status: online_and_responding
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-12">
        <aside className="order-1 md:order-2 md:col-span-5">
          <div className="console-tile p-6">
            <p className="muted-label">Quick Connect</p>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-[var(--surface-border)]">
                  <MapPin size={18} className="text-[var(--accent)]" />
                </span>
                <div className="min-w-0">
                  <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    location
                  </p>
                  <p className="mt-1 font-ui text-[12px] uppercase tracking-[0.18em] text-[var(--text)]/85">
                    Butere, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-[var(--surface-border)]">
                  <Mail size={18} className="text-[var(--accent)]" />
                </span>
                <div className="min-w-0">
                  <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    email
                  </p>
                  <a
                    href="mailto:silasomulama@gmail.com"
                    className="mt-1 inline-block font-ui text-[12px] uppercase tracking-[0.18em] text-[var(--text)]/85 hover:text-[var(--accent)]"
                  >
                    silasmulama406@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <p className="muted-label">Direct Access</p>
              <div className="mt-4 grid gap-3">
                <a
                  href="https://wa.me/254706253808"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-slate-800/70 bg-[var(--surface)]/20 p-4 backdrop-blur-xl transition duration-300 ease-out hover:[border-color:color-mix(in_oklab,var(--accent)_55%,rgba(15,23,42,1))]"
                  style={{ "--brand": "#22c55e" } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-[var(--surface-border)] shadow-[0_0_0_1px_rgba(34,197,94,0.10),0_18px_40px_rgba(34,197,94,0.10)]">
                      <MessageCircle size={18} className="text-[var(--brand)]" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--text)]/85">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        Fast response for quick questions
                      </p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(420px_circle_at_30%_20%,rgba(34,197,94,0.20),transparent_60%)]" />
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/SilasOmulama4122"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-[var(--surface)]/20 p-4 backdrop-blur-xl transition duration-300 ease-out hover:[border-color:color-mix(in_oklab,var(--accent)_55%,rgba(15,23,42,1))]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-[var(--surface-border)] shadow-[0_0_0_1px_rgba(59,130,246,0.10),0_18px_40px_rgba(59,130,246,0.10)]">
                      <span className="font-ui text-[11px] uppercase tracking-[0.22em] text-blue-400">
                        f
                      </span>
                    </span>
                    <div className="min-w-0">
                      <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--text)]/85">
                        Facebook
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">Updates & presence</p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(420px_circle_at_30%_20%,rgba(59,130,246,0.18),transparent_60%)]" />
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@techskills4122"                      
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-[var(--surface)]/20 p-4 backdrop-blur-xl transition duration-300 ease-out hover:[border-color:color-mix(in_oklab,var(--accent)_55%,rgba(15,23,42,1))]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-[var(--surface-border)] shadow-[0_0_0_1px_rgba(239,68,68,0.10),0_18px_40px_rgba(239,68,68,0.10)]">
                      <span className="font-ui text-[11px] uppercase tracking-[0.22em] text-red-400">
                        yt
                      </span>
                    </span>
                    <div className="min-w-0">
                      <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--text)]/85">
                        YouTube
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">Demos & learning logs</p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(420px_circle_at_30%_20%,rgba(239,68,68,0.18),transparent_60%)]" />
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="#contact"
                className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] hover:text-[var(--accent)]"
              >
                Start a project → send a message
              </Link>
            </div>
          </div>
        </aside>

        <div className="order-2 md:order-1 md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
