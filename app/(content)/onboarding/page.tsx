import CardOnboarding from "@/components/card/card-onboarding";
import Title from "@/components/title/title";
import UserAvatar from "@/components/user/user-avatar";

export const metadata = {
  title: " Onboarding - Waroeng Us",
  description: "Welcome to Waroeng Us",
};

const OnboardingPage = () => {
  return (
    <div className="h-screen w-screen bg-background">
      <div className="flex justify-between p-6">
        <Title />
        <UserAvatar />
      </div>
      <CardOnboarding />
    </div>
  );
};

export default OnboardingPage;
