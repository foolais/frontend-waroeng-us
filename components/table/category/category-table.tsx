"use server";

import { iCategoryTableData } from "@/types/types";
import Table from "../table";
import { getAllCategories } from "@/lib/actions/categoryActions";
import EmptyTable from "../empty-table";
import CategoryRow from "./category-row";

const renderRow = (item: iCategoryTableData) => {
  return <CategoryRow {...item} />;
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

  if (categories && categories.length == 0)
    return <EmptyTable text="No category items available." />;

  return (
    <Table
      columns={columns}
      renderRow={renderRow as (item: unknown) => React.ReactNode}
      data={categories as iCategoryTableData[]}
    />
  );
};

export default CategoryTable;
