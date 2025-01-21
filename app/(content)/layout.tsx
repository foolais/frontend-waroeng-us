import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

interface iProps {
  children: React.ReactNode;
}

const AdminPage = ({ children }: iProps) => {
  return (
    <main className="flex h-screen overflow-hidden bg-primary">
      <Sidebar />
      <div className="primary-scrollbar flex flex-1 flex-col overflow-scroll bg-background sm:flex-row sm:rounded-l-3xl sm:p-6">
        <Header />
        <div className="-mt-5 rounded-t-xl bg-background p-8 sm:mt-0 sm:rounded-t-none sm:p-0">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminPage;
