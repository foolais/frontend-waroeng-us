"use client";

import Title from "@/components/title/title";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className="flex justify-between px-4 py-2 md:hidden">
      <Title />
      <MobileSidebar isMobile={isMobile} />
    </header>
  );
};

export default Header;
