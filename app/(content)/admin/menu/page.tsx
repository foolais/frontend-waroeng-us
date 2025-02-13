import ContentHeader from "@/components/header/content-header";
import MenuTable from "@/components/table/menu/menu-table";
import TableHeader from "@/components/table/table-header";
import { metaDataConfig } from "@/lib/constant";

export const metadata = {
  title: metaDataConfig.menu.title + " - Waroeng Us",
  description: metaDataConfig.menu.description,
};

const MenuPage = () => {
  const { menu: menuConfig } = metaDataConfig;

  return (
    <main className="content-container">
      <ContentHeader
        title={menuConfig.title}
        description={menuConfig.description}
      />
      <TableHeader title="All Menus" routes={["/admin/menu/create"]}>
        <MenuTable />
      </TableHeader>
    </main>
  );
};

export default MenuPage;
