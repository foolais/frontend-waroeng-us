"use server";

import ActionsButton from "@/components/button/actions-button";
import Table from "../table";
import { getAllUsers } from "@/lib/actions/userActions";
import Badge from "@/components/badge/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface iUserTableData {
  id: string;
  no: number;
  image: string;
  name: string;
  gender: string;
  email: string;
  role: string;
}

const genderWidth = "w-[80px]";
const badgeWidth = "w-[70px]";
const actionWidth = "w-[40px]";

const renderRow = (item: iUserTableData) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-background hover:bg-muted"
    >
      <td className="p-2 text-center text-sm">{item.no}</td>
      <td className="p-2">
        <Avatar>
          <AvatarImage src={item.image} alt="Avatar" />
          <AvatarFallback>WS</AvatarFallback>
        </Avatar>
      </td>
      <td className="p-2 text-sm">{item.name}</td>
      <td className={`${genderWidth} hidden p-2 text-sm lg:table-cell`}>
        <Badge
          text={item.gender}
          variant={item.gender}
          className={genderWidth}
        />
      </td>
      <td className="hidden p-2 text-sm md:table-cell">{item.email}</td>
      <td className={` ${badgeWidth} p-2 text-sm`}>
        <Badge text={item.role} variant={item.role} className={badgeWidth} />
      </td>
      <td className="p-2">
        <ActionsButton
          id={item.id}
          name={item.name}
          routes={[
            `/admin/user/${item.id}`,
            `/admin/user/update/${item.id}`,
            "",
          ]}
        />
      </td>
    </tr>
  );
};

const UserTable = async () => {
  const users = await getAllUsers();

  const columns = [
    {
      header: "No",
      accessor: "no",
      className: "w-[40px]",
    },
    {
      header: "Image",
      accessor: "image",
      className: "w-[70px]",
    },
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Gender",
      accessor: "gender",
      className: `${genderWidth} hidden lg:table-cell  text-center`,
    },
    {
      header: "Email",
      accessor: "email",
      className: "hidden md:table-cell ",
    },
    {
      header: "Role",
      accessor: "role",
      className: `${badgeWidth}  text-center`,
    },
    {
      header: "",
      accessor: "actions",
      className: `${actionWidth}  text-center`,
    },
  ];

  return (
    <Table
      columns={columns}
      renderRow={renderRow as (item: unknown) => React.ReactNode}
      data={users as iUserTableData[]}
    />
  );
};

export default UserTable;
