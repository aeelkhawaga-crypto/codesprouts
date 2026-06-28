import Link from "next/link";

export const DONATE_URL = "https://buy.stripe.com/dRm4gy4XFcZ2gBndox8g000";

type DonateButtonProps = {
  /** "solid" = filled emerald (primary), "outline" = bordered, "light" = white on dark */
  variant?: "solid" | "outline" | "light";
  className?: string;
  children?: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-colors";

const variants: Record<NonNullable<DonateButtonProps["variant"]>, string> = {
  solid: "bg-emerald-600 text-white hover:bg-emerald-700",
  outline:
    "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 shadow-none",
  light: "bg-white text-emerald-600 hover:bg-gray-100",
};

export default function DonateButton({
  variant = "solid",
  className = "",
  children,
}: DonateButtonProps) {
  return (
    <Link
      href={DONATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span aria-hidden>❤️</span>
      {children ?? "Donate Now"}
    </Link>
  );
}
