"use client";

import { menuFormDefaultValue } from "@/lib/constant";
import FormFieldMenu from "./form-field-menu";
import { iFormMenu } from "@/types/types";
import { useActionState, useEffect, useState } from "react";
import { createMenu } from "@/lib/actions/menuActions";
import FormButton from "@/components/button/form-button";
import { toast } from "sonner";

const FormCreateMenu = () => {
  const [formValues, setFormValues] = useState<iFormMenu>(menuFormDefaultValue);

  const [state, formAction, isPending] = useActionState(
    createMenu.bind(null, formValues),
    null,
  );

  useEffect(() => {
    if (!state?.success && state?.message) {
      toast.error(state?.message as string);
    }
  }, [state]);

  return (
    <div className="form-container mt-4">
      <form id="menu-form" action={formAction} className="form-menu-container">
        <FormFieldMenu
          state={state}
          setFormValues={setFormValues}
          type="create"
          formValues={formValues}
        />
      </form>
      <FormButton
        className="mt-4 w-full"
        text="Create Menu"
        textLoading="Creating..."
        pending={isPending}
        form="menu-form"
      />
    </div>
  );
};

export default FormCreateMenu;
