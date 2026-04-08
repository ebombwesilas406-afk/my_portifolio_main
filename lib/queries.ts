import { getSupabaseServerClient } from "@/lib/supabaseServer";

export type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  created_at: string;
};

export type Skill = {
  id: number;
  name: string;
  category: "language" | "tool" | "concept";
  level: number;
  details?: string[]; // Add optional details array
};

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export async function getProjects(): Promise<Project[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return [];
  return (data ?? []) as Project[];
}

export async function getSkills(): Promise<Skill[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];
  const { data, error } = await supabase.from("skills").select("*");
  if (error) return [];
  return (data ?? []) as Skill[];
}

export async function getServices(): Promise<Service[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];
  const { data, error } = await supabase.from("services").select("*");
  if (error) return [];
  return (data ?? []) as Service[];
}
