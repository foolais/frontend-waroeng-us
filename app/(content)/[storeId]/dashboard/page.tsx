import UserAvatar from "@/components/user/user-avatar";

const page = () => {
  return (
    <div className="flex-center h-screen w-screen flex-col">
      <div className="w-fit">
        <UserAvatar />
      </div>
    </div>
  );
};

export default page;
