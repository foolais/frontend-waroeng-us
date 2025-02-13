import FormCreateMenu from "@/components/form/menu/form-create-menu";
import ContentHeader from "@/components/header/content-header";
import { metaDataConfig } from "@/lib/constant";

const { menu: menuConfig } = metaDataConfig;

export const metadata = {
  title: menuConfig.create + " - Waroeng Us",
  description: menuConfig.description,
};

const CreateMenuPage = () => {
  return (
    <main className="content-container">
      <ContentHeader
        title={menuConfig.create}
        description={menuConfig.description}
        routesBack="/admin/menu"
      />
      <FormCreateMenu />
    </main>
  );
};

export default CreateMenuPage;
