"use server";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Table from "../table";
import Badge from "@/components/badge/badge";
import ActionsButton from "@/components/button/actions-button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { getAllMenu } from "@/lib/actions/menuActions";
import { iMenuTableData } from "@/types/types";
import EmptyTable from "../empty-table";

const renderRow = (item: iMenuTableData) => {
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

const MenuTable = async () => {
  const menus = await getAllMenu();

  const columns = [
    { header: "No", accessor: "no", className: "w-[40px]" },
    { header: "Image", accessor: "image", className: "w-[70px]" },
    { header: "Name", accessor: "name" },

    {
      header: "Category",
      accessor: "category",
      className: "w-[100px] hidden lg:table-cell  text-center",
    },
    { header: "Price", accessor: "price" },
    {
      header: "Availability",
      accessor: "availability",
      className: "w-[100px] text-center",
    },
    {
      header: "",
      accessor: "actions",
      className: "w-[40px] text-center",
    },
  ];

  if (menus && menus.length == 0)
    return <EmptyTable text="No menu items available." />;

  return (
    <Table
      columns={columns}
      renderRow={renderRow as (item: unknown) => React.ReactNode}
      data={menus as iMenuTableData[]}
    />
  );
};

export default MenuTable;
