import { auth } from "@/auth";
import FormDetailMenu from "@/components/form/menu/form-detail-menu";
import ContentHeader from "@/components/header/content-header";
import { getMenuById } from "@/lib/actions/menuActions";
import { metaDataConfig } from "@/lib/constant";
import { IMenu } from "@/types/types";
import { notFound } from "next/navigation";

const { menu: menuConfig } = metaDataConfig;

export const metadata = {
  title: menuConfig.detail + " - Waroeng Us",
  description: menuConfig.description,
};

const MenuDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const menu = (await getMenuById(id)) as IMenu;
  const session = await auth();
  const storeId = session?.user?.store_id ?? "";

  if (!menu || !session) return notFound();

  const menuForm = {
    ...menu,
    id: menu?.id ?? "",
    name: menu?.name ?? "",
    price: menu?.price.toString() ?? "",
    category: menu?.category?.id ?? null,
    image: menu?.image ?? null,
  };

  return (
    <main className="content-container">
      <ContentHeader
        title={menuConfig.detail}
        description={menuConfig.description}
        routesBack={`/${storeId}/admin/menu`}
      />
      {menuForm && <FormDetailMenu menu={menuForm} />}
    </main>
  );
};

export default MenuDetail;
