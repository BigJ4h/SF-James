"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm font-medium text-sf-black">
        Thanks for signing up. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
      <input
        type="email"
        placeholder="Your e-mail address"
        required
        className="w-full rounded-sm border border-sf-border bg-white px-3 py-2 text-xs outline-none transition placeholder:text-sf-muted focus:border-sf-black"
      />
      <button
        type="submit"
        className="rounded-sm border border-sf-black bg-sf-black px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-sf-charcoal"
      >
        ok
      </button>
    </form>
  );
}
