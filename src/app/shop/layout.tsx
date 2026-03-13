import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | SF - JAMES",
  description:
    "Explore caps, shirts, jeans and customizable singlets. Boutique clothing for a modern wardrobe.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
