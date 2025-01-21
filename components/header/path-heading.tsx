const PathHeading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-heading">{title}</h1>
      <span className="text-span">{description}</span>
    </div>
  );
};

export default PathHeading;
