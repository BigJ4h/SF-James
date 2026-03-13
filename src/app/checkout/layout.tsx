import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | SF - JAMES",
  description: "Complete your order. Shipping and payment details.",
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
