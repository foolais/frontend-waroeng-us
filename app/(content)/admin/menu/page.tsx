import ContentHeader from "@/components/header/content-header";
import MenuTable from "@/components/table/menu/menu-table";
import { Button } from "@/components/ui/button";
import { metaDataConfig } from "@/lib/constant";
import { Plus } from "lucide-react";
import Link from "next/link";

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
      <div className="my-4 rounded-xl bg-white p-6">
        <div className="flex justify-between">
          <h2 className="text-sub-heading">All Menus</h2>
          <Button size={"icon"} asChild>
            <Link href="/admin/menu/create">
              <Plus />
            </Link>
          </Button>
        </div>
        <MenuTable />
      </div>
    </main>
  );
};

export default MenuPage;
