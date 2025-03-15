import { auth } from "@/auth";
import ContentHeader from "@/components/header/content-header";
import TableHeader from "@/components/table/table-header";
import UserTable from "@/components/table/user/user-table";
import { metaDataConfig } from "@/lib/constant";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <Tabs defaultValue="all" className="my-6 w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="w-1/2">
            All Users
          </TabsTrigger>
          <TabsTrigger value="request" className="w-1/2">
            Requested Users
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <TableHeader
            title="All Users"
            routes={[`/${storeId}/admin/user/create`]}
          >
            <UserTable />
          </TableHeader>
        </TabsContent>
        <TabsContent value="request">
          <TableHeader title="Requested Users" routes={[""]} isBtnHidden>
            <UserTable />
          </TableHeader>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default UserPage;
