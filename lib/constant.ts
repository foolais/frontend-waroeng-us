import { iFormCategory, iFormUser, iNavItem } from "@/types/types";
import {
  Layers2,
  LayoutDashboard,
  NotebookText,
  Users,
  Utensils,
} from "lucide-react";

export const adminNavItem: iNavItem[] = [
  { name: "Dashboard", routes: "/admin/dashboard", icon: LayoutDashboard },
  { name: "User", routes: "/admin/user", icon: Users },
  { name: "Category", routes: "/admin/category", icon: Layers2 },
  { name: "Menu", routes: "/admin/menu", icon: Utensils },
  { name: "Order", routes: "/admin/order", icon: NotebookText },
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

export const categoryFormDefaultValue: iFormCategory = {
  id: "",
  name: "",
  type: "",
  is_active: true,
};

export const ProtectedRoutes = ["/admin", "/dashboard"];

export const metaDataConfig = {
  category: {
    title: "Category",
    detail: "Detail Category",
    create: "Create Category",
    update: "Update Category",
    description: "Here you can manage your categories",
  },
  menu: {
    title: "Menu",
    detail: "Detail Menu",
    create: "Create Menu",
    update: "Update Menu",
    description: "Here you can manage your menus",
  },
};
