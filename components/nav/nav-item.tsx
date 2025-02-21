"use client";

import { adminNavItem } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { iNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ isMobile = false }: { isMobile?: boolean }) => {
  const path = usePathname();

  return (
    <nav className={cn(isMobile ? "w-3/4" : "w-max lg:w-full")}>
      <ul className="mt-2 grid gap-2">
        {adminNavItem.map(
          ({ title, icon: Icon, url }: iNavItem, index: number) => (
            <li key={index}>
              <Link
                href={url}
                aria-label={title}
                className={cn(
                  "flex items-center gap-4 rounded-xl p-2 transition",
                  path?.startsWith(url)
                    ? "bg-primary text-background hover:opacity-80"
                    : "hover:bg-background hover:opacity-80",
                  isMobile
                    ? "justify-normal"
                    : "justify-center lg:justify-normal",
                )}
              >
                {Icon && (
                  <Icon data-testid={`nav-icon-${title}`} className="h-5 w-5" />
                )}
                <span
                  className={cn(
                    "hidden text-sm font-semibold lg:block",
                    isMobile ? "block" : "",
                  )}
                >
                  {title}
                </span>
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default NavItem;
