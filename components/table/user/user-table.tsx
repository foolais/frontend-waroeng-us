"use client";

import { userDummyData } from "@/lib/constant";
import { DataTable } from "../data-table";
import { userDesktopColumns, userMobileColumns } from "./user-column";
import { useWindowSize } from "@/hooks/useWindowsSize";

const UserTable = () => {
  const { width } = useWindowSize();
  const isMobile = width !== null && width <= 768;

  return (
    <DataTable
      columns={isMobile ? userMobileColumns : userDesktopColumns}
      data={userDummyData}
      className="my-6 rounded-xl"
    />
  );
};

export default UserTable;
