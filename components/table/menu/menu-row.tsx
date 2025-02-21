"use client";

import Badge from "@/components/badge/badge";
import ActionsButton from "@/components/button/actions-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { iMenuTableData } from "@/types/types";

const MenuRow = (item: iMenuTableData) => {
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
        <Switch
          id="status-category"
          checked={item.is_available}
          aria-label="switch"
        />
        <Label htmlFor="status-category">
          {item.is_available ? "Available" : "Empty"}
        </Label>
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
