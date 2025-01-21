import { LucideIcon } from "lucide-react";

export interface iNavItem {
  name: string;
  routes: string;
  icon: LucideIcon;
}

export interface iFormUser {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  role: string;
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
  gender: string;
  email: string;
  role: string;
};
