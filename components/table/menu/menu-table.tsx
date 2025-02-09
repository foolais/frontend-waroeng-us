import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Table from "../table";
import Badge from "@/components/badge/badge";
import ActionsButton from "@/components/button/actions-button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const availabilityWidth = "w-[80px]";
const categoryWidth = "w-[100px]";
const actionWidth = "w-[40px]";

const renderRow = () => {
  return (
    <tr className="table-content">
      <td className="p-2 text-center text-sm">100</td>
      <td className="p-2">
        <Avatar>
          {/* <AvatarImage src={item.image} alt="Avatar" /> */}
          <AvatarFallback>WS</AvatarFallback>
        </Avatar>
      </td>
      <td className="p-2 text-sm">Nama</td>

      <td className={`${categoryWidth} hidden p-2 text-sm lg:table-cell`}>
        <Badge text="Makanan" variant="default" className={categoryWidth} />
      </td>
      <td className="p-2 text-sm">2000</td>
      <td
        className={`${availabilityWidth} flex-center flex-col gap-2 p-2 text-sm md:flex-row`}
      >
        <Switch id="status-category" checked={true} />
        <Label htmlFor="status-category">Empty</Label>
      </td>
      <td className="p-2">
        <ActionsButton
          id=""
          name="Menus"
          routes={[`/admin/user/${""}`, `/admin/user/update/${""}`, ""]}
        />
      </td>
    </tr>
  );
};

const MenuTable = () => {
  const columns = [
    { header: "No", accessor: "no", className: "w-[40px]" },
    { header: "Image", accessor: "image", className: "w-[70px]" },
    { header: "Name", accessor: "name" },

    {
      header: "Category",
      accessor: "category",
      className: `${categoryWidth} hidden lg:table-cell  text-center`,
    },
    { header: "Price", accessor: "price" },
    {
      header: "Availability",
      accessor: "availability",
      className: `${availabilityWidth} text-center`,
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
      data={Array.from({ length: 10 }, (_, index) => index + 1)}
    />
  );
};

export default MenuTable;
