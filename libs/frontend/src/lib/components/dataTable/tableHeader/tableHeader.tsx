/* eslint-disable-next-line */
import Cell from "../cell/cell";

export interface TableHeaderProps {
  headerLabels: (string | number)[];
}

export function TableHeader({headerLabels}: TableHeaderProps) {
  return (
    <tr className="bg-red-700 text-white">
      {headerLabels.map((label, index) => <Cell key={index} value={label} isHeader={true}/>)}
    </tr>
  );
}

export default TableHeader;
