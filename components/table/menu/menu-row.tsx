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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toggleMenuAvailability } from "@/lib/actions/menuActions";
import { iMenuTableData } from "@/types/types";
import { useState } from "react";
import { toast } from "sonner";

const MenuRow = (item: iMenuTableData) => {
  const [isChecked, setChecked] = useState(item.is_available);

  const handleChange = async (id: string) => {
    try {
      await toggleMenuAvailability(id);
      setChecked((prev) => !prev);
      toast.success("Menu availability updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <tr key={item.id} className="table-content">
      <td className="p-2 text-center text-sm">{item.no}</td>
      <td className="p-2">
        <Avatar>
          <AvatarImage src={item.image ?? ""} alt="Avatar" />
          <AvatarFallback>WS</AvatarFallback>
        </Avatar>
      </td>
      <td className="p-2 text-sm">{item.name}</td>

      <td className="hidden p-2 text-sm lg:table-cell">
        <Badge text={item.category.name} variant="default" />
      </td>
      <td className="p-2 text-sm">{item.price}</td>
      <td className="flex-center h-14 flex-col gap-2 text-sm md:flex-row">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex-center h-14 flex-col gap-2 text-sm md:flex-row">
              <Switch
                id="status-category"
                checked={isChecked}
                aria-label="switch"
              />
              <Label htmlFor="status-category">
                {isChecked ? "Available" : "Empty"}
              </Label>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure to change availability of {item.name}?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently change the
                availability.
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
          type="menu"
          id={item.id}
          name="Menus"
          routes={[
            `/admin/menu/${item.id}`,
            `/admin/menu/update/${item.id}`,
            "",
          ]}
        />
      </td>
    </tr>
  );
};

export default MenuRow;
