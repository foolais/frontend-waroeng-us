"use client";

import { headingItem } from "@/lib/constant";
import { usePathname } from "next/navigation";

const PathHeading = () => {
  const path = usePathname();
  const heading = headingItem.find((item) => path.startsWith(item.routes));

  return (
    <div className="flex flex-col">
      <h1 className="text-heading">{heading?.name}</h1>
      <span className="text-span hidden md:block">{heading?.description}</span>
    </div>
  );
};

export default PathHeading;
