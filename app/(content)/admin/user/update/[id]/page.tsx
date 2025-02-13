import NavBackButton from "@/components/button/nav-back-button";
import FormUpdateUser from "@/components/form/user/form-update-user";
import PathHeading from "@/components/header/path-heading";
import { getUserById } from "@/lib/actions/userActions";
import { metaDataConfig } from "@/lib/constant";
import { ArrowLeft } from "lucide-react";
import React from "react";

const { user: userConfig } = metaDataConfig;

export const metadata = {
  title: userConfig.title + " - Waroeng Us",
  description: userConfig.description,
};

const UpdateUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const user = await getUserById(id);

  return (
    <main className="content-container">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/user">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading
          title={userConfig.update}
          description={userConfig.description}
        />
      </div>
      {user && <FormUpdateUser user={user} />}
    </main>
  );
};

export default UpdateUserPage;
