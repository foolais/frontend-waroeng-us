"use client";

import Badge from "@/components/badge/badge";
import ActionsButton from "@/components/button/actions-button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { iCategoryTableData } from "@/types/types";
import { useState } from "react";

const CategoryRow = (item: iCategoryTableData) => {
  const [isActive, setIsActive] = useState(item.is_active);

  return (
    <tr key={item.id} className="table-content">
      <td className="p-2 text-center text-sm">{item.no}</td>
      <td className="p-2 text-sm">{item.name}</td>
      <td className="p-2 text-sm">
        <Badge text={item.type} variant="default" />
      </td>
      <td className="flex-center flex-col gap-2 p-2 text-sm md:flex-row">
        <Switch
          id="status-category"
          checked={isActive}
          onCheckedChange={(prev) => setIsActive(prev)}
        />
        <Label htmlFor="status-category">
          {isActive ? "Active" : "Inactive"}
        </Label>
      </td>
      <td className="p-2">
        <ActionsButton
          id=""
          name="Categories"
          routes={[`/admin/user/${""}`, `/admin/user/update/${""}`, ""]}
        />
      </td>
    </tr>
  );
};

export default CategoryRow;
