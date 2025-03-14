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
          <NavBackButton route={routesBack}>
            <ArrowLeft />
          </NavBackButton>
        )}
        <PathHeading title={title} description={description} />
      </div>
      <div className="mr-4">
        <UserAvatar />
      </div>
    </div>
  );
};

export default ContentHeader;
