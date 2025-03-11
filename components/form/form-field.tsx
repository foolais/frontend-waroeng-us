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
import { iPropsInput, iPropsSelect } from "@/types/types";
import Image from "next/image";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const FormFieldInput = <T,>(props: iPropsInput<T>) => {
  const {
    label,
    type,
    name,
    placeholder,
    value,
    setFormValues,
    error,
    isRequired = false,
    disabled = false,
    className,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <>
      <Label
        htmlFor={name as string}
        className={isRequired ? "required-field" : ""}
      >
        {label}
      </Label>
      <div className="mb-2">
        <Input
          type={type}
          id={name as string}
          name={name as string}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={className}
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

export const FormFieldSelect = <T,>(props: iPropsSelect<T>) => {
  const {
    label,
    name,
    placeholder,
    value,
    options,
    setFormValues,
    isRequired,
    disabled,
  } = props;

  const handleChange = (value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Label
        htmlFor={name as string}
        className={isRequired ? "required-field" : ""}
      >
        {label}
      </Label>
      <Select name={name as string} value={value} onValueChange={handleChange}>
        <SelectTrigger className="mb-2" disabled={disabled}>
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

export const FormFieldImage = <T,>({
  error,
  isRequired,
  setFormValues,
  image,
  disabled,
}: {
  error?: string[];
  isRequired?: boolean;
  setFormValues: React.Dispatch<React.SetStateAction<T>>;
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
      toast.warning("Image must be less than 5MB");

      // set file input value to empty
      if (fileInputRef.current)
        (fileInputRef.current as HTMLInputElement).value = "";

      return;
    } else if (file && file?.size < 5 * 1024 * 1024) {
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
      <div className="mb-2">
        <div
          className={cn(
            "flex-center relative h-[250px] w-[250px] flex-col gap-4 rounded-xl border-2 border-dashed",
            !disabled ? "cursor-pointer" : "",
          )}
          onClick={handleUploadClick}
        >
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Preview"
              className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
              width={150}
              height={150}
              loading="lazy"
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
