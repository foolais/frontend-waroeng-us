"use client";

import { adminNavItem } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { iNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ isMobile = false }: { isMobile?: boolean }) => {
  const path = usePathname();

  return (
    <nav className={cn("px-2 lg:px-4", isMobile ? "w-3/4" : "w-max lg:w-full")}>
      <ul className="grid gap-4">
        {adminNavItem.map(
          ({ name, icon: Icon, routes }: iNavItem, index: number) => (
            <li key={index}>
              <Link
                href={routes}
                className={cn(
                  path?.startsWith(routes)
                    ? "bg-primary text-white hover:opacity-80"
                    : "hover:text-primary",
                  "flex items-center gap-4 rounded-xl px-2 py-2 transition",
                  isMobile
                    ? "justify-normal"
                    : "justify-center lg:justify-normal",
                )}
              >
                {Icon && (
                  <Icon
                    data-testid={`nav-icon-${name}`}
                    className="h-6 w-6 lg:h-7 lg:w-7"
                  />
                )}
                <span
                  className={cn(
                    "hidden text-sm font-semibold lg:block",
                    isMobile ? "block" : "",
                  )}
                >
                  {name}
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
