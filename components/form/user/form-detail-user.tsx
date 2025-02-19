"use client";

import { iFormUser } from "@/types/types";
import React, { useState } from "react";
import FormFieldUser from "./form-field-user";

const FormDetailUser = ({ user }: { user: iFormUser }) => {
  const [formValues, setFormValues] = useState<iFormUser>(user);

  return (
    <div className="form-container">
      <form id="user-form" className="form-user-container">
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
