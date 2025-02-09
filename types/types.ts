import { LucideIcon } from "lucide-react";

export interface iNavItem {
  name: string;
  routes: string;
  icon: LucideIcon;
}

export interface iPropsInput<T> {
  label: string;
  type: string;
  name: keyof T;
  placeholder: string;
  value: string;
  setFormValues: React.Dispatch<React.SetStateAction<T>>;
  error?: string[];
  isRequired?: boolean;
  disabled?: boolean;
}

export interface iPropsSelect<T> {
  label: string;
  name: keyof T;
  placeholder: string;
  value: string;
  options: { label: string; value: string }[];
  setFormValues: React.Dispatch<React.SetStateAction<T>>;
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

export interface iFormDetailUser {
  id: string;
  name: string | null;
  gender: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  role: string | null;
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

export interface iFormCategory {
  id: string;
  name: string;
  type: string;
  is_avaliable: boolean;
}

export interface iFormCategoryState {
  error?: { name?: string[]; type?: string[] };
  message?: string;
}

export interface iCategoryTableData {
  id: string;
  no: number;
  name: string;
  type: string;
  is_active: boolean;
  created_by: { id: string; name: string } | null;
  updated_by: { id: string; name: string } | null;
}
