import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { iPropsInput, iPropsSelect } from "@/types/types";

export const FormFieldInput = (props: iPropsInput) => {
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

export const FormFieldSelect = (props: iPropsSelect) => {
  const { label, name, placeholder, value, options, onChange } = props;

  return (
    <div className="w-full">
      <Label htmlFor={name}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

interface iPropsFile {
  error?: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormFieldImage = (props: iPropsFile) => {
  const { error, onChange } = props;
  return (
    <div className="w-full">
      <Label htmlFor="image">Image</Label>
      <Input type="file" id="image" name="image" onChange={onChange} />
      {error && (
        <div aria-live="polite" aria-atomic="true">
          <span className="mt-2 text-sm text-red-500">{error.join(" & ")}</span>
        </div>
      )}
    </div>
  );
};
