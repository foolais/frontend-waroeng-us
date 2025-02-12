import ContentHeader from "@/components/header/content-header";
import CategoryTable from "@/components/table/category/category-table";
import { Button } from "@/components/ui/button";
import { metaDataConfig } from "@/lib/constant";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: metaDataConfig.category.title + " - Waroeng Us",
  description: metaDataConfig.category.description,
};

const CategoryPage = () => {
  const { category: categoryConfig } = metaDataConfig;

  return (
    <main className="content-container">
      <ContentHeader
        title={categoryConfig.title}
        description={categoryConfig.description}
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
