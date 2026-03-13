"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sf-gold/40 bg-sf-cream/30 p-6 text-center">
        <p className="font-medium text-sf-black">Message received.</p>
        <p className="mt-1 text-sm text-sf-muted">
          Thanks for reaching out. We&apos;ll respond within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs uppercase tracking-[0.24em] text-sf-muted">
          Name
        </label>
        <input
          type="text"
          required
          className="mt-1 w-full rounded-full border border-sf-border bg-background-soft px-4 py-2.5 text-sm outline-none transition focus:border-sf-black"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.24em] text-sf-muted">
          Email
        </label>
        <input
          type="email"
          required
          className="mt-1 w-full rounded-full border border-sf-border bg-background-soft px-4 py-2.5 text-sm outline-none transition focus:border-sf-black"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.24em] text-sf-muted">
          Message
        </label>
        <textarea
          rows={4}
          required
          className="mt-1 w-full rounded-3xl border border-sf-border bg-background-soft px-4 py-3 text-sm outline-none transition focus:border-sf-black"
        />
      </div>
      <button type="submit" className="btn-primary">
        Send message
      </button>
    </form>
  );
}
