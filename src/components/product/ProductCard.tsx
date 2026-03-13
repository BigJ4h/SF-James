import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/components/cart/CartContext";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col bg-transparent"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ecru/50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 768px) 25vw, 50vw"
        />
      </div>
      <div className="mt-2 flex flex-col gap-0.5 px-0.5">
        <p className="text-sm text-sf-black group-hover:underline">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-sf-muted">${product.price}</span>
          {product.isCustomName && (
            <span className="text-[0.6rem] uppercase tracking-wider text-sf-muted">
              Custom
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
