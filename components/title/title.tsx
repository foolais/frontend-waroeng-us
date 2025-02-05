import Image from "next/image";
import Logo from "@/public/logo.png";
import { cn } from "@/lib/utils";

interface iProps {
  className?: string;
  textClassName?: string;
}

const Title = (props: iProps) => {
  const { className, textClassName } = props;

  return (
    <div
      className={cn(
        "group flex items-center gap-2 hover:cursor-pointer",
        className,
      )}
    >
      <div className="relative h-10 w-10">
        <Image
          src={Logo}
          alt="Logo"
          fill
          className="object-contain transition group-hover:rotate-90"
        />
      </div>
      <span
        data-testid="title"
        className={cn("text-lg font-bold text-foreground", textClassName)}
      >
        Waroeng Us
      </span>
    </div>
  );
};

export default Title;
