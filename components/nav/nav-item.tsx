"use client";

import { adminNavItem } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { iNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ isMobile = false }: { isMobile?: boolean }) => {
  const path = usePathname();

  return (
    <nav className="w-full px-4">
      <ul className="grid gap-4">
        {adminNavItem.map(
          ({ name, icon: Icon, routes }: iNavItem, index: number) => (
            <li key={index}>
              <Link
                href={routes}
                className={cn(
                  path.startsWith(routes) ? "bg-background" : "",
                  "flex items-center gap-4 rounded-xl p-2 text-primary transition",
                  "hover:bg-background hover:text-primary",
                )}
              >
                {Icon && <Icon className="h-8 w-8" />}
                <span
                  className={cn(
                    "hidden font-semibold lg:block",
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
