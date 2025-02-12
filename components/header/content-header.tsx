import UserAvatar from "../user/user-avatar";
import PathHeading from "./path-heading";

const ContentHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <PathHeading title={title} description={description} />
      <UserAvatar />
    </div>
  );
};

export default ContentHeader;
