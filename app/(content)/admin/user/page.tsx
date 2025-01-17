import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "User - Waroeng Us",
  description: "Dashboard Waroeng Us",
};

const UserPage = () => {
  return (
    <main className="w-full">
      <div className="flex flex-1 items-center justify-between">
        <h2 className="text-sub-heading">All Users</h2>
        <Button className="flex-center rounded-xl" asChild>
          <Link href="/admin/user/create">Create New User</Link>
        </Button>
      </div>
    </main>
  );
};

export default UserPage;
