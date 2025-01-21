"use client";

import { createUser } from "@/lib/actions";
import { useActionState, useState } from "react";
import { iFormUser } from "@/types/types";
import { FormFieldImage, FormFieldInput, FormFieldSelect } from "./form-field";
import FormButton from "../button/form-button";

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
  const [state, formAction, isPending] = useActionState(createUser, null);

  const hadleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <form
        id="user-form"
        action={formAction}
        className="form-grid max-h-[60vh] sm:max-h-[75vh]"
      >
        <FormFieldImage error={state?.error?.image} />
        <FormFieldInput
          isRequired={true}
          label="First Name"
          type="text"
          name="firstName"
          placeholder="John Doe"
          value={formValues.firstName}
          onChange={hadleInputChange}
          error={state?.error?.firstName}
        />
        <FormFieldInput
          isRequired={true}
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Smith"
          value={formValues.lastName}
          onChange={hadleInputChange}
          error={state?.error?.lastName}
        />
        <FormFieldInput
          isRequired={true}
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Smith"
          value={formValues.lastName}
          onChange={hadleInputChange}
          error={state?.error?.lastName}
        />
        <FormFieldSelect
          isRequired={true}
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
          isRequired={true}
          label="Email"
          type="email"
          name="email"
          placeholder="johndoe@me.com"
          value={formValues.email}
          onChange={hadleInputChange}
          error={state?.error?.email}
        />
        <FormFieldSelect
          isRequired={true}
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
          isRequired={true}
          label="Password"
          type="password"
          name="password"
          placeholder="*******"
          value={formValues.password}
          onChange={hadleInputChange}
          error={state?.error?.password}
        />

        <FormFieldInput
          isRequired={true}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="*******"
          value={formValues.confirmPassword}
          onChange={hadleInputChange}
          error={state?.error?.confirmPassword}
        />
      </form>
      <FormButton
        className="mt-4 w-full"
        text="Create User"
        textLoading="Creating..."
        pending={isPending}
        form="user-form"
      />
    </div>
  );
};

export default FormUser;
