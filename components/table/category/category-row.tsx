"use client";

import Badge from "@/components/badge/badge";
import ActionsButton from "@/components/button/actions-button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toggleCategoryStatus } from "@/lib/actions/categoryActions";
import { iCategoryTableData } from "@/types/types";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

const CategoryRow = (item: iCategoryTableData) => {
  const [isChecked, setChecked] = useState(item.is_active);
  const { data: session } = useSession();
  const storeId = session?.user?.store_id;

  const handleChange = async (id: string) => {
    try {
      await toggleCategoryStatus(id);
      setChecked((prev) => !prev);
      toast.success("Category status updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <tr key={item.id} className="table-content">
      <td className="p-2 text-center text-sm">{item.no}</td>
      <td className="p-2 text-sm">{item.name}</td>
      <td className="p-2 text-sm">
        <Badge text={item.type} variant="default" className="w-fit" />
      </td>
      <td className="flex-center h-12 flex-col gap-2 text-sm md:flex-row">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex-center h-14 flex-col gap-2 text-sm md:flex-row">
              <Switch id="status-category" checked={isChecked} />
              <Label htmlFor="status-category">
                {item.is_active ? "Active" : "Inactive"}
              </Label>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure to change status of {item.name}?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently change the
                status.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleChange(item.id)}
                className="rounded-xl bg-destructive px-3 text-destructive-foreground hover:bg-destructive hover:opacity-80"
              >
                Changes
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </td>
      <td className="p-2">
        <ActionsButton
          type="category"
          id={item.id}
          name={item.name}
          routes={[
            `/${storeId}/admin/category/${item.id}`,
            `/${storeId}/admin/category/update/${item.id}`,
            "",
          ]}
        />
      </td>
    </tr>
  );
};

export default CategoryRow;
