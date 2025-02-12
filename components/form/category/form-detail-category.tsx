"use client";

import { iFormCategory } from "@/types/types";
import React, { useState } from "react";
import FormFieldCategory from "./form-field-category";

const FormDetailCategory = ({ category }: { category: iFormCategory }) => {
  const [formValues, setFormValues] = useState<iFormCategory>(category);

  return (
    <div>
      <form
        id="category-form"
        className="form-grid max-h-[60vh] sm:max-h-[77vh]"
      >
        <FormFieldCategory
          setFormValues={setFormValues}
          type="detail"
          formValues={formValues}
        />
      </form>
    </div>
  );
};

export default FormDetailCategory;
