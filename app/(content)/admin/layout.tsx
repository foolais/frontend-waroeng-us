import Header from "@/components/header/header";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { adminNavItem } from "@/lib/constant";

interface iProps {
  children: React.ReactNode;
}

const AdminPage = ({ children }: iProps) => {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      <AppSidebar items={adminNavItem} />
      <div className="flex flex-1 flex-col bg-background md:flex-row">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default AdminPage;
