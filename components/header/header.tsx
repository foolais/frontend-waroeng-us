import Title from "@/components/title/title";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-2 sm:hidden">
      <Title />
      <MobileSidebar />
    </header>
  );
};

export default Header;
