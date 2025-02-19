import FormCreateCategory from "@/components/form/category/form-create-category";
import { metaDataConfig } from "@/lib/constant";
import ContentHeader from "@/components/header/content-header";

const { category: categoryConfig } = metaDataConfig;

export const metadata = {
  title: categoryConfig.create + " - Waroeng Us",
  description: categoryConfig.description,
};

const CreateUserPage = () => {
  const { category: categoryConfig } = metaDataConfig;
  return (
    <main className="content-container">
      <ContentHeader
        title={categoryConfig.create}
        description={categoryConfig.description}
        routesBack="/admin/category"
      />
      <FormCreateCategory />
    </main>
  );
};

export default CreateUserPage;
