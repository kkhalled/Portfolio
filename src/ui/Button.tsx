import type { AnchorHTMLAttributes } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
}

export default function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-2";
  const variants = {
    primary:
      "border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10",
    ghost:
      "text-text-secondary hover:text-accent-green",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
