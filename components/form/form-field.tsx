import React, { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { iFormUser, iPropsInput, iPropsSelect } from "@/types/types";
import Image from "next/image";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

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
    disabled = false,
  } = props;

  return (
    <>
      <Label htmlFor={name} className={isRequired ? "required-field" : ""}>
        {label}
      </Label>
      <div className="mb-1">
        <Input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
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
  const {
    label,
    name,
    placeholder,
    value,
    options,
    onChange,
    isRequired,
    disabled,
  } = props;

  return (
    <>
      <Label htmlFor={name} className={isRequired ? "required-field" : ""}>
        {label}
      </Label>
      <Select name={name} value={value} onValueChange={onChange}>
        <SelectTrigger className="mb-1" disabled={disabled}>
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
  setFormValues,
  image,
  disabled,
}: {
  error?: string[];
  isRequired?: boolean;
  setFormValues: React.Dispatch<React.SetStateAction<iFormUser>>;
  image?: File | string | null;
  disabled?: boolean;
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (image && typeof image === "string") {
      setImagePreview(image);
    }
  }, [image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file?.size > 5 * 1024 * 1024) {
      // add alert in future
      return alert("Image must be less than 5MB");
    }

    if (file && file?.size < 5 * 1024 * 1024) {
      setFormValues((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      (fileInputRef.current as HTMLInputElement).click();
    }
  };

  return (
    <>
      <Label htmlFor="image" className={isRequired ? "required-field" : ""}>
        Image
      </Label>
      <div className="mb-1">
        <div
          className={cn(
            "flex-center relative h-60 w-60 flex-col gap-4 rounded-xl border-2 border-dashed",
            !disabled ? "cursor-pointer" : "",
          )}
          onClick={handleUploadClick}
        >
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="rounded-xl object-cover"
            />
          ) : (
            <>
              <Upload size={40} />
              <p>Upload an image</p>
            </>
          )}
        </div>
        <Input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          ref={fileInputRef}
          disabled={disabled}
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
