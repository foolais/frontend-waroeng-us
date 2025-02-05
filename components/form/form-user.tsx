"use client";

import { createUser } from "@/lib/actions/userActions";
import { useActionState, useState } from "react";
import { iFormUser } from "@/types/types";
import { FormFieldImage, FormFieldInput, FormFieldSelect } from "./form-field";
import FormButton from "../button/form-button";

const defaultValue: iFormUser = {
  name: "",
  address: "",
  phone: "",
  gender: "male",
  role: "user",
  email: "",
  password: "",
  confirmPassword: "",
  image: null,
};

interface iFormUserProps {
  type: "create" | "update" | "detail";
  intialValues?: iFormUser;
}

const FormUser = ({ type, intialValues }: iFormUserProps) => {
  const [formValues, setFormValues] = useState<iFormUser>(
    intialValues || defaultValue,
  );

  const [state, formAction, isPending] = useActionState(
    createUser.bind(null, formValues),
    null,
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <FormFieldImage
          error={state?.error?.image}
          setFormValues={setFormValues}
          image={formValues?.image}
          disabled={type === "detail"}
        />
        <FormFieldInput
          isRequired
          label="Name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={formValues.name}
          onChange={handleInput}
          error={state?.error?.name}
          disabled={type === "detail"}
        />
        <FormFieldSelect
          isRequired
          label="Gender"
          name="gender"
          placeholder="Male"
          value={formValues.gender}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          onChange={(value) => handleSelect("gender", value)}
          disabled={type === "detail"}
        />
        <FormFieldInput
          label="Address"
          type="text"
          name="address"
          placeholder="yogyakarta"
          value={formValues.address ?? ""}
          onChange={handleInput}
          error={state?.error?.address}
          disabled={type === "detail"}
        />
        <FormFieldInput
          label="Phone Number"
          type="number"
          name="phone"
          placeholder="0123456789"
          value={formValues.phone ?? ""}
          onChange={handleInput}
          error={state?.error?.phone}
          disabled={type === "detail"}
        />
        <FormFieldInput
          isRequired
          label="Email"
          type="email"
          name="email"
          placeholder="johndoe@me.com"
          value={formValues.email}
          onChange={handleInput}
          error={state?.error?.email}
          disabled={type === "detail"}
        />
        <FormFieldSelect
          isRequired
          label="Role"
          name="role"
          placeholder="User"
          value={formValues?.role}
          options={[
            { label: "User", value: "user" },
            { label: "Admin", value: "admin" },
          ]}
          onChange={(value) => handleSelect("role", value)}
          disabled={type === "detail"}
        />
        {type === "create" && (
          <>
            <FormFieldInput
              isRequired
              label="Password"
              type="password"
              name="password"
              placeholder="*******"
              value={formValues.password}
              onChange={handleInput}
              error={state?.error?.password}
            />

            <FormFieldInput
              isRequired
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="*******"
              value={formValues.confirmPassword}
              onChange={handleInput}
              error={state?.error?.confirmPassword}
            />
          </>
        )}
      </form>
      {type !== "detail" && (
        <FormButton
          className="mt-4 w-full"
          text="Create User"
          textLoading="Creating..."
          pending={isPending}
          form="user-form"
        />
      )}
    </div>
  );
};

export default FormUser;
