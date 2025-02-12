"use client";

import { EllipsisVertical, Info, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { deleteUser } from "@/lib/actions/userActions";
import { toast } from "sonner";

type EntityType = "user" | "category" | "menu";

interface iProps {
  id: string;
  name: string;
  routes: [string, string, string];
  type: EntityType;
}

const ActionsButton = ({ id, name, routes, type }: iProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      if (type === "user") {
        await deleteUser(id);
        toast.success("User Deleted successfully");
      } else {
        toast.warning("Delete function not implemented");
      }
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 rounded-xl p-0">
            <span className="sr-only">Open menu</span>
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => router.push(routes[0])}>
            <Info />
            <p>Detail</p>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => router.push(routes[1])}>
            <Pencil />
            <p>Update</p>
          </DropdownMenuItem>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <Trash2 color="hsl(var(--destructive))" />
                <p className="text-destructive">Delete</p>
              </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure delete {name}?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="rounded-xl bg-destructive px-3 text-destructive-foreground hover:bg-destructive hover:opacity-80"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ActionsButton;
