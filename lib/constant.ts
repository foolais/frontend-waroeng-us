import { iNavItem, iUserTable } from "@/types/types";
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

export const userDummyData: iUserTable[] = [
  {
    no: 1,
    name: "John Doe",
    gender: "Male",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    no: 2,
    name: "Jane Smith",
    gender: "Female",
    email: "jane.smith@example.com",
    role: "User",
  },
  {
    no: 3,
    name: "Robert Johnson",
    gender: "Male",
    email: "robert.johnson@example.com",
    role: "User",
  },
  {
    no: 4,
    name: "Emily Davis",
    gender: "Female",
    email: "emily.davis@example.com",
    role: "Admin",
  },
  {
    no: 5,
    name: "Michael Brown",
    gender: "Male",
    email: "michael.brown@example.com",
    role: "Admin",
  },
];
