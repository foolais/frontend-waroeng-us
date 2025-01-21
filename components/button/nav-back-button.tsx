import { Button } from "../ui/button";
import Link from "next/link";

const NavBackButton = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return (
    <Link href={route}>
      <Button size={"sm"} variant={"secondary"} className="w-max rounded-xl">
        {children}
      </Button>
    </Link>
  );
};

export default NavBackButton;
