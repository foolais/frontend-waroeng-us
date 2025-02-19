"use client";

import { updateCategory } from "@/lib/actions/categoryActions";
import { iFormCategory } from "@/types/types";
import { useActionState, useEffect, useState } from "react";
import FormFieldCategory from "./form-field-category";
import FormButton from "@/components/button/form-button";
import { toast } from "sonner";

const FormUpdateCategory = ({ category }: { category: iFormCategory }) => {
  const [formValues, setFormValues] = useState<iFormCategory>(category);

  const [state, formAction, isPending] = useActionState(
    updateCategory.bind(null, category.id),
    null,
  );

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
          type="update"
          formValues={formValues}
        />
      </form>
      <FormButton
        className="mt-4 w-full"
        text="Update Category"
        textLoading="Updating..."
        pending={isPending}
        form="category-form"
      />
    </div>
  );
};

export default FormUpdateCategory;
