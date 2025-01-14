import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

const AdminPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flex h-screen flex-1 flex-col">
        <Header />
        <div className="h-4/5 w-[97%] rounded-xl bg-white p-4">{children}</div>
      </section>
    </main>
  );
};

export default AdminPage;
