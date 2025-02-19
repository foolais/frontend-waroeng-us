"use client";

import { useActionState, useState } from "react";
import FormFieldMenu from "./form-field-menu";
import { iFormMenu } from "@/types/types";
import { updateMenu } from "@/lib/actions/menuActions";
import FormButton from "@/components/button/form-button";

const FormUpdateMenu = ({ menu }: { menu: iFormMenu }) => {
  const [formValues, setFormValues] = useState<iFormMenu>(menu);

  const [state, formAction, isPending] = useActionState(
    updateMenu.bind(null, formValues),
    null,
  );

  return (
    <div className="form-container">
      <form
        id="menu-form"
        action={formAction}
        className="form-grid max-h-[70vh] sm:max-h-[77vh]"
      >
        <FormFieldMenu
          state={state}
          type="update"
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </form>
      <FormButton
        className="mt-4 w-full"
        text="Update Menu"
        textLoading="Updating..."
        pending={isPending}
        form="menu-form"
      />
    </div>
  );
};

export default FormUpdateMenu;
