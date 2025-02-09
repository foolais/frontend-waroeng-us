import NavBackButton from "@/components/button/nav-back-button";
import FormUpdateUser from "@/components/form/user/form-update-user";
import PathHeading from "@/components/header/path-heading";
import { getUserById } from "@/lib/actions/userActions";
import { ArrowLeft } from "lucide-react";
import React from "react";

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
          title="Update User"
          description="See who's on your team and easily update their information."
        />
      </div>
      {user && <FormUpdateUser user={user} />}
    </main>
  );
};

export default UpdateUserPage;
