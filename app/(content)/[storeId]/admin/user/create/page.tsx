import { auth } from "@/auth";
import FormCreateUser from "@/components/form/user/form-create-user";
import ContentHeader from "@/components/header/content-header";
import { metaDataConfig } from "@/lib/constant";

const { user: userConfig } = metaDataConfig;

export const metadata = {
  title: userConfig.create + " - Waroeng Us",
  description: userConfig.description,
};

const CreateUserPage = async () => {
  const session = await auth();
  const storeId = session?.user?.store_id ?? "";

  return (
    <main className="content-container">
      <ContentHeader
        title={userConfig.create}
        description={userConfig.description}
        routesBack={`/${storeId}/admin/user`}
      />
      <FormCreateUser />
    </main>
  );
};

export default CreateUserPage;
