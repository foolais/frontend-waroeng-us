import NavBackButton from "@/components/button/nav-back-button";
import FormCreateUser from "@/components/form/user/form-create-user";
import PathHeading from "@/components/header/path-heading";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Create User - Waroeng Us",
  description: "Get a quick overview of how your business is doing",
};

const CreateUserPage = () => {
  return (
    <main className="content-container w-full">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/user">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading
          title="Create User"
          description="Let's add a new member to the team. On this page, you'll easily create a new user account."
        />
      </div>
      <FormCreateUser />
    </main>
  );
};

export default CreateUserPage;
