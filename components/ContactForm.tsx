"use client";

import { FormEvent, useMemo, useState } from "react";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabaseClient";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const isSuccess = useMemo(() => status.toLowerCase().includes("success"), [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const form = event.currentTarget; // ✅ capture early
  
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
  
    const supabase = getSupabaseBrowserClient();
  
    if (!isSupabaseConfigured() || !supabase) {
      setStatus("Supabase is not configured yet.");
      return;
    }

    setSubmitting(true);
    setStatus("");

    const { error } = await supabase.from("messages").insert({
      name,
      email,
      message,
    });
  
    if (error) {
      setStatus("Something went wrong.");
      setSubmitting(false);
      return;
    }
  
    setStatus("Message sent successfully.");
    setSubmitting(false);
  
    form.reset(); // ✅ now safe
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="surface-glass grid gap-6 rounded-3xl p-6"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
      }}
    >
      <motion.div
        className="field-group relative"
        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
      >
        <input name="name" required placeholder=" " className="field-line" disabled={submitting} />
        <label className="floating-label">YOUR NAME</label>
      </motion.div>

      <motion.div
        className="field-group relative"
        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
      >
        <input name="email" type="email" required placeholder=" " className="field-line" disabled={submitting} />
        <label className="floating-label">YOUR EMAIL</label>
      </motion.div>

      <motion.div
        className="field-group relative"
        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
      >
        <textarea name="message" required rows={4} placeholder=" " className="field-line resize-none" disabled={submitting} />
        <label className="floating-label">YOUR MESSAGE</label>
      </motion.div>

      <motion.button
        type="submit"
        disabled={submitting}
        className="cta-primary w-full justify-center gap-2 disabled:opacity-70"
        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
        whileTap={{ scale: 0.99 }}
      >
        {submitting ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
        {submitting ? "Sending..." : "Send Message"}
      </motion.button>

      <AnimatePresence>
        {status ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: [0.21, 1, 0.21, 1] }}
            className={`text-xs ${isSuccess ? "text-[var(--accent)]" : "text-red-400"}`}
          >
            {status}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </motion.form>
  );
}
