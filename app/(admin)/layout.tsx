import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

interface iProps {
  children: React.ReactNode;
}

const AdminPage = async ({ children }: iProps) => {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <section className="flex flex-1">
        <Sidebar />
        <div className="mb-12 mr-12 flex flex-1 rounded-xl bg-background p-8">
          {children}
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
