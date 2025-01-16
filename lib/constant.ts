import { iNavItem } from "@/types/types";
import { LayoutDashboard, Users } from "lucide-react";

export const adminNavItem: iNavItem[] = [
  {
    name: "Dashboard",
    routes: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    routes: "/users",
    icon: Users,
  },
];
