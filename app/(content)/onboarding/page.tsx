import CardCreateStore from "@/components/card/card-create-store";
import CardJoinStore from "@/components/card/card-join-store";
import Title from "@/components/title/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserAvatar from "@/components/user/user-avatar";

const OnboardingPage = () => {
  return (
    <div className="h-screen w-screen bg-background">
      <div className="flex h-20 justify-between px-6">
        <Title />
        <UserAvatar />
      </div>
      <div className="flex-center flex h-4/5">
        <div className="mx-auto h-[350px] w-max gap-4 rounded-xl bg-white p-6">
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
