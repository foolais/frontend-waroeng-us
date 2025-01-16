import { cn } from "@/lib/utils";

interface iProps {
  className?: string;
}

const Sidebar = ({ className }: iProps) => {
  return <div className={cn("sidebar p-4", className)}></div>;
};

export default Sidebar;
