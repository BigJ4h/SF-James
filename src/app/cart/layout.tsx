import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | SF - JAMES",
  description: "Your bag. Review items and proceed to checkout.",
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
