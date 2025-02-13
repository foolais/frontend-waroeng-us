import ContentHeader from "@/components/header/content-header";
import CategoryTable from "@/components/table/category/category-table";
import TableHeader from "@/components/table/table-header";
import { metaDataConfig } from "@/lib/constant";

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
      <TableHeader title="All Categories" routes={["/admin/category/create"]}>
        <CategoryTable />
      </TableHeader>
    </main>
  );
};

export default CategoryPage;
