"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";

export default function CheckoutPage() {
  const { state, total, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const hasItems = state.items.length > 0;

  function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    if (!hasItems) return;
    clearCart();
    setPlaced(true);
  }

  return (
    <div className="section-padding">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-sf-muted">
            Checkout
          </p>
          <h1 className="font-display text-3xl tracking-[0.12em]">Shipping & details</h1>

          {placed && (
            <div className="rounded-2xl border border-sf-gold/50 bg-background-soft p-4 text-sm">
              <p className="font-medium text-sf-black">Order placed (demo).</p>
              <p className="text-xs text-sf-muted">
                This is a demo checkout experience. In a live store, your payment and order
                details would be processed securely.
              </p>
            </div>
          )}

          <form onSubmit={handlePlaceOrder} className="card-soft space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-sf-muted">
                  First name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-full border border-sf-border bg-background-soft px-4 py-2.5 text-sm outline-none transition focus:border-sf-black"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-sf-muted">
                  Last name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-full border border-sf-border bg-background-soft px-4 py-2.5 text-sm outline-none transition focus:border-sf-black"
                />
              </div>
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
                Shipping address
              </label>
              <textarea
                rows={3}
                required
                className="mt-1 w-full rounded-3xl border border-sf-border bg-background-soft px-4 py-3 text-sm outline-none transition focus:border-sf-black"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-sf-muted">
                  City
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-full border border-sf-border bg-background-soft px-4 py-2.5 text-sm outline-none transition focus:border-sf-black"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-sf-muted">
                  State
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-full border border-sf-border bg-background-soft px-4 py-2.5 text-sm outline-none transition focus:border-sf-black"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-sf-muted">
                  ZIP
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-full border border-sf-border bg-background-soft px-4 py-2.5 text-sm outline-none transition focus:border-sf-black"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!hasItems}
              className="btn-primary w-full justify-center"
            >
              {hasItems ? "Place order (demo)" : "Add items to bag first"}
            </button>
          </form>
        </div>

        <div className="card-soft p-6 sm:p-8">
          <h2 className="font-display text-xl tracking-[0.12em]">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm text-sf-muted">
            {state.items.map((item) => (
              <div
                key={`${item.product.id}-${item.customName ?? "default"}`}
                className="flex justify-between"
              >
                <span>
                  {item.product.name}
                  {item.customName ? ` · ${item.customName}` : ""} × {item.quantity}
                </span>
                <span className="text-sf-black">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-sf-border pt-4 text-sm">
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="mt-2 text-xs text-sf-muted">
              This is a front-end demo only. Integrate your preferred payment provider to
              process live orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

