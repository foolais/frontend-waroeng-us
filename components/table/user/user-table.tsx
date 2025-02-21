"use server";

import Table from "../table";
import { getAllUsers } from "@/lib/actions/userActions";
import EmptyTable from "../empty-table";
import { iUserTableData } from "@/types/types";
import UserRow from "./user-row";

const renderRow = (item: iUserTableData) => {
  return <UserRow {...item} />;
};

const UserTable = async () => {
  const users = await getAllUsers();

  const columns = [
    { header: "No", accessor: "no", className: "w-[40px]" },
    { header: "Image", accessor: "image", className: "w-[70px]" },
    { header: "Name", accessor: "name" },
    {
      header: "Gender",
      accessor: "gender",
      className: `w-[80px] hidden lg:table-cell  text-center`,
    },
    { header: "Email", accessor: "email", className: "hidden md:table-cell " },
    { header: "Role", accessor: "role", className: `w-[70px]  text-center` },
    { header: "", accessor: "actions", className: `w-[40px]  text-center` },
  ];

  if (users && users.length == 0)
    return <EmptyTable text="No user items available." />;

  return (
    <Table
      columns={columns}
      renderRow={renderRow as (item: unknown) => React.ReactNode}
      data={users as iUserTableData[]}
    />
  );
};

export default UserTable;
