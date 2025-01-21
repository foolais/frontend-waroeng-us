import PathHeading from "@/components/header/path-heading";
import { Button } from "@/components/ui/button";
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
    </main>
  );
};

export default UserPage;
