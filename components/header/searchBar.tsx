import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex w-1/2">
      <Input
        type="text"
        placeholder="Search"
        className="h-14 rounded-r-none text-lg"
        icon={Search}
      />
      <div className="flex-center cursor-pointer rounded-r-xl bg-primary px-6 hover:opacity-80">
        <Search className="h-5 w-5 text-white" data-testid="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
