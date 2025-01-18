"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const NavBackButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <Button
      size={"sm"}
      variant={"ghost"}
      className="w-max rounded-xl"
      onClick={() => router.back()}
    >
      {children}
    </Button>
  );
};

export default NavBackButton;
