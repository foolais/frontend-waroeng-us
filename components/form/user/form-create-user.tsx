"use client";

import FormButton from "@/components/button/form-button";
import { createUser } from "@/lib/actions/userActions";
import { userFormDefaultValue } from "@/lib/constant";
import { iFormUser } from "@/types/types";
import { useActionState, useState } from "react";
import FormFieldUser from "./form-field-user";

const FormCreateUser = () => {
  const [formValues, setFormValues] = useState<iFormUser>(userFormDefaultValue);

  const [state, formAction, isPending] = useActionState(
    createUser.bind(null, formValues),
    null,
  );

  return (
    <div className="form-container">
      <form id="user-form" action={formAction} className="form-user-container">
        <FormFieldUser
          state={state}
          setFormValues={setFormValues}
          type="create"
          formValues={formValues}
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

export default FormCreateUser;
