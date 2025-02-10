"use client";

import { login } from "@/lib/actions/authActions";
import { iFormLogin } from "@/types/types";
import { useActionState, useState } from "react";
import FormFieldAuth from "./form-field-auth";
import FormButton from "@/components/button/form-button";

const FormLogin = () => {
  const [formValues, setFormValues] = useState<iFormLogin>({
    email: "",
    password: "",
  });

  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <form action={formAction}>
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
