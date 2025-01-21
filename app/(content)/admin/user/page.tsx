import PathHeading from "@/components/header/path-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "User - Waroeng Us",
  description: "Dashboard Waroeng Us",
};

const UserPage = () => {
  return (
    <main className="w-full">
      <PathHeading />
      <div className="flex justify-end">
        <Button className="mt-4 rounded-xl" asChild>
          <Link href="/admin/user/create">Create New User</Link>
        </Button>
      </div>
    </main>
  );
};

export default UserPage;
