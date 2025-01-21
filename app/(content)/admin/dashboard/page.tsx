import PathHeading from "@/components/header/path-heading";

export const metadata = {
  title: "Dashboard - Waroeng Us",
  description: "Get a quick overview of how your business is doing",
};

const DashboardPage = () => {
  return (
    <main>
      <PathHeading
        title="Dashboard Page"
        description="Get a quick overview of how your business is doing"
      />
    </main>
  );
};

export default DashboardPage;
