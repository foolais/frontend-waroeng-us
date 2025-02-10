import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = async () => {
  const session = await auth();

  return (
    <div className="flex-center gap-2">
      <Avatar>
        <AvatarImage src={session?.user?.image ?? ""} alt="Avatar" />
        <AvatarFallback>WS</AvatarFallback>
      </Avatar>
      <div className="hidden flex-col sm:flex">
        <p className="text-sm font-semibold capitalize text-gray-600">
          {session?.user?.name}
        </p>
        <p className="text-span capitalize">{session?.user?.role}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
