import SiteFrame from "@/components/SiteFrame";

function Tile({ className }: { className: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-800/60 bg-[var(--surface)]/30 p-6 backdrop-blur-lg ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent [animation:shimmer_1.25s_infinite]" />
      <div className="h-3 w-24 rounded bg-white/10" />
      <div className="mt-4 h-6 w-3/4 rounded bg-white/10" />
      <div className="mt-3 h-4 w-full rounded bg-white/10" />
      <div className="mt-2 h-4 w-5/6 rounded bg-white/10" />
      <div className="mt-6 flex gap-2">
        <div className="h-6 w-16 rounded-full bg-white/10" />
        <div className="h-6 w-20 rounded-full bg-white/10" />
        <div className="h-6 w-14 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <main>
      <SiteFrame>
        <section className="section-shell">
          <p className="muted-label">Projects</p>
          <h2 className="section-title mt-3">Project Archive</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-12">
            <Tile className="md:col-span-7 md:row-span-2 min-h-[360px]" />
            <Tile className="md:col-span-5 min-h-[220px]" />
            <Tile className="md:col-span-5 min-h-[220px]" />
            <Tile className="md:col-span-4 min-h-[220px]" />
            <Tile className="md:col-span-4 min-h-[220px]" />
            <Tile className="md:col-span-4 min-h-[220px]" />
          </div>
        </section>
      </SiteFrame>
    </main>
  );
}

