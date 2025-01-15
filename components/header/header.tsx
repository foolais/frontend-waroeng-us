import Title from "@/components/title/title";
import SearchBar from "./searchBar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import User from "@/public/user.png";
import PathHeading from "./pathHeading";

const Header = () => {
  return (
    <header className="flex items-center py-4">
      <div className="w-64 py-2">
        <Title />
      </div>
      <div className="flex w-5/6 justify-between px-8">
        <div className="flex flex-1 items-center gap-12">
          <PathHeading className="text-2xl" />
          <SearchBar />
        </div>
        <div className="flex-center gap-3">
          <Avatar>
            <AvatarImage src={User.src} alt="Avatar" />
            <AvatarFallback>WU</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Waroeng Us</p>
            <p className="text-sm font-semibold text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
