"use client";

import Image from "next/image";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import HamburgerMenu from "@/public/hamburger-menu.png";
import Title from "../title/title";
import { useWindowSize } from "@/hooks/useWindowsSize";

const MobileSidebar = () => {
  const { width } = useWindowSize();
  const isMobile = width !== null && width <= 768;

  console.log({ width, isMobile });

  if (!isMobile) return <></>;

  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>
          <Title />
        </SheetTitle>
        <div>
          <p>a</p>
          <p>b</p>
          <p>c</p>
          <p>d</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

const HamburgerMenuIcon = () => {
  return (
    <div className="rotate-180 cursor-pointer rounded-full p-1.5 transition hover:bg-background">
      <Image src={HamburgerMenu} alt="Hamburger Menu" width={24} height={24} />
    </div>
  );
};
