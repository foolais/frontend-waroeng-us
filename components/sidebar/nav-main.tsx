import { LucideIcon } from "lucide-react";
import React from "react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import { auth } from "@/auth";

const NavMain = async ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) => {
  const session = await auth();
  const storeId = session?.user?.store_id ?? "";

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          return (
            <SidebarMenuItem key={item.title}>
              <Link href={`/${storeId}/${item.url}`}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
