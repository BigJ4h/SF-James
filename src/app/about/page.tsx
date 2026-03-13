export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-sf-muted">
            About
          </p>
          <h1 className="font-display text-3xl tracking-[0.12em]">The SF - JAMES house</h1>
          <p className="text-sm text-sf-muted sm:text-base">
            SF - JAMES is a boutique clothing brand based in the United States. Born from a
            love of quiet, elevated design, the house focuses on refined silhouettes and
            tactile fabrics that feel considered yet effortless.
          </p>
          <p className="text-sm text-sf-muted sm:text-base">
            Each piece is designed to earn its place in your wardrobe—caps with sculpted
            brims, shirts with relaxed structure, denim that softens with every wear, and
            singlets that can be personalized just for you.
          </p>
          <p className="text-sm text-sf-muted sm:text-base">
            We work in small, intentional drops to preserve quality and reduce waste. The
            result is a wardrobe of essentials that feel as good on the body as they look
            in motion.
          </p>
        </div>
        <div className="card-soft p-6 sm:p-8">
          <h2 className="font-display text-xl tracking-[0.12em]">Design principles</h2>
          <ul className="mt-4 space-y-3 text-sm text-sf-muted">
            <li>
              <span className="font-medium text-sf-black">Timeless over trend.</span> Each
              piece is designed to move beyond a single season.
            </li>
            <li>
              <span className="font-medium text-sf-black">Ease in motion.</span> Garments are
              cut to follow the body’s natural rhythm.
            </li>
            <li>
              <span className="font-medium text-sf-black">Thoughtful details.</span> From
              stitching to hardware, nothing is added without intention.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

