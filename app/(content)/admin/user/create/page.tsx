import FormUser from "@/components/form/admin/form-user";
import NavBack from "@/components/nav/nav-back";
import { ArrowLeft } from "lucide-react";

const CreateUserPage = () => {
  return (
    <main className="mx-auto w-3/4 max-w-3xl">
      <div className="mb-6 flex items-center gap-4">
        <NavBack>
          <ArrowLeft />
        </NavBack>
        <h2 className="text-sub-heading">Create New User</h2>
      </div>
      <FormUser />
    </main>
  );
};

export default CreateUserPage;
