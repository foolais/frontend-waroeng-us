import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface iProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string[];
}

const FormField = (props: iProps) => {
  const { label, type, name, placeholder, value, onChange, error } = props;

  return (
    <div className="w-full">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <div aria-live="polite" aria-atomic="true">
          <span className="mt-2 text-sm text-red-500">{error.join(" & ")}</span>
        </div>
      )}
    </div>
  );
};

export default FormField;
