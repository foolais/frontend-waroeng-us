import Title from "@/components/title/title";
import SearchBar from "./search-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User from "@/public/user.png";
import { Separator } from "@/components/ui/separator";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";

const Header = () => {
  return (
    <header className="flex items-center px-8 py-4 md:px-0">
      <div className="sidebar flex-center py-2">
        <MobileSidebar />
        <Title className="ml-4 md:ml-0" textClassName="hidden lg:block" />
      </div>
      <div className="mr-4 flex flex-1 justify-between md:mr-8 lg:mr-12">
        <div className="flex flex-1 items-center">
          <Separator orientation="vertical" className="mx-4" />
          <SearchBar />
        </div>
        <div className="flex-center gap-3">
          <Avatar>
            <AvatarImage src={User.src} alt="Avatar" />
            <AvatarFallback>WU</AvatarFallback>
          </Avatar>
          <div className="hidden flex-col md:flex">
            <p className="text-base font-semibold lg:text-lg">Waroeng Us</p>
            <p className="text-sm font-semibold text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
