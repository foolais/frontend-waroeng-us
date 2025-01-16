"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CircleX, Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const searchBtnClassName =
    "button-padding cursor-pointer rounded-r-xl bg-primary hover:opacity-80";

  return (
    <div className="relative flex w-3/4 lg:w-2/3">
      <div
        className={cn(
          "flex-1 sm:flex",
          isOpenSearch
            ? "fixed left-0 right-0 top-0 z-20 flex bg-white p-6"
            : "hidden",
        )}
      >
        {isOpenSearch && (
          <div
            className="flex-center mr-4"
            onClick={() => setIsOpenSearch(false)}
          >
            <CircleX />
          </div>
        )}
        <Input
          type="text"
          placeholder="Search"
          className={cn(
            "h-10 rounded-r-none text-lg sm:flex lg:h-14",
            isOpenSearch ? "flex" : "hidden",
          )}
          icon={Search}
        />
        <button className={cn("flex-center", searchBtnClassName)}>
          <Search className="h-5 w-5 text-white" data-testid="search-icon" />
        </button>
      </div>
      <button
        className={cn(
          "sm:hidden",
          searchBtnClassName,
          isOpenSearch ? "hidden" : "flex-center",
        )}
        onClick={() => setIsOpenSearch(true)}
      >
        <Search className="h-5 w-5 text-white" data-testid="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
