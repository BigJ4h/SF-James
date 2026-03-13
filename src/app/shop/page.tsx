"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductFilters, type ProductFiltersValue } from "@/components/product/ProductFilters";

export default function ShopPage() {
  const [filters, setFilters] = useState<ProductFiltersValue>({
    query: "",
    category: "all"
  });

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchesCategory = filters.category === "all" || p.category === filters.category;
        const query = filters.query.trim().toLowerCase();
        const matchesQuery =
          !query ||
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
      }),
    [filters]
  );

  return (
    <div className="section-padding">
      <div className="container-page space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-sf-muted">
            Collection
          </p>
          <h1 className="font-display text-3xl tracking-[0.12em]">Shop SF - JAMES</h1>
          <p className="max-w-2xl text-sm text-sf-muted sm:text-base">
            Explore caps, shirts, jeans and customizable singlets designed for a modern,
            pared-back wardrobe.
          </p>
        </div>

        <ProductFilters onChange={setFilters} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-sf-muted">
            No pieces match your search just yet. Try adjusting your filters.
          </p>
        )}
      </div>
    </div>
  );
}

