import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const img = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export default function HomePage() {
  const featured = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-background-soft">
      {/* Sézane-style: thin announcement bar */}
      <div className="border-b border-sf-border/50 bg-ecru/60 py-2">
        <div className="container-page text-center text-[0.65rem] uppercase tracking-[0.25em] text-sf-muted">
          Free delivery for orders over $200 to the US — Boutique clothing, United States
        </div>
      </div>

      {/* Full-bleed hero (Sézane: one strong image, minimal or no text) */}
      <section className="relative w-full overflow-hidden bg-ecru">
        <div className="relative aspect-[4/5] w-full md:aspect-[16/9]">
          <Image
            src={img("sf-james-hero")}
            alt="SF - JAMES"
            fill
            className="object-cover object-center transition duration-700 ease-out"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
          <Link
            href="/shop"
            className="rounded-sm border border-white/90 bg-white/10 px-6 py-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
          >
            Discover the collection
          </Link>
        </div>
      </section>

      {/* New in — product grid (Sézane-style section title + grid) */}
      <section className="border-t border-sf-border/50 bg-background-soft py-12 md:py-16">
        <div className="container-page">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-xl tracking-wide text-sf-black md:text-2xl">
              New in
            </h2>
            <Link
              href="/shop"
              className="text-[0.7rem] uppercase tracking-[0.2em] text-sf-muted underline underline-offset-4 transition duration-200 hover:text-sf-black"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {featured.map((product, i) => (
              <div
                key={product.id}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "forwards" }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial block: image + text (Sézane storytelling) */}
      <section className="border-t border-sf-border/50 bg-white py-12 md:py-20">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-ecru animate-fade-in">
            <Image
              src={img("sf-james-editorial")}
              alt="The house"
              fill
              className="object-cover transition duration-500"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-sf-muted">
              Our story
            </p>
            <h2 className="font-display mt-2 text-2xl tracking-wide text-sf-black md:text-3xl">
              Thoughtfully designed for everyday.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sf-muted md:text-base">
              SF - JAMES is a boutique clothing house based in the United States. We focus on refined silhouettes and tactile fabrics—caps, shirts, jeans and customizable singlets—designed to move with you.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-[0.7rem] uppercase tracking-[0.2em] text-sf-black underline underline-offset-4 transition hover:text-sf-muted"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Second product row: curated */}
      <section className="border-t border-sf-border/50 bg-background-soft py-12 md:py-16">
        <div className="container-page">
          <h2 className="font-display mb-8 text-xl tracking-wide text-sf-black md:text-2xl">
            Essentials
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {products.slice(4, 8).map((product, i) => (
              <div
                key={product.id}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "forwards" }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter (Sézane: cream block, centered) */}
      <section className="border-t border-sf-border/50 bg-ecru/40 py-14 md:py-20">
        <div className="container-page max-w-lg text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-sf-muted">
            Newsletter
          </p>
          <h2 className="font-display mt-1 text-xl tracking-wide text-sf-black md:text-2xl">
            Join us
          </h2>
          <p className="mt-2 text-sm text-sf-muted">
            New arrivals, stories and exclusive offers.
          </p>
          <div className="mt-6 flex justify-center">
            <NewsletterForm />
          </div>
          <p className="mt-3 text-[0.65rem] text-sf-muted">
            By signing up, you agree to receive emails from SF - JAMES. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
