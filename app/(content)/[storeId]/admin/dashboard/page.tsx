import { auth } from "@/auth";
import ContentHeader from "@/components/header/content-header";
import { getStoreById } from "@/lib/actions/storeActions";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Dashboard - Waroeng Us",
  description: "Get a quick overview of how your business is doing",
};

const DashboardPage = async () => {
  const session = await auth();

  const storeId = session?.user?.store_id ?? "";
  const store = await getStoreById(storeId);

  if (!store) return notFound();

  return (
    <main className="content-container">
      <ContentHeader
        title="Dashboard"
        description="Get a quick overview of how your business is doing"
      />
      {session && (
        <>
          <h1 className="text-heading mt-2 text-primary">
            Hi, {session.user.name}
          </h1>
          <h2 className="text-sub-heading">
            {store.name} - {store.invitation_code}
          </h2>
        </>
      )}
    </main>
  );
};

export default DashboardPage;
