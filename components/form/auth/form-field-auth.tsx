import {
  iFormLogin,
  iFormLoginState,
  iFormRegister,
  iFormRegisterState,
} from "@/types/types";
import { FormFieldInput } from "../form-field";

interface iFormFieldAuth<T extends iFormRegister | iFormLogin> {
  type: "register" | "login";
  state?: T extends iFormRegister
    ? iFormRegisterState | null
    : iFormLoginState | null;
  setFormValues?: React.Dispatch<React.SetStateAction<T>>;
  formValues: T;
}

const FormFieldAuth = <T extends iFormRegister | iFormLogin>({
  type,
  state,
  setFormValues,
  formValues,
}: iFormFieldAuth<T>) => {
  return (
    <>
      {type === "register" && (
        <FormFieldInput
          label="Name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={(formValues as iFormRegister).name}
          setFormValues={
            setFormValues as React.Dispatch<React.SetStateAction<iFormRegister>>
          }
          error={(state as iFormRegisterState)?.error?.name}
        />
      )}
      <FormFieldInput
        label="Email"
        type="email"
        name="email"
        placeholder="johndoe@example.com"
        value={formValues.email}
        setFormValues={setFormValues as React.Dispatch<React.SetStateAction<T>>}
        error={state?.error?.email}
      />
      <FormFieldInput
        label="Password"
        type="password"
        name="password"
        placeholder="********"
        value={formValues.password}
        setFormValues={setFormValues as React.Dispatch<React.SetStateAction<T>>}
        error={state?.error?.password}
      />
      {type === "register" && (
        <FormFieldInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="********"
          value={(formValues as iFormRegister).confirmPassword}
          setFormValues={
            setFormValues as React.Dispatch<React.SetStateAction<iFormRegister>>
          }
          error={(state as iFormRegisterState)?.error?.confirmPassword}
        />
      )}
    </>
  );
};

export default FormFieldAuth;
