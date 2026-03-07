export default function CustomButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="group relative inline-block">
      {/* shadow layer */}
      <span className="absolute inset-0  rounded-md bg-accent-cyan transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></span>

      {/* main button */}
      <span className="relative flex items-center justify-center rounded-md border border-accent-cyan bg-bg-primary px-6 py-3 text-sm font-meduim text-accent-cyan transition-transform duration-400 group-hover:-translate-x-1 group-hover:-translate-y-1">
        {icon}
        {label}
      </span>
    </button>
  );
}
