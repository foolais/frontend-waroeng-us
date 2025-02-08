import PathHeading from "@/components/header/path-heading";
import MenuTable from "@/components/table/menu/menu-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Menu - Waroeng Us",
  description: "See all the menus and manage your business.",
};

const MenuPage = () => {
  return (
    <main className="w-full p-4 md:px-6">
      <PathHeading
        title="Menu Page"
        description="See all the menus and manage your business."
      />
      <div className="mt-4 rounded-xl bg-white p-6">
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
