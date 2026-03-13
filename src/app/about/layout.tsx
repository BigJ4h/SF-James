import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SF - JAMES",
  description:
    "SF - JAMES is a boutique clothing house in the United States. Thoughtfully designed everyday pieces.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
