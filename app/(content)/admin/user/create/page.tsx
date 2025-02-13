import NavBackButton from "@/components/button/nav-back-button";
import FormCreateUser from "@/components/form/user/form-create-user";
import PathHeading from "@/components/header/path-heading";
import { metaDataConfig } from "@/lib/constant";
import { ArrowLeft } from "lucide-react";

const { user: userConfig } = metaDataConfig;

export const metadata = {
  title: userConfig.title + " - Waroeng Us",
  description: userConfig.description,
};

const CreateUserPage = () => {
  return (
    <main className="content-container">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/user">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading
          title={userConfig.create}
          description={userConfig.description}
        />
      </div>
      <FormCreateUser />
    </main>
  );
};

export default CreateUserPage;
