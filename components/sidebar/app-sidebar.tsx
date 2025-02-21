import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import LogoutButton from "../button/logout-button";
import NavMain from "./nav-main";
import { iNavItem } from "@/types/types";
import SidebarTitle from "./sidebar-title";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  items: iNavItem[];
}

const AppSidebar = ({ items, ...sidebarProps }: AppSidebarProps) => {
  return (
    <Sidebar collapsible="icon" {...sidebarProps}>
      <SidebarHeader>
        <SidebarTitle />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
