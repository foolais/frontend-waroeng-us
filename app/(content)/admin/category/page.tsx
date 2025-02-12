import ContentHeader from "@/components/header/content-header";
import CategoryTable from "@/components/table/category/category-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Category - Waroeng Us",
  description: "Here you can manage your categories",
};

const CategoryPage = () => {
  return (
    <main className="content-container">
      <ContentHeader
        title="Category Page"
        description="Here you can manage your categories"
      />
      <div className="mt-4 rounded-xl bg-white p-6">
        <div className="flex justify-between">
          <h2 className="text-sub-heading">All Categories</h2>
          <Button size={"icon"} asChild>
            <Link href="/admin/category/create">
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
