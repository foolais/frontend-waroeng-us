"use client";

import { loginCredentials } from "@/lib/actions/authActions";
import { iFormLogin } from "@/types/types";
import { useActionState, useState } from "react";
import FormFieldAuth from "./form-field-auth";
import FormButton from "@/components/button/form-button";

const FormLogin = () => {
  const [formValues, setFormValues] = useState<iFormLogin>({
    email: "",
    password: "",
  });

  const [state, formAction, isPending] = useActionState(loginCredentials, null);

  return (
    <form action={formAction}>
      {state?.message ? (
        <div className="mb-4 bg-red-100 p-4 text-sm text-red-800" role="alert">
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}
      <FormFieldAuth
        type="login"
        state={state}
        setFormValues={setFormValues}
        formValues={formValues}
      />
      <FormButton
        className="mt-4 w-full"
        text="Login"
        textLoading="Logging..."
        pending={isPending}
      />
    </form>
  );
};

export default FormLogin;
