import FormDetailUser from "@/components/form/user/form-detail-user";
import ContentHeader from "@/components/header/content-header";
import { getUserById } from "@/lib/actions/userActions";
import { metaDataConfig } from "@/lib/constant";

const { user: userConfig } = metaDataConfig;

export const metadata = {
  title: userConfig.detail + " - Waroeng Us",
  description: userConfig.description,
};

const UserDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const user = await getUserById(id);

  return (
    <main className="content-container">
      <ContentHeader
        title={userConfig.detail}
        description={userConfig.description}
        routesBack="/admin/user"
      />
      {user && <FormDetailUser user={user} />}
    </main>
  );
};

export default UserDetail;
