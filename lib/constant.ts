import { iHeadingItem, iNavItem } from "@/types/types";
import { LayoutDashboard, Users } from "lucide-react";

export const adminNavItem: iNavItem[] = [
  {
    name: "Dashboard",
    routes: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "User",
    routes: "/admin/user",
    icon: Users,
  },
];

export const headingItem: iHeadingItem[] = [
  {
    name: "Dashboard Page",
    description: "See your overview of your store here",
    routes: "/admin/dashboard",
  },
  {
    name: "Users Page",
    description: "Manage all of your users here",
    routes: "/admin/user",
  },
  {
    name: "Products Page",
    description: "Manage all of your products here",
    routes: "/admin/products",
  },
];
