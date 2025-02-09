"use server";

import { iCategoryTableData } from "@/types/types";
import Table from "../table";
import { getAllCategories } from "@/lib/actions/categoryActions";
import Badge from "@/components/badge/badge";
import { Switch } from "@/components/ui/switch";
import ActionsButton from "@/components/button/actions-button";
import { Label } from "@/components/ui/label";

const renderRow = (item: iCategoryTableData) => {
  return (
    <tr key={item.id} className="table-content">
      <td className="p-2 text-center text-sm">{item.no}</td>
      <td className="p-2 text-sm">{item.name}</td>
      <td className="p-2 text-sm">
        <Badge text={item.type} variant="default" />
      </td>
      <td className="flex-center flex-col gap-2 p-2 text-sm md:flex-row">
        <Switch id="status-category" checked={item.is_active} />
        <Label htmlFor="status-category">
          {item.is_active ? "Active" : "Inactive"}
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

const CategoryTable = async () => {
  const categories = await getAllCategories();

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
      data={categories as iCategoryTableData[]}
    />
  );
};

export default CategoryTable;
