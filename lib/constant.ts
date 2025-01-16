import { iNavItem } from "@/types/types";
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
