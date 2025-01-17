import { LucideIcon } from "lucide-react";

export interface iNavItem {
  name: string;
  routes: string;
  icon: LucideIcon;
}

export interface iHeadingItem {
  name: string;
  description: string;
  routes: string;
}
