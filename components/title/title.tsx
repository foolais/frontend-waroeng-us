import Image from "next/image";
import Logo from "@/public/logo.png";
import { twMerge } from "tailwind-merge";

interface iProps {
  fontSize?: string;
  iconClassName?: string;
}

const Title = (props: iProps) => {
  const { fontSize = "text-2xl", iconClassName = "w-12 h-12" } = props;

  return (
    <div className="flex-center group gap-3 hover:cursor-pointer">
      <div className={twMerge("relative", iconClassName)}>
        <Image
          src={Logo}
          alt="Logo"
          fill
          className="object-contain transition group-hover:rotate-90"
        />
      </div>
      <span
        data-testid="title"
        className={twMerge("font-semibold text-primary", fontSize)}
      >
        Waroeng Us
      </span>
    </div>
  );
};

export default Title;
