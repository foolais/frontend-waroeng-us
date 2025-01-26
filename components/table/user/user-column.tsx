"use client";

import { iUserTable } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import ActionsButton from "@/components/button/actions-button";
import Badge from "@/components/badge/badge";

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
    header: () => {
      return <div className="text-center">Gender</div>;
    },
    cell: ({ row }) => {
      const gender = row.getValue<string>("gender").toLowerCase();
      return <Badge text={gender} variant={gender} />;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: () => {
      return <div className="text-center">Role</div>;
    },
    cell: ({ row }) => {
      const role = row.getValue<string>("role").toLowerCase();
      return <Badge text={role} variant={role} />;
    },
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
