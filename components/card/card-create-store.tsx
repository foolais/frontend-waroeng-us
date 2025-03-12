"use client";

import { useActionState, useEffect, useState } from "react";
import { Card, CardTitle } from "../ui/card";
import { FormFieldInput } from "../form/form-field";
import FormButton from "../button/form-button";
import { createStore } from "@/lib/actions/storeActions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface iFormCreateStore {
  name: string;
}

const CardCreateStore = () => {
  const [formValues, setFormValues] = useState<iFormCreateStore>({
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [state, formAction, isPending] = useActionState(createStore, null);

  const { data: session, update } = useSession();
  const router = useRouter();

  useEffect(() => {
    const updateSession = async () => {
      if (session && state?.success && session?.user?.store_id === null) {
        setIsLoading(true);
        state.success = false;
        await update({
          ...session,
          user: {
            ...session?.user,
            store_id: state.store.id,
          },
        });
      }
    };

    updateSession();

    if (session?.user.store_id !== null && state?.store?.name !== "") {
      setIsLoading(false);
      toast.success(`Successfully Create ${state?.store?.name}`);
      router.push(`/${session?.user.store_id}/admin/dashboard`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state,
    state?.success,
    session?.user?.store_id,
    update,
    session,
    state?.store?.id,
  ]);

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
          error={
            typeof state?.error === "object" ? state?.error?.name : undefined
          }
          className="bg-white"
        />
        <FormButton
          className="mt-2 w-full"
          text="Create Store"
          textLoading="Creating..."
          pending={isPending || isLoading}
        />
      </form>
      <button onClick={() => console.log(session)}>tes</button>
    </Card>
  );
};

export default CardCreateStore;
