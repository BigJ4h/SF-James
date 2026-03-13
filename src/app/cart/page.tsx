"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";

export default function CartPage() {
  const { state, total, updateQuantity, removeFromCart } = useCart();

  const hasItems = state.items.length > 0;

  return (
    <div className="section-padding">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-sf-muted">
            Cart
          </p>
          <h1 className="font-display text-3xl tracking-[0.12em]">Your bag</h1>

          {!hasItems && (
            <div className="card-soft p-6 sm:p-8">
              <p className="text-sm text-sf-muted">
                Your bag is currently empty. Discover new favorites in the shop.
              </p>
              <Link href="/shop" className="btn-primary mt-4 inline-flex">
                Browse the collection
              </Link>
            </div>
          )}

          {hasItems && (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={`${item.product.id}-${item.customName ?? "default"}`}
                  className="flex gap-4 rounded-2xl border border-sf-border bg-white p-4"
                >
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-sf-cream/30">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-sf-black">{item.product.name}</p>
                      {item.customName && (
                        <p className="text-xs text-sf-muted">
                          Custom name: <span className="font-medium">{item.customName}</span>
                        </p>
                      )}
                      <p className="text-xs text-sf-muted">
                        ${item.product.price} · Qty {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center rounded-full border border-sf-border bg-white px-2 py-1">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            Math.max(1, item.quantity - 1),
                            item.customName
                          )
                        }
                        className="h-7 w-7 rounded-full text-lg leading-none text-sf-muted hover:text-sf-black"
                      >
                        –
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1, item.customName)
                        }
                        className="h-7 w-7 rounded-full text-lg leading-none text-sf-muted hover:text-sf-black"
                      >
                        +
                      </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id, item.customName)}
                        className="text-[0.7rem] uppercase tracking-[0.24em] text-sf-muted underline underline-offset-4 hover:text-sf-black"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card-soft p-6 sm:p-8">
          <h2 className="font-display text-xl tracking-[0.12em]">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm text-sf-muted">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-sf-black">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          <div className="mt-4 border-t border-sf-border pt-4 text-sm">
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link
            href={hasItems ? "/checkout" : "/shop"}
            className="btn-primary mt-4 inline-flex w-full justify-center"
          >
            {hasItems ? "Proceed to checkout" : "Browse the collection"}
          </Link>
        </div>
      </div>
    </div>
  );
}

