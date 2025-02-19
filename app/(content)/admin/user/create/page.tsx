import FormCreateUser from "@/components/form/user/form-create-user";
import ContentHeader from "@/components/header/content-header";
import { metaDataConfig } from "@/lib/constant";

const { user: userConfig } = metaDataConfig;

export const metadata = {
  title: userConfig.create + " - Waroeng Us",
  description: userConfig.description,
};

const CreateUserPage = () => {
  return (
    <main className="content-container">
      <ContentHeader
        title={userConfig.create}
        description={userConfig.description}
        routesBack="/admin/user"
      />
      <FormCreateUser />
    </main>
  );
};

export default CreateUserPage;
