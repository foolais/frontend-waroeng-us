"use client";

import { ColumnDef } from "@tanstack/react-table";
import ActionsButton from "@/components/button/actions-button";
import Badge from "@/components/badge/badge";

export const userColumns: ColumnDef<
  {
    no: number;
    name: string;
    gender: string;
    email: string;
    role: string;
    id: string;
  },
  unknown
>[] = [
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
    cell: ({ row }) => {
      const userId = row?.original?.id;
      return <ActionsButton id={userId} />;
    },
  },
];
