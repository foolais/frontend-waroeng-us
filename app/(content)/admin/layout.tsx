import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

interface iProps {
  children: React.ReactNode;
}

const AdminPage = ({ children }: iProps) => {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-background sm:flex-row">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default AdminPage;
