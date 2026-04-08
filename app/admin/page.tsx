"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { Project } from "@/lib/queries";

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function init() {
      const supabase = getSupabaseBrowserClient();
      if (!isSupabaseConfigured() || !supabase) {
        setError("Set Supabase environment variables to use admin features.");
        setLoading(false);
        return;
      }
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (!session) {
        router.replace("/admin/login");
        setLoading(false);
        return;
      }

      const { data: projectData, error: projectError } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (projectError) setError(projectError.message);
      setProjects((projectData ?? []) as Project[]);
      setLoading(false);
    }

    init();
  }, [router]);

  if (loading) {
    return <main className="section-shell">Loading admin dashboard...</main>;
  }

  return (
    <main className="section-shell">
      <p className="muted-label">Admin Dashboard</p>
      <h1 className="section-title mt-3">Manage Projects</h1>
      <p className="mt-4 text-sm text-ink/70">
        CRUD foundation is ready. Next phase can add create/update/delete forms
        and table actions for projects, then skills/services/messages management.
      </p>
      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="card">
            <h2 className="font-heading text-2xl">{project.title}</h2>
            <p className="mt-2 text-sm text-ink/80">{project.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
