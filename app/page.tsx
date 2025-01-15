import Title from "@/components/title/title";

export const metadata = {
  title: "Waroeng Us",
  description: "Waroeng Us",
};

export default function Home() {
  return (
    <div className="flex-center h-screen w-screen gap-2 text-3xl font-semibold text-primary">
      <Title />
    </div>
  );
}
