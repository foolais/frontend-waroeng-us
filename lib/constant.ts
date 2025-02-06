import { iFormUser, iNavItem } from "@/types/types";
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

export const userFormDefaultValue: iFormUser = {
  name: "",
  address: "",
  phone: "",
  gender: "male",
  role: "user",
  email: "",
  password: "",
  confirmPassword: "",
  image: null,
};
