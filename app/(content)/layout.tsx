import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

interface iProps {
  children: React.ReactNode;
}

const AdminPage = ({ children }: iProps) => {
  return (
    <main className="flex h-screen overflow-hidden bg-primary">
      <Sidebar />
      <div className="primary-scrollbar flex flex-1 flex-col overflow-scroll bg-background p-8 sm:flex-row sm:rounded-l-3xl sm:p-6">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default AdminPage;
