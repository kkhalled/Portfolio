export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-accent-cyan/10 px-3 py-1 font-mono text-[11px] leading-tight text-accent-cyan">
      {label}
    </span>
  );
}
