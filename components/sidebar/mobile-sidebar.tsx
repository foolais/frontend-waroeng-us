"use client";

import Image from "next/image";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import HamburgerMenu from "@/public/hamburger-menu.png";
import Title from "@/components/title/title";
import { useWindowSize } from "@/hooks/useWindowsSize";
import NavItem from "@/components/nav/nav-item";
import { Separator } from "@/components/ui/separator";

const MobileSidebar = () => {
  const { width } = useWindowSize();
  const isMobile = width !== null && width <= 768;

  if (!isMobile) return <></>;

  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center rounded-l-3xl bg-white">
        <SheetTitle>
          <Title />
        </SheetTitle>
        <Separator className="w-3/4" />
        <NavItem isMobile={true} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

const HamburgerMenuIcon = () => {
  return (
    <div className="cursor-pointer rounded-full p-1.5 transition hover:bg-background">
      <Image src={HamburgerMenu} alt="Hamburger Menu" width={24} height={24} />
    </div>
  );
};
