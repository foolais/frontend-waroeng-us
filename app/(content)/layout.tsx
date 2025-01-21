import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

interface iProps {
  children: React.ReactNode;
}

const AdminPage = ({ children }: iProps) => {
  return (
    <main className="flex h-screen bg-primary">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-background p-4 sm:flex-row sm:rounded-l-3xl sm:py-6">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default AdminPage;
