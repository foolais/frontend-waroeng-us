import FormCreateCategory from "@/components/form/category/form-create-category";
import { metaDataConfig } from "@/lib/constant";
import ContentHeader from "@/components/header/content-header";
import { auth } from "@/auth";

const { category: categoryConfig } = metaDataConfig;

export const metadata = {
  title: categoryConfig.create + " - Waroeng Us",
  description: categoryConfig.description,
};

const CreateUserPage = async () => {
  const session = await auth();
  const storeId = session?.user?.store_id ?? "";

  const { category: categoryConfig } = metaDataConfig;
  return (
    <main className="content-container">
      <ContentHeader
        title={categoryConfig.create}
        description={categoryConfig.description}
        routesBack={`/${storeId}/admin/category`}
      />
      <FormCreateCategory />
    </main>
  );
};

export default CreateUserPage;
