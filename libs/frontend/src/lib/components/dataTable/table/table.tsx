/* eslint-disable-next-line */
import TableHeader from "../tableHeader/tableHeader";
import TableRow from "../tableRow/tableRow";

export interface TableProps {
  headerLabels: (string | number)[];
  rowsValues: (string | number)[][];
}

export function Table({headerLabels, rowsValues}: TableProps) {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <TableHeader headerLabels={headerLabels} />
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
      {rowsValues.map((row) => <TableRow rowValues={row} />)}
      </tbody>
    </table>
  );
}

export default Table;
