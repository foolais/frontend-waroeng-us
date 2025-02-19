import FormUpdateUser from "@/components/form/user/form-update-user";
import ContentHeader from "@/components/header/content-header";
import { getUserById } from "@/lib/actions/userActions";
import { metaDataConfig } from "@/lib/constant";
import React from "react";

const { user: userConfig } = metaDataConfig;

export const metadata = {
  title: userConfig.update + " - Waroeng Us",
  description: userConfig.description,
};

const UpdateUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const user = await getUserById(id);

  return (
    <main className="content-container">
      <ContentHeader
        title={userConfig.update}
        description={userConfig.description}
        routesBack="/admin/user"
      />
      {user && <FormUpdateUser user={user} />}
    </main>
  );
};

export default UpdateUserPage;
