import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex w-3/4 lg:w-2/3">
      <Input
        type="text"
        placeholder="Search"
        className="h-10 rounded-r-none text-lg lg:h-14"
        icon={Search}
      />
      <div className="flex-center button-padding cursor-pointer rounded-r-xl bg-primary hover:opacity-80">
        <Search className="h-5 w-5 text-white" data-testid="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
