import { LucideIcon } from "lucide-react";

export interface iNavItem {
  name: string;
  routes: string;
  icon: LucideIcon;
}

export interface iFormUser {
  name: string;
  gender: string;
  address: string | null;
  phone: string | null;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
  image: File | string | null;
  id?: string;
}

export interface iFormUserState {
  error?: {
    name?: string[];
    address?: string[];
    phone?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    image?: string[];
  };
  message?: string;
}

export interface iPropsInput {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  setFormValues: React.Dispatch<React.SetStateAction<iFormUser>>;
  error?: string[];
  isRequired?: boolean;
  disabled?: boolean;
}

export interface iPropsSelect {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  options: { label: string; value: string }[];
  setFormValues: React.Dispatch<React.SetStateAction<iFormUser>>;
  isRequired?: boolean;
  disabled?: boolean;
}

export type iUserTable = {
  no: number;
  name: string;
  gender: "male" | "female";
  email: string;
  role: "admin" | "user";
};
