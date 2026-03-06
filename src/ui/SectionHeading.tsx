export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.25em] text-text-secondary">
      <span>{children}</span>
      <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
    </h2>
  );
}
