import NavBackButton from "@/components/button/nav-back-button";
import FormDetailCategory from "@/components/form/category/form-detail-category";
import PathHeading from "@/components/header/path-heading";
import { getCategoryById } from "@/lib/actions/categoryActions";
import { metaDataConfig } from "@/lib/constant";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const CategoryDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const category = await getCategoryById(id);

  if (!category) notFound();

  const { category: categoryConfig } = metaDataConfig;

  return (
    <main className="content-container">
      <div className="mb-6 flex items-center gap-2">
        <NavBackButton route="/admin/category">
          <ArrowLeft />
        </NavBackButton>
        <PathHeading
          title={`${categoryConfig.title} Details`}
          description={categoryConfig.description}
        />
      </div>
      {category && <FormDetailCategory category={category} />}
    </main>
  );
};

export default CategoryDetail;
