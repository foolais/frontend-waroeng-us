import ContentHeader from "@/components/header/content-header";
import TableHeader from "@/components/table/table-header";
import UserTable from "@/components/table/user/user-table";

export const metadata = {
  title: "User - Waroeng Us",
  description: "See who's on your team and easily update their information.",
};

const UserPage = () => {
  return (
    <main className="w-full p-4 md:px-6">
      <ContentHeader
        title="Users Page"
        description="See who's on your team and easily update their information."
      />
      <TableHeader title="All Users" routes={["/admin/user/create"]}>
        <UserTable />
      </TableHeader>
    </main>
  );
};

export default UserPage;
