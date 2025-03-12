import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import LogoutButton from "../button/logout-button";
import { Separator } from "../ui/separator";
import { UserRound } from "lucide-react";

const UserAvatar = async () => {
  const session = await auth();

  console.log({ session });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex-center gap-2 hover:cursor-pointer">
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
      </PopoverTrigger>
      <PopoverContent className="w-max">
        <div className="flex-center cursor-pointer gap-4 rounded-xl p-2 hover:bg-background hover:opacity-80">
          <UserRound className="h-4 w-4" />
          <p className="text-sm font-semibold">Profile</p>
        </div>
        <Separator className="my-2" />
        <LogoutButton isPopOver />
      </PopoverContent>
    </Popover>
  );
};

export default UserAvatar;
