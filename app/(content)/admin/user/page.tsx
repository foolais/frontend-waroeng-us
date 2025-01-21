import PathHeading from "@/components/header/path-heading";
import { DataTable } from "@/components/table/data-table";
import { userDesktopColumns } from "@/components/table/user-column";
import { Button } from "@/components/ui/button";
import { userDummyData } from "@/lib/constant";
import Link from "next/link";

export const metadata = {
  title: "User - Waroeng Us",
  description: "See who's on your team and easily update their information.",
};

const UserPage = () => {
  return (
    <main className="w-full">
      <PathHeading
        title="Users Page"
        description="See who's on your team and easily update their information."
      />
      <div className="flex justify-end">
        <Button className="mt-4 rounded-xl" asChild>
          <Link href="/admin/user/create">Create New User</Link>
        </Button>
      </div>
      <DataTable
        columns={userDesktopColumns}
        data={userDummyData}
        className="my-6 rounded-xl"
      />
    </main>
  );
};

export default UserPage;
