"use client";

import { cn } from "@/lib/utils";
import Title from "../title/title";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

const SidebarTitle = () => {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className="flex flex-row items-center justify-between pt-2">
      <Title
        textClassName={cn(
          "transition-all duration-300 delay-150 ease-in-out",
          isCollapsed
            ? "opacity-0 scale-90 w-0 overflow-hidden"
            : "opacity-100 scale-100 w-auto",
        )}
        onClick={isCollapsed ? toggleSidebar : undefined}
      />
      {!isCollapsed && <SidebarTrigger />}
    </div>
  );
};

export default SidebarTitle;
