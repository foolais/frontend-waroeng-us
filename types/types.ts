import { LucideIcon } from "lucide-react";

export interface iNavItem {
  name: string;
  routes: string;
  icon: LucideIcon;
}

export interface iFormUser {
  name: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
  image: File | null;
}

export interface iFormUserState {
  error?: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string;
}

export interface iPropsInput {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string[];
  isRequired?: boolean;
}

export interface iPropsSelect {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  isRequired?: boolean;
}

export type iUserTable = {
  no: number;
  name: string;
  gender: "male" | "female";
  email: string;
  role: "admin" | "user";
};
