import Title from "@/components/title/title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User from "@/public/user.png";
import { Separator } from "@/components/ui/separator";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";
import PathHeading from "./path-heading";

const Header = () => {
  return (
    <header className="flex items-center px-8 md:px-0">
      <div className="sidebar-title flex-center py-2">
        <MobileSidebar />
        <Title className="ml-2 py-4 md:ml-0" textClassName="hidden lg:block" />
      </div>
      <div className="ml-2 mr-4 flex flex-1 justify-between md:mr-8 lg:mr-12">
        <div className="flex flex-1 items-center">
          <Separator orientation="vertical" className="mx-4" />
          <PathHeading />
        </div>
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
      </div>
    </header>
  );
};

export default Header;
