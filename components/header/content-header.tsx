import { ArrowLeft } from "lucide-react";
import NavBackButton from "../button/nav-back-button";
import UserAvatar from "../user/user-avatar";
import PathHeading from "./path-heading";

const ContentHeader = ({
  title,
  description,
  routesBack,
}: {
  title: string;
  description: string;
  routesBack?: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {routesBack && (
          <NavBackButton route="/admin/menu">
            <ArrowLeft />
          </NavBackButton>
        )}
        <PathHeading title={title} description={description} />
      </div>
      <UserAvatar />
    </div>
  );
};

export default ContentHeader;
