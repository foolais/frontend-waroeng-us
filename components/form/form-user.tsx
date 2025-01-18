"use client";

import { createUser } from "@/lib/actions";
import { useActionState, useState } from "react";
import { iFormUser } from "@/types/types";
import { FormFieldImage, FormFieldInput, FormFieldSelect } from "./form-field";
import ActionButton from "../button/action-button";
import Image from "next/image";

const defaultValue = {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
  gender: "male",
  role: "user",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormUser = () => {
  const [formValues, setFormValues] = useState<iFormUser>(defaultValue);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [state, formAction, isPending] = useActionState(createUser, null);

  const hadleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

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
    <form
      action={formAction}
      className="overflow-form relative flex flex-col gap-2"
    >
      <div className="flex-center relative w-full flex-col gap-4">
        <FormFieldImage
          error={state?.error?.image}
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div className="relative mb-4 aspect-square h-60 w-60">
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex-center flex-col gap-4 sm:flex-row">
        <FormFieldInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="John Doe"
          value={formValues.firstName}
          onChange={hadleInputChange}
          error={state?.error?.firstName}
        />

        <FormFieldInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Smith"
          value={formValues.lastName}
          onChange={hadleInputChange}
          error={state?.error?.lastName}
        />
      </div>
      <FormFieldSelect
        label="Gender"
        name="gender"
        placeholder="Male"
        value={formValues?.gender}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        onChange={(value) => handleSelect("gender", value)}
      />
      <FormFieldInput
        label="Address"
        type="text"
        name="address"
        placeholder="yogyakarta"
        value={formValues.address}
        onChange={hadleInputChange}
        error={state?.error?.address}
      />
      <FormFieldInput
        label="Phone Number"
        type="number"
        name="phone"
        placeholder="0123456789"
        value={formValues.phone}
        onChange={hadleInputChange}
        error={state?.error?.phone}
      />
      <FormFieldInput
        label="Email"
        type="email"
        name="email"
        placeholder="johndoe@me.com"
        value={formValues.email}
        onChange={hadleInputChange}
        error={state?.error?.email}
      />
      <FormFieldSelect
        label="Role"
        name="role"
        placeholder="User"
        value={formValues?.role}
        options={[
          { label: "User", value: "user" },
          { label: "Admin", value: "admin" },
        ]}
        onChange={(value) => handleSelect("user", value)}
      />
      <FormFieldInput
        label="Password"
        type="password"
        name="password"
        placeholder="*******"
        value={formValues.password}
        onChange={hadleInputChange}
        error={state?.error?.password}
      />

      <FormFieldInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="*******"
        value={formValues.confirmPassword}
        onChange={hadleInputChange}
        error={state?.error?.confirmPassword}
      />
      <ActionButton
        className="mt-4"
        text="Create User"
        textLoading="Creating..."
        pending={isPending}
      />
    </form>
  );
};

export default FormUser;
