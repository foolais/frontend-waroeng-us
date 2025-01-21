import NavBackButton from "@/components/button/nav-back-button";
import FormUser from "@/components/form/form-user";
import { ArrowLeft } from "lucide-react";

const CreateUserPage = () => {
  return (
    <main className="w-full max-w-xl md:w-3/4">
      <div className="mb-6 flex items-center gap-2 px-6">
        <NavBackButton>
          <ArrowLeft />
        </NavBackButton>
        <h2 className="text-sub-heading">Create New User</h2>
      </div>
      <FormUser />
    </main>
  );
};

export default CreateUserPage;
