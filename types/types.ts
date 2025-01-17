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

export interface iFormUser {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iFormUserState {
  error?: {
    firstName?: string;
    lastName?: string;
    address?: string;
    phone?: string;
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string;
}
