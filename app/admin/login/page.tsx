"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabaseClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const supabase = getSupabaseBrowserClient();
    if (!isSupabaseConfigured() || !supabase) {
      setError("Set Supabase environment variables to enable admin login.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (loginError) {
      setError(loginError.message);
      return;
    }
    router.replace("/admin");
  }

  return (
    <main className="section-shell">
      <p className="muted-label">Admin Login</p>
      <h1 className="section-title mt-3">Sign in</h1>
      <form onSubmit={login} className="mt-8 grid max-w-md gap-4 card">
        <input
          name="email"
          type="email"
          placeholder="Admin Email"
          className="rounded-lg border border-teal/20 px-4 py-3 text-sm outline-none focus:border-teal"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="rounded-lg border border-teal/20 px-4 py-3 text-sm outline-none focus:border-teal"
          required
        />
        <button
          type="submit"
          className="w-fit rounded-full bg-teal px-6 py-3 text-sm text-white transition hover:bg-teal/90"
        >
          Login
        </button>
        {error ? <p className="text-xs text-red-600">{error}</p> : null}
      </form>
    </main>
  );
}
