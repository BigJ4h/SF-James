"use client";

import { useState } from "react";
import type { Category } from "@/components/cart/CartContext";
import { categories } from "@/lib/products";

export type ProductFiltersValue = {
  query: string;
  category: Category | "all";
};

export function useInitialFilters(): ProductFiltersValue {
  return { query: "", category: "all" };
}

export function ProductFilters({
  onChange
}: {
  onChange: (value: ProductFiltersValue) => void;
}) {
  const [value, setValue] = useState<ProductFiltersValue>({
    query: "",
    category: "all"
  });

  function update(partial: Partial<ProductFiltersValue>) {
    const next = { ...value, ...partial };
    setValue(next);
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-sf-border/70 bg-white/70 p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-sm">
        <input
          type="text"
          placeholder="Search pieces, e.g. linen, cap, singlet"
          value={value.query}
          onChange={(e) => update({ query: e.target.value })}
          className="w-full rounded-full border border-sf-border bg-background-soft px-4 py-2.5 text-sm outline-none transition focus:border-sf-black"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[0.7rem] uppercase tracking-[0.24em] text-sf-muted">
          Search
        </span>
      </div>

      <div className="flex flex-wrap gap-2 text-[0.72rem] uppercase tracking-[0.24em]">
        <button
          type="button"
          onClick={() => update({ category: "all" })}
          className={`rounded-full border px-4 py-1.5 transition ${
            value.category === "all"
              ? "border-sf-black bg-sf-black text-white"
              : "border-sf-border bg-white/80 text-sf-muted hover:border-sf-black hover:text-sf-black"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => update({ category: cat.id })}
            className={`rounded-full border px-4 py-1.5 transition ${
              value.category === cat.id
                ? "border-sf-black bg-sf-black text-white"
                : "border-sf-border bg-white/80 text-sf-muted hover:border-sf-black hover:text-sf-black"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}

