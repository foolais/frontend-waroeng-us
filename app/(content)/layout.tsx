import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

interface iProps {
  children: React.ReactNode;
}

const AdminPage = ({ children }: iProps) => {
  return (
    <main className="max-w-screen flex h-screen max-h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="primary-scrollbar flex flex-1 flex-col overflow-scroll bg-background sm:flex-row">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default AdminPage;
