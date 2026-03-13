import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { TrustBar } from "@/components/layout/TrustBar";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SF - JAMES | Boutique Clothing",
  description:
    "SF - JAMES is a boutique clothing brand offering curated cap wears, shirt wears, jean wears, and customizable singlet wears.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "SF - JAMES",
    description:
      "Boutique luxury clothing with caps, shirts, jeans and customizable singlets.",
    url: "https://sf-james.example.com",
    siteName: "SF - JAMES",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sans.variable} min-h-screen bg-background-soft text-sf-black`}
        style={{
          fontFamily: "var(--font-sans), system-ui, -apple-system, sans-serif",
          backgroundColor: "#faf9f7",
          color: "#1c1b1a"
        }}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <TrustBar />
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

