"use client";

import { useActionState, useEffect, useState } from "react";
import FormFieldCategory from "./form-field-category";
import { iFormCategory } from "@/types/types";
import { categoryFormDefaultValue } from "@/lib/constant";
import FormButton from "@/components/button/form-button";
import { createCategory } from "@/lib/actions/categoryActions";
import { toast } from "sonner";

const FormCreateCategory = () => {
  const [formValues, setFormValues] = useState<iFormCategory>(
    categoryFormDefaultValue,
  );

  const [state, formAction, isPending] = useActionState(createCategory, null);

  useEffect(() => {
    if (!state?.success && state?.message) {
      toast.error(state?.message as string);
    }
  }, [state]);

  return (
    <div className="form-container">
      <form
        id="category-form"
        action={formAction}
        className="form-category-container"
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
