"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart/CartContext";

const navItems = [
  { href: "/shop", label: "New in" },
  { href: "/shop", label: "Caps" },
  { href: "/shop", label: "Shirts" },
  { href: "/shop", label: "Jeans" },
  { href: "/shop", label: "Singlets" },
  { href: "/about", label: "Our story" }
];

export function Header() {
  const pathname = usePathname();
  const { state: { items } } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 border-b border-sf-border/60 bg-background-soft/95 backdrop-blur-sm">
      <div className="container-page grid h-14 grid-cols-3 items-center gap-4 md:h-16">
        <nav className="hidden items-center gap-5 text-[0.7rem] uppercase tracking-[0.2em] text-sf-muted md:flex">
          {navItems.slice(0, 3).map((item) => (
            <Link key={item.href + item.label} href={item.href} className="transition hover:text-sf-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="flex justify-center">
          <div className="relative h-7 w-28 md:h-8 md:w-32">
            <Image src="/logo-sf-james.svg" alt="SF - JAMES" fill sizes="128px" className="object-contain" priority />
          </div>
        </Link>

        <div className="flex items-center justify-end gap-5">
          <nav className="hidden items-center gap-5 text-[0.7rem] uppercase tracking-[0.2em] text-sf-muted md:flex">
            {navItems.slice(3).map((item) => (
              <Link key={item.href + item.label} href={item.href} className="transition hover:text-sf-black">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/cart"
            className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-sf-muted transition hover:text-sf-black"
            aria-label="Bag"
          >
            Bag
            {cartCount > 0 && (
              <span className="flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-sf-black px-1.5 text-[0.6rem] font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
