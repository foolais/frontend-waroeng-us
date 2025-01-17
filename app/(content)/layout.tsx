import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

interface iProps {
  children: React.ReactNode;
}

const AdminPage = ({ children }: iProps) => {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <section className="flex flex-1">
        <Sidebar />
        <div className="mx-8 mb-8 flex flex-1 rounded-xl bg-white p-8 lg:mb-12 lg:mr-12">
          {children}
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
