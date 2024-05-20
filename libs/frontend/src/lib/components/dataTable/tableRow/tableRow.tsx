/* eslint-disable-next-line */
import Cell from "../cell/cell";

export interface TableRowProps {
  rowValues: (string | number)[],
  index: number
}

export function TableRow({rowValues, index}: TableRowProps) {
  const rowClass = index % 2 === 0 ? "bg-stone-200 hover:bg-stone-300 " +
    "text-gray-900" : "bg-stone-300 hover:bg-stone-400 text-gray-1000";
  return (
    <tr className={rowClass}>
      {rowValues.map((value, index) => <Cell key={index} value={value} isHeader={false} />)}
    </tr>
  );
}

export default TableRow;
