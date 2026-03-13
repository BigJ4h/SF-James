import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import { AddToCartSection } from "@/components/product/ProductPurchase";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(params.id);
  if (!product) return { title: "Product | SF - JAMES" };
  return {
    title: `${product.name} | SF - JAMES`,
    description: product.description
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) return notFound();

  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <div className="section-padding">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <div className="card-soft overflow-hidden">
            <div className="grid gap-2 sm:grid-cols-[3fr,2fr]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={gallery[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="hidden flex-col gap-2 sm:flex">
                {gallery.slice(1).map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 2}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AddToCartSection product={product} />
      </div>
    </div>
  );
}

