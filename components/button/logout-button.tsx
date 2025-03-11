"use client";

import { logoutCredentials } from "@/lib/actions/authActions";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSidebar } from "../ui/sidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const LogoutButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  const router = useRouter();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
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
      </AlertDialogTrigger>
      <AlertDialogContent aria-description="logout" aria-describedby="logout">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to logout?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => logoutCredentials().then(() => router.push("/auth"))}
            className="rounded-xl bg-destructive px-3 text-destructive-foreground hover:bg-destructive hover:opacity-80"
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutButton;
