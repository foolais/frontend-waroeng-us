import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  variant?: string;
  className?: string;
}

const Badge = ({ text, variant = "default", className }: BadgeProps) => {
  const variantStyles: Record<string, string> = {
    default: "bg-primary text-white",
    admin: "bg-primary text-white",
    user: "bg-secondary text-white",
    male: "bg-[#6EACDA] text-foreground",
    female: "bg-[#EB3678] text-white",
  };
  return (
    <div
      className={cn(
        "flex-center mx-auto rounded-xl px-2 py-1 text-sm font-medium capitalize",
        variantStyles[variant],
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
