"use client";

import { iFormMenu } from "@/types/types";
import { useState } from "react";
import FormFieldMenu from "./form-field-menu";

const FormDetailMenu = ({ menu }: { menu: iFormMenu }) => {
  const [formValues, setFormValues] = useState<iFormMenu>(menu);

  return (
    <div className="form-container mt-4">
      <form id="menu-form" className="form-grid max-h-[70vh] sm:max-h-[77vh]">
        <FormFieldMenu
          setFormValues={setFormValues}
          type="detail"
          formValues={formValues}
        />
      </form>
    </div>
  );
};

export default FormDetailMenu;
