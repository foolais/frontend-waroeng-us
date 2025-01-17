"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NavBack = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      className="w-max rounded-xl"
      onClick={() => router.back()}
    >
      {children}
    </Button>
  );
};

export default NavBack;
