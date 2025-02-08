import NavBackButton from "@/components/button/nav-back-button";
import PathHeading from "@/components/header/path-heading";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Create Menu - Waroeng Us",
  description: "Create a new menu",
};

const CreateMenuPage = () => {
  return (
    <main className="content-container w-full">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/menu">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading title="Create Menu" description="Create a new menu" />
      </div>
    </main>
  );
};

export default CreateMenuPage;
