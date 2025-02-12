"use client";

import { registerCredentials } from "@/lib/actions/authActions";
import { iFormRegister } from "@/types/types";
import { useActionState, useEffect, useState } from "react";
import FormFieldAuth from "./form-field-auth";
import FormButton from "@/components/button/form-button";
import { toast } from "sonner";
const FormRegister = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formValues, setFormValues] = useState<iFormRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [state, formAction, isPending] = useActionState(
    registerCredentials,
    null,
  );

  useEffect(() => {
    if (state?.error) toast.error(state?.message as string);
    else if (state?.success) onSuccess();
  }, [state, onSuccess]);

  return (
    <form action={formAction}>
      <FormFieldAuth
        type="register"
        state={state}
        setFormValues={setFormValues}
        formValues={formValues}
      />
      <FormButton
        className="mt-4 w-full"
        text="Register"
        textLoading="Registering..."
        pending={isPending}
      />
    </form>
  );
};

export default FormRegister;
