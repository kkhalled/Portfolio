import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-6 text-center">
      <p className="mb-4 font-mono text-sm text-accent-green">404</p>
      <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-text-primary">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded border border-accent-cyan px-6 py-3 font-mono text-sm text-accent-cyan transition-all duration-200 hover:bg-accent-cyan/10"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}
