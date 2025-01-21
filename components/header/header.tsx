import Title from "@/components/title/title";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";

const Header = () => {
  return (
    <header className="flex justify-between bg-primary px-8 pb-9 pt-6 sm:hidden">
      <Title />
      <MobileSidebar />
    </header>
  );
};

export default Header;
