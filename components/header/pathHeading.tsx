"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface iProps {
  className?: string;
}

const PathHeading = ({ className }: iProps) => {
  const pathname = usePathname().split("/");

  return (
    <h1 className={cn("font-semibold capitalize", className)}>
      {`${pathname[1]} Page`}
    </h1>
  );
};

export default PathHeading;
