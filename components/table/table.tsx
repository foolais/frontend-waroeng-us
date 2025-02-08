const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: unknown) => React.ReactNode;
  data: unknown[];
}) => {
  return (
    <table className="mt-4 w-full table-auto">
      <thead>
        <tr className="bg-background text-left text-sm font-semibold text-gray-400">
          {columns.map((col) => (
            <th key={col.accessor} className={`${col.className} px-2 py-4`}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
