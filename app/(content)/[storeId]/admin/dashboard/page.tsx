import ContentHeader from "@/components/header/content-header";

export const metadata = {
  title: "Dashboard - Waroeng Us",
  description: "Get a quick overview of how your business is doing",
};

const DashboardPage = () => {
  return (
    <main className="content-container">
      <ContentHeader
        title="Dashboard Page"
        description="Get a quick overview of how your business is doing"
      />
    </main>
  );
};

export default DashboardPage;
