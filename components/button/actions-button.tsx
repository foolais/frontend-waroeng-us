import { Info, Pencil, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const ActionsButton = () => {
  return (
    <div className="flex-center gap-1">
      <Button asChild size={"icon"} variant={"link"}>
        <Info color="hsl(var(--primary))" />
      </Button>
      <Button asChild size={"icon"} className="bg-transparent" variant={"link"}>
        <Pencil color="hsl(var(--secondary))" />
      </Button>
      <Button asChild size={"icon"} variant={"link"}>
        <Trash2 color="hsl(var(--destructive))" />
      </Button>
    </div>
  );
};

export default ActionsButton;
