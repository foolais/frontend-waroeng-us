import { auth } from "@/auth";
import ContentHeader from "@/components/header/content-header";
import CategoryTable from "@/components/table/category/category-table";
import TableHeader from "@/components/table/table-header";
import { metaDataConfig } from "@/lib/constant";

const { category: categoryConfig } = metaDataConfig;

export const metadata = {
  title: categoryConfig.title + " - Waroeng Us",
  description: categoryConfig.description,
};

const CategoryPage = async () => {
  const session = await auth();
  const storeId = session?.user?.store_id ?? "";

  return (
    <main className="content-container">
      <ContentHeader
        title={categoryConfig.title}
        description={categoryConfig.description}
      />
      <TableHeader
        title="All Categories"
        routes={[`/${storeId}/admin/category/create`]}
      >
        <CategoryTable />
      </TableHeader>
    </main>
  );
};

export default CategoryPage;
