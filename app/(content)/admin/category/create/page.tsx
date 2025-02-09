import NavBackButton from "@/components/button/nav-back-button";
import FormCreateCategory from "@/components/form/category/form-create-category";
import PathHeading from "@/components/header/path-heading";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Create Category - Waroeng Us",
  description: "Get a quick overview of how your business is doing",
};

const CreateUserPage = () => {
  return (
    <main className="content-container">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/category">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading
          title="Create Category"
          description="Let's add a new member to the team. On this page, you'll easily create a new user account."
        />
      </div>
      <FormCreateCategory />
    </main>
  );
};

export default CreateUserPage;
