"use client";

import { iFormUser } from "@/types/types";
import React, { useState } from "react";
import FormFieldUser from "./form-field-user";

const FormDetailUser = ({ user }: { user: iFormUser }) => {
  const [formValues, setFormValues] = useState<iFormUser>(user);

  return (
    <div>
      <form id="user-form" className="form-grid max-h-[60vh] sm:max-h-[77vh]">
        <FormFieldUser
          type="detail"
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </form>
    </div>
  );
};

export default FormDetailUser;
