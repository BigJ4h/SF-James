# SF - JAMES

Boutique clothing e-commerce demo for **SF - JAMES**. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Placeholders

This demo uses placeholders only:

- **Product images**: [picsum.photos](https://picsum.photos) (replace in `src/lib/products.ts` with your image URLs).
- **Products & prices**: Example items in `src/lib/products.ts` — update names, descriptions, and prices for your catalog.
- **Checkout**: Demo only; no payment processing. Integrate Stripe, Shopify, or your preferred gateway for live orders.
- **Forms**: Contact and newsletter show a thank-you message on submit; no backend. Wire to your CRM or email service when ready.

## Pages

| Route        | Description                |
| ------------ | -------------------------- |
| `/`          | Home (hero, featured, newsletter) |
| `/shop`      | All products, search & category filters |
| `/product/[id]` | Product detail, add to cart, custom name for singlets |
| `/about`     | Brand story & design principles |
| `/contact`   | Contact form & studio details |
| `/cart`      | Bag with thumbnails, quantity, remove |
| `/checkout`  | Shipping form & order summary (demo place order) |

## Project structure

- `src/app/` — Pages and layouts (App Router)
- `src/components/` — Header, Footer, ProductCard, filters, cart context, forms
- `src/lib/products.ts` — Placeholder products and categories

## Environment

Optional: set `NEXT_PUBLIC_SITE_URL` to your production URL for correct Open Graph and metadata (e.g. `https://sf-james.com`).

---

© SF - JAMES. Demo site; replace content and imagery for production.
