/* eslint-disable-next-line */
import Cell from "../cell/cell";

export interface TableRowProps {
  rowValues: (string | number)[];
}

export function TableRow({rowValues}: TableRowProps) {
  return (
    <tr className="hover:bg-slate-50">
      {rowValues.map((value) => <Cell value={value} isHeader={false} />)}
    </tr>
  );
}

export default TableRow;
