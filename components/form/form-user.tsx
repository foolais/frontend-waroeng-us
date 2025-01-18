"use client";

import { Button } from "@/components/ui/button";
import { createUser } from "@/lib/actions";
import { useActionState, useState } from "react";
import { iFormUser } from "@/types/types";
import FormField from "./form-field";

const FormUser = () => {
  const [formValues, setFormValues] = useState<iFormUser>({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [state, formAction] = useActionState(createUser, null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form action={formAction} className="overflow-form flex flex-col gap-2">
      <div className="flex-center flex-col gap-4 sm:flex-row">
        <FormField
          label="First Name"
          type="text"
          name="firstName"
          placeholder="John Doe"
          value={formValues.firstName}
          onChange={handleChange}
          error={state?.error?.firstName}
        />
        <FormField
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Smith"
          value={formValues.lastName}
          onChange={handleChange}
          error={state?.error?.lastName}
        />
      </div>
      <FormField
        label="Email"
        type="email"
        name="email"
        placeholder="johndoe@me.com"
        value={formValues.email}
        onChange={handleChange}
        error={state?.error?.email}
      />
      <FormField
        label="Address"
        type="text"
        name="address"
        placeholder="yogyakarta"
        value={formValues.address}
        onChange={handleChange}
        error={state?.error?.address}
      />
      <FormField
        label="Phone Number"
        type="number"
        name="phone"
        placeholder="0123456789"
        value={formValues.phone}
        onChange={handleChange}
        error={state?.error?.phone}
      />

      <FormField
        label="Password"
        type="password"
        name="password"
        placeholder="*******"
        value={formValues.password}
        onChange={handleChange}
        error={state?.error?.password}
      />

      <FormField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="*******"
        value={formValues.confirmPassword}
        onChange={handleChange}
        error={state?.error?.confirmPassword}
      />
      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
};

export default FormUser;
