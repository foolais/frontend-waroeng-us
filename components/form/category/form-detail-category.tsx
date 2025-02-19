"use client";

import { iFormCategory } from "@/types/types";
import React, { useState } from "react";
import FormFieldCategory from "./form-field-category";

const FormDetailCategory = ({ category }: { category: iFormCategory }) => {
  const [formValues, setFormValues] = useState<iFormCategory>(category);

  return (
    <div className="form-container">
      <form id="category-form" className="form-category-container">
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
