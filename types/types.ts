import { LucideIcon } from "lucide-react";

export interface iNavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
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

export interface iFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iFormRegisterState {
  error?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string;
  success?: boolean;
}

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iFormLoginState {
  error?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
  success?: boolean;
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
  is_active: boolean;
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

export interface iListCategories {
  id: string;
  name: string;
}

export interface iFormMenu {
  id: string;
  name: string;
  price: string;
  category: string | null;
  image: File | string | null;
}

export interface iFormMenuState {
  success?: boolean;
  error?: {
    name?: string[];
    price?: string[];
    category?: string[];
    image?: string[];
  };
  message?: string;
}

export interface iMenuTableData {
  id: string;
  no: number;
  name: string;
  price: string;
  category: { id: string; name: string };
  is_available: boolean;
  image: string | null;
  created_by: { id: string; name: string } | null;
  updated_by: { id: string; name: string } | null;
}
