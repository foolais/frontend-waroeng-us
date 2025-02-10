import NavItem from "@/components/nav/nav-item";
import Title from "@/components/title/title";
import LogoutButton from "../button/logout-button";

const Sidebar = async () => {
  return (
    <div className="sidebar">
      <Title textClassName="hidden lg:block" />
      <NavItem />
      <div className="mb-4 mt-auto w-full">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
