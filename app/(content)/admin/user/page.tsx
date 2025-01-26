import PathHeading from "@/components/header/path-heading";
import UserTable from "@/components/table/user/user-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
      <div className="mt-6 rounded-xl bg-white sm:p-6">
        <div className="flex justify-end">
          <Button className="mt-4 rounded-xl" asChild>
            <Link href="/admin/user/create">
              <Plus />
              Create New User
            </Link>
          </Button>
        </div>
        <UserTable />
      </div>
    </main>
  );
};

export default UserPage;
