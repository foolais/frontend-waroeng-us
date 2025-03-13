"use client";

import { iFormMenu, iFormMenuState, iListCategories } from "@/types/types";
import { FormFieldImage, FormFieldInput, FormFieldSelect } from "../form-field";
import { useEffect, useState } from "react";
import { getCategoryByType } from "@/lib/actions/categoryActions";
import { toast } from "sonner";

interface iFormFieldMenu {
  type: "create" | "update" | "detail";
  state?: iFormMenuState | null;
  setFormValues?: React.Dispatch<React.SetStateAction<iFormMenu>>;
  formValues: iFormMenu;
}

const FormFieldMenu = ({
  type,
  state,
  setFormValues,
  formValues,
}: iFormFieldMenu) => {
  const [categories, setCategories] = useState<iListCategories[]>([]);

  const isDetail = type === "detail";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getCategoryByType("menu");

        if (Array.isArray(categoryData)) {
          setCategories(categoryData);
          if (categoryData.length === 0) toast.warning("No category found");

          if (
            categoryData.length > 0 &&
            !formValues.category &&
            type === "create" &&
            setFormValues
          ) {
            setFormValues((prev) => ({
              ...prev,
              category: categoryData[0].id,
            }));
          }
        }
      } catch (error) {
        console.log("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, [formValues.category, setFormValues, type]);

  return (
    <>
      <FormFieldImage<iFormMenu>
        error={state?.error?.image}
        setFormValues={setFormValues ?? (() => {})}
        image={formValues?.image}
        disabled={isDetail}
      />
      <FormFieldInput<iFormMenu>
        isRequired
        label="Name"
        type="text"
        name="name"
        placeholder={isDetail ? "-" : "Bakso"}
        value={formValues.name}
        setFormValues={setFormValues ?? (() => {})}
        error={state?.error?.name}
        disabled={isDetail}
      />
      <FormFieldInput<iFormMenu>
        isRequired
        label="Price"
        type="number"
        name="price"
        placeholder={isDetail ? "-" : "10000"}
        value={formValues.price}
        setFormValues={setFormValues ?? (() => {})}
        error={state?.error?.price}
        disabled={isDetail}
      />
      <FormFieldSelect<iFormMenu>
        isRequired
        label="Category"
        name="category"
        placeholder={isDetail ? "-" : "Select Category"}
        value={formValues.category ?? ""}
        options={categories.map((category) => ({
          label: category.name,
          value: category.id,
        }))}
        setFormValues={setFormValues ?? (() => {})}
        disabled={isDetail}
      />
    </>
  );
};

export default FormFieldMenu;
