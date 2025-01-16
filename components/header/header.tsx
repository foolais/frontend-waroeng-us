import Title from "@/components/title/title";
import SearchBar from "./searchBar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import User from "@/public/user.png";
// import PathHeading from "./pathHeading";
import Image from "next/image";
import HamburgerMenu from "@/public/hamburger-menu.png";
import { Separator } from "../ui/separator";

const Header = () => {
  return (
    <header className="flex items-center py-4">
      <div className="sidebar flex-center gap-4 py-2">
        <div className="rotate-180 cursor-pointer rounded-full p-1.5 transition hover:bg-background">
          <Image
            src={HamburgerMenu}
            alt="Hamburger Menu"
            width={24}
            height={24}
          />
        </div>
        <Title />
      </div>
      <div className="mr-8 flex flex-1 justify-between lg:mr-12">
        <div className="flex flex-1 items-center">
          {/* <PathHeading className="text-xl lg:text-2xl" /> */}
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
