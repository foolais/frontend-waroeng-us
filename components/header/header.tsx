import Title from "@/components/title/title";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";

const Header = () => {
  return (
    <header className="mb-4 flex justify-between sm:hidden">
      <Title />
      <MobileSidebar />
    </header>
  );
};

export default Header;
