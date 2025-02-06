import NavBackButton from "@/components/button/nav-back-button";
import FormDetailUser from "@/components/form/user/form-detail-user";
import PathHeading from "@/components/header/path-heading";
import { getUserById } from "@/lib/actions/userActions";
import { ArrowLeft } from "lucide-react";

const UserDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const user = await getUserById(id);

  return (
    <main className="content-container w-full">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/user">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading
          title="Detail User"
          description="See who's on your team and easily update their information."
        />
      </div>
      {user && <FormDetailUser user={user} />}
    </main>
  );
};

export default UserDetail;
