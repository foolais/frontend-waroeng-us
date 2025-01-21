import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User from "@/public/user.png";

const UserAvatar = () => {
  return (
    <div className="flex-center gap-3">
      <Avatar>
        <AvatarImage src={User.src} alt="Avatar" />
        <AvatarFallback>WU</AvatarFallback>
      </Avatar>
      <div className="hidden flex-col md:flex">
        <p className="text-base font-semibold lg:text-lg">Waroeng Us</p>
        <p className="text-span">Admin</p>
      </div>
    </div>
  );
};

export default UserAvatar;
