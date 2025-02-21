"use server";

import Table from "../table";
import { getAllMenu } from "@/lib/actions/menuActions";
import { iMenuTableData } from "@/types/types";
import EmptyTable from "../empty-table";
import MenuRow from "./menu-row";

const renderRow = (item: iMenuTableData) => {
  return <MenuRow {...item} />;
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
