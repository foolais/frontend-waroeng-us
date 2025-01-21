import NavBackButton from "@/components/button/nav-back-button";
import FormUser from "@/components/form/form-user";
import PathHeading from "@/components/header/path-heading";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Create User - Waroeng Us",
  description: "Get a quick overview of how your business is doing",
};

const CreateUserPage = () => {
  return (
    <main className="w-full">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/user">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading
          title="Create User"
          description="Let's add a new member to the team. On this page, you'll easily create a new user account."
        />
      </div>
      <FormUser />
    </main>
  );
};

export default CreateUserPage;
