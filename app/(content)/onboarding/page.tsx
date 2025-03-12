import CardCreateStore from "@/components/card/card-create-store";
import CardJoinStore from "@/components/card/card-join-store";
import Title from "@/components/title/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      <div className="flex-center flex h-4/5">
        <div className="flex-center mx-auto h-[400px] w-max flex-col gap-4 rounded-xl bg-white p-6">
          <h1 className="text-heading text-center text-primary">
            Let’s Get Started
          </h1>
          <Tabs defaultValue="create" className="my-3 w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="create">Create Store</TabsTrigger>
              <TabsTrigger value="join">Join Store</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <CardCreateStore />
            </TabsContent>
            <TabsContent value="join">
              <CardJoinStore />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
