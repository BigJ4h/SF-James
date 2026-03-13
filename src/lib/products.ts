import type { Category, Product } from "@/components/cart/CartContext";

export const categories: { id: Category; label: string }[] = [
  { id: "cap", label: "Cap Wears" },
  { id: "shirt", label: "Shirt Wears" },
  { id: "jean", label: "Jean Wears" },
  { id: "singlet", label: "Singlet Wears" }
];

// Placeholder images (picsum.photos) – replace with your own URLs in production
const img = (seed: string, w = 800, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const products: Product[] = [
  {
    id: "cap-classic-cream",
    name: "Classic Cream Cap",
    description: "Structured cotton cap in a warm cream tone with subtle SF - JAMES embroidery.",
    price: 68,
    category: "cap",
    image: img("sf-cap-cream"),
    images: [img("sf-cap-cream"), img("sf-cap-cream-2")]
  },
  {
    id: "cap-wool-charcoal",
    name: "Wool Charcoal Cap",
    description: "Soft brushed wool cap in deep charcoal for understated everyday wear.",
    price: 82,
    category: "cap",
    image: img("sf-cap-charcoal")
  },
  {
    id: "shirt-oxford-white",
    name: "Oxford White Shirt",
    description:
      "Crisp white oxford shirt with a relaxed tailored fit and mother-of-pearl buttons.",
    price: 120,
    category: "shirt",
    image: img("sf-shirt-white"),
    images: [img("sf-shirt-white"), img("sf-shirt-white-2")]
  },
  {
    id: "shirt-sand-linen",
    name: "Sand Linen Shirt",
    description: "Breathable linen shirt in a soft sand hue, ideal for warm city days.",
    price: 138,
    category: "shirt",
    image: img("sf-shirt-sand")
  },
  {
    id: "jean-tapered-indigo",
    name: "Tapered Indigo Jeans",
    description: "High-rise tapered denim with a clean dark indigo wash and minimal detailing.",
    price: 155,
    category: "jean",
    image: img("sf-jean-indigo")
  },
  {
    id: "jean-ecru-straight",
    name: "Ecru Straight Jeans",
    description: "Straight-leg jeans in a soft ecru tone for a modern, effortless silhouette.",
    price: 165,
    category: "jean",
    image: img("sf-jean-ecru")
  },
  {
    id: "singlet-custom-ribbed",
    name: "Custom Ribbed Singlet",
    description: "Signature ribbed singlet that can be personalized with your name or initials.",
    price: 74,
    category: "singlet",
    image: img("sf-singlet-ribbed"),
    isCustomName: true
  },
  {
    id: "singlet-soft-cotton",
    name: "Soft Cotton Singlet",
    description: "Everyday soft cotton singlet with optional custom monogram at the chest.",
    price: 79,
    category: "singlet",
    image: img("sf-singlet-cotton"),
    isCustomName: true
  }
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

