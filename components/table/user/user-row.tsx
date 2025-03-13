import { auth } from "@/auth";
import Badge from "@/components/badge/badge";
import ActionsButton from "@/components/button/actions-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { iUserTableData } from "@/types/types";

const UserRow = async (item: iUserTableData) => {
  const session = await auth();
  const storeId = session?.user?.store_id ?? "";

  return (
    <tr key={item.id} className="table-content">
      <td className="p-2 text-center text-sm">{item.no}</td>
      <td className="p-2">
        <Avatar>
          <AvatarImage src={item.image} alt="Avatar" />
          <AvatarFallback>WS</AvatarFallback>
        </Avatar>
      </td>
      <td className="p-2 text-sm">{item.name}</td>
      <td className="hidden p-2 text-sm lg:table-cell">
        <Badge text={item.gender} variant={item.gender} />
      </td>
      <td className="hidden p-2 text-sm md:table-cell">{item.email}</td>
      <td className="p-2 text-sm">
        <Badge text={item.role} variant={item.role} />
      </td>
      <td className="p-2">
        <ActionsButton
          type="user"
          id={item.id}
          name={item.name}
          routes={[
            `/${storeId}/admin/user/${item.id}`,
            `/${storeId}/admin/user/update/${item.id}`,
            "",
          ]}
        />
      </td>
    </tr>
  );
};

export default UserRow;
