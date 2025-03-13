import { auth } from "@/auth";
import ContentHeader from "@/components/header/content-header";
import TableHeader from "@/components/table/table-header";
import UserTable from "@/components/table/user/user-table";
import { metaDataConfig } from "@/lib/constant";

const { user: userConfig } = metaDataConfig;

export const metadata = {
  title: userConfig.title + " - Waroeng Us",
  description: userConfig.description,
};

const UserPage = async () => {
  const session = await auth();
  const storeId = session?.user?.store_id ?? "";

  return (
    <main className="w-full p-4 md:px-6">
      <ContentHeader
        title={userConfig.title}
        description={userConfig.description}
      />
      <TableHeader title="All Users" routes={[`/${storeId}/admin/user/create`]}>
        <UserTable />
      </TableHeader>
    </main>
  );
};

export default UserPage;
