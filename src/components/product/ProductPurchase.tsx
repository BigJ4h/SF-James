"use client";

import { useState } from "react";
import type { Product } from "@/components/cart/CartContext";
import { useCart } from "@/components/cart/CartContext";

export function AddToCartSection({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [customName, setCustomName] = useState("");
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(product, quantity, product.isCustomName ? customName.trim() || undefined : undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  const disableCustom =
    product.isCustomName && customName.trim().length === 0 && quantity > 0;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-sf-muted">
          {product.category === "cap"
            ? "Cap Wears"
            : product.category === "shirt"
            ? "Shirt Wears"
            : product.category === "jean"
            ? "Jean Wears"
            : "Singlet Wears"}
        </p>
        <h1 className="font-display text-2xl tracking-[0.12em] sm:text-3xl">
          {product.name}
        </h1>
        <p className="text-sm text-sf-muted sm:text-base">{product.description}</p>
      </div>

      <p className="text-sm font-medium">${product.price}</p>

      {product.isCustomName && (
        <div className="space-y-2 rounded-2xl border border-sf-border bg-white/80 p-4 text-sm">
          <p className="font-medium">Personalize your singlet</p>
          <p className="text-xs text-sf-muted">
            Add your name, initials or a word (up to 14 characters). Monogrammed to order in
            our studio.
          </p>
          <input
            type="text"
            maxLength={14}
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder="Name or initials"
            className="mt-2 w-full rounded-full border border-sf-border bg-background-soft px-4 py-2 text-sm outline-none transition focus:border-sf-black"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center rounded-full border border-sf-border bg-white/70 px-2 py-1">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="h-8 w-8 rounded-full text-lg leading-none text-sf-muted hover:text-sf-black"
            aria-label="Decrease quantity"
          >
            –
          </button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="h-8 w-8 rounded-full text-lg leading-none text-sf-muted hover:text-sf-black"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          disabled={product.isCustomName && disableCustom}
          className="btn-primary"
        >
          {added ? "Added to bag" : "Add to bag"}
        </button>
      </div>
    </section>
  );
}

