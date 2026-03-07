import type { AnchorHTMLAttributes } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost" | "premium";
}

export default function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-2";
  const variants = {
    primary:
      "border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10",
    ghost:
      "text-text-secondary hover:text-accent-green",
    premium:
      "relative overflow-hidden border border-accent-green/50 bg-gradient-to-r from-accent-green/5 via-accent-cyan/5 to-accent-green/5 text-accent-green shadow-lg shadow-accent-green/20 backdrop-blur-sm hover:border-accent-green hover:shadow-xl hover:shadow-accent-green/30 hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-accent-green/0 before:via-accent-green/10 before:to-accent-green/0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
