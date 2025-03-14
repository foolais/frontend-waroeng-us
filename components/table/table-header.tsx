import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const TableHeader = ({
  children,
  title,
  routes,
  isBtnHidden = false,
}: {
  children: React.ReactNode;
  title: string;
  routes: [string];
  isBtnHidden?: boolean;
}) => {
  return (
    <div className="my-4 rounded-xl bg-white p-6">
      <div className="flex justify-between">
        <h2 className="text-sub-heading">{title}</h2>
        {isBtnHidden ? null : (
          <Button size={"icon"} asChild>
            <Link href={routes[0]} aria-label="add">
              <Plus />
            </Link>
          </Button>
        )}
      </div>
      {children}
    </div>
  );
};

export default TableHeader;
