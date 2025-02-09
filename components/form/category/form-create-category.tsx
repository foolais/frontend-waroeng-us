"use client";

import { useActionState, useState } from "react";
import FormFieldCategory from "./form-field-category";
import { iFormCategory } from "@/types/types";
import { categoryFormDefaultValue } from "@/lib/constant";
import FormButton from "@/components/button/form-button";
import { createCategory } from "@/lib/actions/categoryActions";

const FormCreateCategory = () => {
  const [formValues, setFormValues] = useState<iFormCategory>(
    categoryFormDefaultValue,
  );

  const [state, formAction, isPending] = useActionState(createCategory, null);

  return (
    <div className="form-container">
      <form
        id="category-form"
        action={formAction}
        className="form-grid max-h-[60vh] sm:max-h-[77vh]"
      >
        <FormFieldCategory
          state={state}
          setFormValues={setFormValues}
          type="create"
          formValues={formValues}
        />
      </form>
      <FormButton
        className="mt-4 w-full"
        text="Create Category"
        textLoading="Creating..."
        pending={isPending}
        form="category-form"
      />
    </div>
  );
};

export default FormCreateCategory;
