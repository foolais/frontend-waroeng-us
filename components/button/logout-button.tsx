"use client";

import { logoutCredentials } from "@/lib/actions/authActions";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => logoutCredentials().then(() => router.push("/auth"))}
      className="flex w-full items-center gap-4 rounded-xl p-2 transition hover:bg-background hover:opacity-80"
    >
      <LogOut className="h-5 w-5" color="hsl(var(--destructive))" />
      <span
        className={cn(
          "text-sm font-semibold lg:block",
          isMobile ? "block" : "hidden",
        )}
      >
        Logout
      </span>
    </button>
  );
};

export default LogoutButton;
