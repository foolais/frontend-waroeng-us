import FormDetailCategory from "@/components/form/category/form-detail-category";
import ContentHeader from "@/components/header/content-header";
import { getCategoryById } from "@/lib/actions/categoryActions";
import { metaDataConfig } from "@/lib/constant";
import { notFound } from "next/navigation";

const { category: categoryConfig } = metaDataConfig;

export const metadata = {
  title: categoryConfig.detail + " - Waroeng Us",
  description: categoryConfig.description,
};

const CategoryDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const category = await getCategoryById(id);

  if (!category) notFound();

  const { category: categoryConfig } = metaDataConfig;

  return (
    <main className="content-container">
      <ContentHeader
        title={categoryConfig.detail}
        description={categoryConfig.description}
        routesBack="/admin/category"
      />
      {category && <FormDetailCategory category={category} />}
    </main>
  );
};

export default CategoryDetail;
