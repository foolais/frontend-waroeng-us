"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NavBack = ({ text }: { text: string }) => {
  const router = useRouter();

  return (
    <Button variant={"secondary"} onClick={() => router.back()}>
      {text}
    </Button>
  );
};

export default NavBack;
