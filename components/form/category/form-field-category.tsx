import { iFormCategory, iFormCategoryState } from "@/types/types";
import { FormFieldInput, FormFieldSelect } from "../form-field";

interface iFormFieldCategory {
  type: "create" | "update" | "detail";
  state?: iFormCategoryState | null;
  setFormValues?: React.Dispatch<React.SetStateAction<iFormCategory>>;
  formValues: iFormCategory;
}

const FormFieldCategory = ({
  type,
  state,
  setFormValues,
  formValues,
}: iFormFieldCategory) => {
  const isDetail = type === "detail";
  return (
    <>
      <FormFieldInput<iFormCategory>
        isRequired
        label="Name"
        type="text"
        name="name"
        placeholder={isDetail ? "-" : "Makanan"}
        value={formValues.name}
        setFormValues={setFormValues ?? (() => {})}
        error={state?.error?.name}
        disabled={isDetail}
      />
      <FormFieldSelect<iFormCategory>
        isRequired
        label="Type"
        name="type"
        placeholder={isDetail ? "-" : "Menu"}
        value={formValues.type}
        options={[{ label: "Menu", value: "menu" }]}
        setFormValues={setFormValues ?? (() => {})}
        disabled={isDetail}
      />
    </>
  );
};

export default FormFieldCategory;
