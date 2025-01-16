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
        <Sidebar className="hidden md:block" />
        <div className="mx-8 mb-8 flex flex-1 rounded-xl bg-background p-8 md:ml-0 lg:mb-12 lg:mr-12">
          {children}
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
