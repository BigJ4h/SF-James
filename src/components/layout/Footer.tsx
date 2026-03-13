import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CountryLanguageSelector } from "@/components/layout/CountryLanguageSelector";

const locations = [
  "New York",
  "San Francisco",
  "Austin",
  "San Jose",
  "Boston",
  "Nashville",
  "Charleston",
  "Brooklyn",
  "Atlanta"
];

export function Footer() {
  return (
    <footer className="border-t border-sf-border/60 bg-ecru/20">
      {/* Main footer grid */}
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Useful Information */}
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-sf-black">
              Useful Information
            </p>
            <ul className="mt-3 space-y-2 text-xs text-sf-muted">
              <li><Link href="/contact" className="transition hover:text-sf-black">My Account</Link></li>
              <li><Link href="/contact" className="transition hover:text-sf-black">My Delivery</Link></li>
              <li><Link href="/contact" className="transition hover:text-sf-black">My Returns</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-sf-black">
              About
            </p>
            <ul className="mt-3 space-y-2 text-xs text-sf-muted">
              <li><Link href="/about" className="transition hover:text-sf-black">A Word From the Founder</Link></li>
              <li><Link href="/about" className="transition hover:text-sf-black">Our Commitments</Link></li>
              <li><Link href="/contact" className="transition hover:text-sf-black">Legal Notices</Link></li>
              <li><Link href="/contact" className="transition hover:text-sf-black">Privacy Policy</Link></li>
              <li><Link href="/contact" className="transition hover:text-sf-black">Terms &amp; Conditions</Link></li>
              <li><Link href="/contact" className="transition hover:text-sf-black">Digital Accessibility</Link></li>
              <li><Link href="/contact" className="transition hover:text-sf-black">Join Us</Link></li>
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-sf-black">
              Our Locations
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-sf-muted">
              <li><Link href="/contact" className="transition hover:text-sf-black">Our Locations</Link></li>
              {locations.map((city) => (
                <li key={city}>
                  <Link href="/contact" className="transition hover:text-sf-black">{city}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - spans 2 on lg */}
          <div className="lg:col-span-2">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-sf-black">
              Subscribe to our newsletter
            </p>
            <div className="mt-3 max-w-sm">
              <NewsletterForm />
            </div>
            <p className="mt-2 text-[0.6rem] text-sf-muted">
              By signing up, you agree to receive emails from SF - JAMES. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Social + Country/Language */}
        <div className="mt-12 flex flex-col gap-6 border-t border-sf-border/60 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-[0.7rem] uppercase tracking-[0.15em] text-sf-muted">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-sf-black">Instagram</Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-sf-black">Twitter</Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-sf-black">Facebook</Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-sf-black">Pinterest</Link>
            <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-sf-black">TikTok</Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-sf-black">YouTube</Link>
          </div>
          <CountryLanguageSelector />
        </div>

        {/* Copyright */}
        <p className="mt-8 text-[0.65rem] text-sf-muted">
          © {new Date().getFullYear()} SF - JAMES. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
