"use client";

import { iUserTable } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import ActionsButton from "@/components/button/actions-button";

export const userDesktopColumns: ColumnDef<iUserTable>[] = [
  {
    accessorKey: "no",
    header: "No",
    enableResizing: false,
    size: 60,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    cell: () => {
      return <ActionsButton />;
    },
  },
];

export const userMobileColumns: ColumnDef<iUserTable>[] = [
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    cell: () => {
      return <ActionsButton />;
    },
  },
];
