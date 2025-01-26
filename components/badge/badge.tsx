import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  variant?: string;
}

const Badge = ({ text, variant = "default" }: BadgeProps) => {
  const variantStyles: Record<string, string> = {
    default: "bg-primary text-white",
    admin: "bg-primary text-white",
    user: "bg-secondary text-white",
    male: "bg-blue-600 text-white",
    female: "bg-pink-400 text-white",
  };
  return (
    <div
      className={cn(
        "flex-center mx-auto max-w-28 rounded-xl p-1 text-sm font-medium capitalize",
        variantStyles[variant],
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
