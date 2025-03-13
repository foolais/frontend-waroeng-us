import { auth } from "@/auth";
import ContentHeader from "@/components/header/content-header";
import MenuTable from "@/components/table/menu/menu-table";
import TableHeader from "@/components/table/table-header";
import { metaDataConfig } from "@/lib/constant";

const { menu: menuConfig } = metaDataConfig;

export const metadata = {
  title: menuConfig.title + " - Waroeng Us",
  description: menuConfig.description,
};

const MenuPage = async () => {
  const session = await auth();
  const storeId = session?.user?.store_id ?? "";

  return (
    <main className="content-container">
      <ContentHeader
        title={menuConfig.title}
        description={menuConfig.description}
      />
      <TableHeader title="All Menus" routes={[`/${storeId}/admin/menu/create`]}>
        <MenuTable />
      </TableHeader>
    </main>
  );
};

export default MenuPage;
