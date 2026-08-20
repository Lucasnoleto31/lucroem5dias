import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold " +
  "transition-[background-color,border-color,color,transform] duration-150 ease-out " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 " +
  "disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:translate-y-0";

const variants = {
  primary: "bg-cta text-neutral-950 hover:bg-cta-hover hover:-translate-y-px",
  secondary:
    "border border-edge text-text-strong hover:border-neutral-600 hover:-translate-y-px",
  ghost: "text-text-default hover:text-text-strong",
};

const sizes = {
  sm: "h-10 px-4 text-body-sm",
  md: "h-12 px-6 text-body",
  lg: "h-14 px-8 text-body",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled,
  className = "",
  children,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
