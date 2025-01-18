"use client";

import { createUser } from "@/lib/actions";
import { useActionState, useState } from "react";
import { iFormUser } from "@/types/types";
import { FormFieldImage, FormFieldInput, FormFieldSelect } from "./form-field";
import ActionButton from "../button/action-button";

const defaultValue = {
  firstName: "John Doe",
  lastName: "Smith",
  gender: "male",
  address: "Yogyakarta",
  phone: "014812481241",
  email: "john@doe.com",
  role: "user",
  password: "123",
  confirmPassword: "123",
};

// const emptyValue = {
//   firstName: "",
//   lastName: "",
//   address: "",
//   phone: "",
//   gender: "male",
//   role: "user",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

const FormUser = () => {
  const [formValues, setFormValues] = useState<iFormUser>(defaultValue);
  const [state, formAction, isPending] = useActionState(createUser, null);

  const hadleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form action={formAction} className="overflow-form flex flex-col gap-2">
      <FormFieldImage error={state?.error?.image} />
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
