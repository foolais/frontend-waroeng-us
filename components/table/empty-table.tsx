const EmptyTable = ({ text }: { text: string }) => {
  return (
    <div className="text-md text-center font-bold tracking-wider text-secondary">
      {text}
    </div>
  );
};

export default EmptyTable;
