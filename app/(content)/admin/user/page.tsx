import PathHeading from "@/components/header/path-heading";
import UserTable from "@/components/table/user/user-table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "User - Waroeng Us",
  description: "See who's on your team and easily update their information.",
};

const UserPage = () => {
  return (
    <main className="w-full p-4 md:px-6">
      <div className="flex items-center justify-between">
        <PathHeading
          title="Users Page"
          description="See who's on your team and easily update their information."
        />
        <Avatar>
          <AvatarFallback>WS</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-4 rounded-xl bg-white p-6">
        <div className="flex justify-between">
          <h2 className="text-sub-heading">All Users</h2>
          <Button size={"icon"} asChild>
            <Link href="/admin/user/create">
              <Plus />
            </Link>
          </Button>
        </div>
        <UserTable />
      </div>
    </main>
  );
};

export default UserPage;
