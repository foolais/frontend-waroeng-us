import { cn } from "@/lib/utils";
import NavItem from "@/components/nav/nav-item";

interface iProps {
  className?: string;
}

const Sidebar = ({ className }: iProps) => {
  return (
    <div className={cn("sidebar", className)}>
      <NavItem />
    </div>
  );
};

export default Sidebar;
