import React, { useState } from "react";
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
import Image from "next/image";

export const FormFieldInput = (props: iPropsInput) => {
  const {
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    isRequired = false,
  } = props;

  return (
    <>
      <Label htmlFor={name} className={isRequired ? "required-field" : ""}>
        {label}
      </Label>
      <div>
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
            <span className="form-field-error">{error.join(" & ")}</span>
          </div>
        )}
      </div>
    </>
  );
};

export const FormFieldSelect = (props: iPropsSelect) => {
  const { label, name, placeholder, value, options, onChange, isRequired } =
    props;

  return (
    <>
      <Label htmlFor={name} className={isRequired ? "required-field" : ""}>
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
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
    </>
  );
};

export const FormFieldImage = ({
  error,
  isRequired,
}: {
  error?: string[];
  isRequired?: boolean;
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file?.size > 5 * 1024 * 1024) {
      // add alert in future
      return alert("Image must be less than 5MB");
    }
    if (file && file?.size < 5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Label htmlFor="image" className={isRequired ? "required-field" : ""}>
        Image
      </Label>
      <div>
        <Input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div className="relative mt-4 flex aspect-square h-60 w-60">
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        )}
        {error && (
          <div aria-live="polite" aria-atomic="true">
            <span className="form-field-error">{error.join(" & ")}</span>
          </div>
        )}
      </div>
    </>
  );
};
