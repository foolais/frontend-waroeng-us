"use server";

import { DataTable } from "../data-table";
import { userColumns } from "./user-column";
import { getAllUsers } from "@/lib/actions/userActions";

const UserTable = async () => {
  const users = await getAllUsers();

  return (
    <DataTable columns={userColumns} data={users} className="my-6 rounded-xl" />
  );
};

export default UserTable;
