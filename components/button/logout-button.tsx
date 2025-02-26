"use client";

import { logoutCredentials } from "@/lib/actions/authActions";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSidebar } from "../ui/sidebar";

const LogoutButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  const router = useRouter();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <button
      onClick={() => logoutCredentials().then(() => router.push("/auth"))}
      className="flex w-full items-center gap-4 rounded-xl p-2 transition hover:bg-background hover:opacity-80"
      aria-label="logout"
    >
      <LogOut className="h-5 w-5" color="hsl(var(--destructive))" />
      <span
        className={cn(
          "text-sm font-semibold transition-all duration-300 ease-in-out",
          isMobile
            ? "block"
            : isCollapsed
              ? "hidden overflow-hidden opacity-0"
              : "w-auto opacity-100",
        )}
      >
        Logout
      </span>
    </button>
  );
};

export default LogoutButton;
