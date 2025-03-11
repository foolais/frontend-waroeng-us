"use client";

import { useActionState, useState } from "react";
import { Card, CardTitle } from "../ui/card";
import { FormFieldInput } from "../form/form-field";
import FormButton from "../button/form-button";
import { createStore } from "@/lib/actions/storeActions";

interface iFormCreateStore {
  name: string;
}

const CardCreateStore = () => {
  const [formValues, setFormValues] = useState<iFormCreateStore>({
    name: "",
  });

  const [state, formAction, isPending] = useActionState(createStore, null);

  return (
    <Card className="p-6">
      <CardTitle className="text-sub-heading mb-4 text-center">
        Create your own Store
      </CardTitle>
      <form action={formAction}>
        <FormFieldInput
          label="Name"
          type="text"
          name="name"
          placeholder="Store Name"
          value={formValues.name}
          setFormValues={setFormValues}
          error={state?.error?.name}
          className="bg-white"
        />
        <FormButton
          className="mt-2 w-full"
          text="Create Store"
          textLoading="Creating..."
          pending={isPending}
        />
      </form>
    </Card>
  );
};

export default CardCreateStore;
