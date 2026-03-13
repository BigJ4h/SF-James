import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <p className="text-xs uppercase tracking-[0.3em] text-sf-muted">Error 404</p>
      <h1 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-center text-sm text-sf-muted">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
