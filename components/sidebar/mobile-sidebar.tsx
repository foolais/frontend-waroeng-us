"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import HamburgerMenu from "@/public/hamburger-menu.png";
import Title from "@/components/title/title";
import NavItem from "@/components/nav/nav-item";
import { Separator } from "@/components/ui/separator";
import LogoutButton from "../button/logout-button";

const MobileSidebar = ({ isMobile }: { isMobile: boolean }) => {
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
        <SheetFooter className="mb-4 mt-auto w-3/4">
          <LogoutButton isMobile={isMobile} />
        </SheetFooter>
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
