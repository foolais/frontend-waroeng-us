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
      className={cn("flex-center group gap-3 hover:cursor-pointer", className)}
    >
      <div className="relative h-12 w-12">
        <Image
          src={Logo}
          alt="Logo"
          fill
          className="object-contain transition group-hover:rotate-90"
        />
      </div>
      <span
        data-testid="title"
        className={cn("text-2xl font-semibold text-primary", textClassName)}
      >
        Waroeng Us
      </span>
    </div>
  );
};

export default Title;
