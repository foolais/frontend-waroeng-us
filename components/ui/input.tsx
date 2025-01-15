import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IProps extends React.ComponentProps<"input"> {
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

const Input = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, type, icon: Icon, iconPosition = "left", ...props }, ref) => {
    return (
      <div className={cn("relative flex w-full items-center", className)}>
        {Icon && iconPosition === "left" && (
          <Icon className="absolute left-3 h-5 w-5 text-muted-foreground" />
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-xl bg-background px-3 py-2 outline-primary file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className,
            Icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : "",
          )}
          ref={ref}
          {...props}
        />
        {Icon && iconPosition === "right" && (
          <Icon className="absolute right-3 h-5 w-5 text-muted-foreground" />
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
