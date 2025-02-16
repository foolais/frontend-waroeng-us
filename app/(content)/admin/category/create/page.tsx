import NavBackButton from "@/components/button/nav-back-button";
import FormCreateCategory from "@/components/form/category/form-create-category";
import PathHeading from "@/components/header/path-heading";
import { ArrowLeft } from "lucide-react";
import { metaDataConfig } from "@/lib/constant";

export const metadata = {
  title: metaDataConfig.category.create + " - Waroeng Us",
  description: metaDataConfig.category.description,
};

const CreateUserPage = () => {
  const { category: categoryConfig } = metaDataConfig;
  return (
    <main className="content-container">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/category">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading
          title={categoryConfig.create}
          description={categoryConfig.description}
        />
      </div>
      <FormCreateCategory />
    </main>
  );
};

export default CreateUserPage;
