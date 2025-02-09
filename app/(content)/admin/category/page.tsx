import PathHeading from "@/components/header/path-heading";
import CategoryTable from "@/components/table/category/category-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Category - Waroeng Us",
  description: "Get a quick overview of how your business is doing",
};

const CategoryPage = () => {
  return (
    <main className="content-container">
      <PathHeading
        title="Category Page"
        description="Get a quick overview of how your business is doing"
      />
      <div className="mt-4 rounded-xl bg-white p-6">
        <div className="flex justify-between">
          <h2 className="text-sub-heading">All Categories</h2>
          <Button size={"icon"} asChild>
            <Link href="/admin/menu/create">
              <Plus />
            </Link>
          </Button>
        </div>
        <CategoryTable />
      </div>
    </main>
  );
};

export default CategoryPage;
