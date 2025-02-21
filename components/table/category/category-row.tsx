import Badge from "@/components/badge/badge";
import ActionsButton from "@/components/button/actions-button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { iCategoryTableData } from "@/types/types";

const CategoryRow = (item: iCategoryTableData) => {
  return (
    <tr key={item.id} className="table-content">
      <td className="p-2 text-center text-sm">{item.no}</td>
      <td className="p-2 text-sm">{item.name}</td>
      <td className="p-2 text-sm">
        <Badge text={item.type} variant="default" />
      </td>
      <td className="flex-center h-12 flex-col gap-2 text-sm md:flex-row">
        <Switch id="status-category" checked={item.is_active} />
        <Label htmlFor="status-category">
          {item.is_active ? "Active" : "Inactive"}
        </Label>
      </td>
      <td className="p-2">
        <ActionsButton
          type="category"
          id={item.id}
          name={item.name}
          routes={[
            `/admin/category/${item.id}`,
            `/admin/category/update/${item.id}`,
            "",
          ]}
        />
      </td>
    </tr>
  );
};

export default CategoryRow;
