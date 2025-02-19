"use client";

import { iFormUser } from "@/types/types";
import React, { useActionState, useState } from "react";
import FormFieldUser from "./form-field-user";
import FormButton from "@/components/button/form-button";
import { updateUser } from "@/lib/actions/userActions";

const FormUpdateUser = ({ user }: { user: iFormUser }) => {
  const [formValues, setFormValues] = useState<iFormUser>(user);

  const [state, formAction, isPending] = useActionState(
    updateUser.bind(null, formValues),
    null,
  );

  return (
    <div className="form-container">
      <form id="user-form" action={formAction} className="form-user-container">
        <FormFieldUser
          state={state}
          type="update"
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </form>
      <FormButton
        className="mt-4 w-full"
        text="Update User"
        textLoading="Updating..."
        pending={isPending}
        form="user-form"
      />
    </div>
  );
};

export default FormUpdateUser;
