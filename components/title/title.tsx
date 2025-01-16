import Image from "next/image";
import Logo from "@/public/logo.png";
import { cn } from "@/lib/utils";

interface iProps {
  fontSize?: string;
  iconClassName?: string;
}

const Title = (props: iProps) => {
  const { fontSize = "text-2xl", iconClassName = "w-12 h-12" } = props;

  return (
    <div className="flex-center group gap-3 hover:cursor-pointer">
      <div className={cn("relative", iconClassName)}>
        <Image
          src={Logo}
          alt="Logo"
          fill
          className="object-contain transition group-hover:rotate-90"
        />
      </div>
      <span
        data-testid="title"
        className={cn("hidden font-semibold text-primary lg:block", fontSize)}
      >
        Waroeng Us
      </span>
    </div>
  );
};

export default Title;
