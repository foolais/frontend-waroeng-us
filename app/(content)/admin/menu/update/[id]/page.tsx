import FormUpdateMenu from "@/components/form/menu/form-update-menu";
import ContentHeader from "@/components/header/content-header";
import { getMenuById } from "@/lib/actions/menuActions";
import { metaDataConfig } from "@/lib/constant";

const { menu: menuConfig } = metaDataConfig;

export const metadata = {
  title: menuConfig.update + " - Waroeng Us",
  description: menuConfig.description,
};

const UpdateMenuPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const menu = await getMenuById(id);

  const menuForm = {
    ...menu,
    id: menu?.id ?? "",
    name: menu?.name ?? "",
    price: menu?.price.toString() ?? "",
    category: menu?.category?.id ?? null,
    image: menu?.image ?? null,
  };

  return (
    <main className="content-container mt-4">
      <ContentHeader
        title={menuConfig.update}
        description={menuConfig.description}
        routesBack="/admin/menu"
      />
      {menu && <FormUpdateMenu menu={menuForm} />}
    </main>
  );
};

export default UpdateMenuPage;
