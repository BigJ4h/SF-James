import Link from "next/link";

const items = [
  {
    title: "FREE DELIVERY",
    text: "For orders over $200 to the US."
  },
  {
    title: "FREE RETURNS",
    text: "We offer free and seamless returns."
  },
  {
    title: "SECURE PAYMENT",
    text: "Visa, Mastercard, Amex, PayPal, Maestro, Diners, Discover"
  },
  {
    title: "NEED HELP?",
    links: [
      { label: "FAQ", href: "/contact" },
      { label: "Want to make a return?", href: "/contact" },
      { label: "Track my order", href: "/contact" },
      { label: "Contact", href: "/contact" }
    ],
    contact: {
      email: "bonjour@sf-james.com",
      whatsapp: "WhatsApp",
      messenger: "Messenger",
      instagram: "@sfjames"
    }
  }
];

export function TrustBar() {
  return (
    <section className="border-y border-sf-border/60 bg-white/80 py-8 md:py-10">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
            >
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-sf-black">
                {item.title}
              </p>
              {"text" in item && (
                <p className="mt-1.5 text-xs leading-relaxed text-sf-muted">
                  {item.text}
                </p>
              )}
              {"links" in item && item.links && (
                <div className="mt-2 space-y-1">
                  {item.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-xs text-sf-muted underline-offset-4 hover:underline hover:text-sf-black"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {item.contact && (
                    <div className="mt-3 space-y-0.5 text-xs text-sf-muted">
                      <p>Email: {item.contact.email}</p>
                      <p>{item.contact.whatsapp}</p>
                      <p>{item.contact.messenger}</p>
                      <p>Instagram: {item.contact.instagram}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
