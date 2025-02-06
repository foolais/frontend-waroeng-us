import { iFormUser, iFormUserState } from "@/types/types";
import { FormFieldImage, FormFieldInput, FormFieldSelect } from "../form-field";

interface iFormFieldUser {
  type: "create" | "update" | "detail";
  state: iFormUserState | null;
  setFormValues: React.Dispatch<React.SetStateAction<iFormUser>>;
  formValues: iFormUser;
}

const FormFieldUser = ({
  type,
  state,
  setFormValues,
  formValues,
}: iFormFieldUser) => {
  return (
    <>
      <FormFieldImage
        error={state?.error?.image}
        setFormValues={setFormValues}
        image={formValues?.image}
        disabled={type === "detail"}
      />
      <FormFieldInput
        isRequired
        label="Name"
        type="text"
        name="name"
        placeholder="John Doe"
        value={formValues.name}
        setFormValues={setFormValues}
        error={state?.error?.name}
        disabled={type === "detail"}
      />
      <FormFieldSelect
        isRequired
        label="Gender"
        name="gender"
        placeholder="Male"
        value={formValues.gender}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        setFormValues={setFormValues}
        disabled={type === "detail"}
      />
      <FormFieldInput
        label="Address"
        type="text"
        name="address"
        placeholder="yogyakarta"
        value={formValues.address ?? ""}
        setFormValues={setFormValues}
        error={state?.error?.address}
        disabled={type === "detail"}
      />
      <FormFieldInput
        label="Phone Number"
        type="number"
        name="phone"
        placeholder="0123456789"
        value={formValues.phone ?? ""}
        setFormValues={setFormValues}
        error={state?.error?.phone}
        disabled={type === "detail"}
      />
      <FormFieldInput
        isRequired
        label="Email"
        type="email"
        name="email"
        placeholder="johndoe@me.com"
        value={formValues.email}
        setFormValues={setFormValues}
        error={state?.error?.email}
        disabled={type === "detail"}
      />
      <FormFieldSelect
        isRequired
        label="Role"
        name="role"
        placeholder="User"
        value={formValues?.role}
        options={[
          { label: "User", value: "user" },
          { label: "Admin", value: "admin" },
        ]}
        setFormValues={setFormValues}
        disabled={type === "detail"}
      />
      {type === "create" && (
        <>
          <FormFieldInput
            isRequired
            label="Password"
            type="password"
            name="password"
            placeholder="*******"
            value={formValues.password}
            setFormValues={setFormValues}
            error={state?.error?.password}
          />

          <FormFieldInput
            isRequired
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="*******"
            value={formValues.confirmPassword}
            setFormValues={setFormValues}
            error={state?.error?.confirmPassword}
          />
        </>
      )}
    </>
  );
};

export default FormFieldUser;
