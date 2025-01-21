import NavItem from "@/components/nav/nav-item";
import Title from "@/components/title/title";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Title textClassName="hidden lg:block" />
      <NavItem />
    </div>
  );
};

export default Sidebar;
