import React from "react";
import Table from "../table";
import ActionsButton from "@/components/button/actions-button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Badge from "@/components/badge/badge";

const renderRow = () => {
  return (
    <tr className="table-content">
      <td className="p-2 text-center text-sm">1</td>
      <td className="p-2 text-sm">Makanan</td>
      <td className="p-2 text-sm">
        <Badge text="Menu" variant="default" />
      </td>
      <td className="flex-center flex-col gap-2 p-2 text-sm md:flex-row">
        <Switch id="status-category" checked={true} />
        <Label htmlFor="status-category">Inactive</Label>
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

const CategoryTable = () => {
  const columns = [
    { header: "No", accessor: "no", className: "w-[40px]" },
    { header: "Name", accessor: "name" },
    { header: "Type", accessor: "type", className: "w-[100px] text-center" },
    {
      header: "Status",
      accessor: "active",
      className: "w-[150px] text-center",
    },
    { header: "", accessor: "action", className: "w-[40px]" },
  ];
  return (
    <Table
      columns={columns}
      renderRow={renderRow as (item: unknown) => React.ReactNode}
      data={Array.from({ length: 10 }, (_, index) => index + 1)}
    />
  );
};

export default CategoryTable;
