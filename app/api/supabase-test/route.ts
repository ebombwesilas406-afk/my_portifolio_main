import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function GET() {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, message: "Supabase environment variables are missing." },
      { status: 500 }
    );
  }

  const { error } = await supabase.from("projects").select("id").limit(1);

  if (error) {
    return NextResponse.json(
      { ok: false, message: "Supabase connection failed.", error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, message: "Supabase connected successfully." });
}
