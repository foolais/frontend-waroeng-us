import { iFormUser, iFormUserState } from "@/types/types";
import { FormFieldImage, FormFieldInput, FormFieldSelect } from "../form-field";

interface iFormFieldUser {
  type: "create" | "update" | "detail";
  state?: iFormUserState | null;
  setFormValues?: React.Dispatch<React.SetStateAction<iFormUser>>;
  formValues: iFormUser;
}

const FormFieldUser = ({
  type,
  state,
  setFormValues,
  formValues,
}: iFormFieldUser) => {
  const isDetail = type === "detail";

  return (
    <>
      <FormFieldImage
        error={state?.error?.image}
        setFormValues={setFormValues ?? (() => {})}
        image={formValues?.image}
        disabled={isDetail}
      />
      <FormFieldInput<iFormUser>
        isRequired
        label="Name"
        type="text"
        name="name"
        placeholder={isDetail ? "-" : "John Doe"}
        value={formValues.name}
        setFormValues={setFormValues ?? (() => {})}
        error={state?.error?.name}
        disabled={isDetail}
      />
      <FormFieldSelect<iFormUser>
        isRequired
        label="Gender"
        name="gender"
        placeholder={isDetail ? "-" : "Male"}
        value={formValues.gender}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        setFormValues={setFormValues ?? (() => {})}
        disabled={isDetail}
      />
      <FormFieldInput<iFormUser>
        label="Address"
        type="text"
        name="address"
        placeholder={isDetail ? "-" : "Yogyakarta"}
        value={formValues.address ?? ""}
        setFormValues={setFormValues ?? (() => {})}
        error={state?.error?.address}
        disabled={isDetail}
      />
      <FormFieldInput<iFormUser>
        label="Phone Number"
        type="number"
        name="phone"
        placeholder={isDetail ? "-" : "081234567891"}
        value={formValues.phone ?? ""}
        setFormValues={setFormValues ?? (() => {})}
        error={state?.error?.phone}
        disabled={isDetail}
      />
      <FormFieldInput<iFormUser>
        isRequired
        label="Email"
        type="email"
        name="email"
        placeholder={isDetail ? "-" : "johndoe@me.com"}
        value={formValues.email}
        setFormValues={setFormValues ?? (() => {})}
        error={state?.error?.email}
        disabled={isDetail}
      />
      <FormFieldSelect<iFormUser>
        isRequired
        label="Role"
        name="role"
        placeholder={isDetail ? "-" : "User"}
        value={formValues?.role}
        options={[
          { label: "User", value: "user" },
          { label: "Admin", value: "admin" },
        ]}
        setFormValues={setFormValues ?? (() => {})}
        disabled={isDetail}
      />
      {type === "create" && (
        <>
          <FormFieldInput<iFormUser>
            isRequired
            label="Password"
            type="password"
            name="password"
            placeholder="*******"
            value={formValues.password}
            setFormValues={setFormValues ?? (() => {})}
            error={state?.error?.password}
          />

          <FormFieldInput<iFormUser>
            isRequired
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="*******"
            value={formValues.confirmPassword}
            setFormValues={setFormValues ?? (() => {})}
            error={state?.error?.confirmPassword}
          />
        </>
      )}
    </>
  );
};

export default FormFieldUser;
