/* eslint-disable-next-line */
import Cell from "../cell/cell";

export interface TableHeaderProps {
  headerLabels: (string | number)[];
}

export function TableHeader({headerLabels}: TableHeaderProps) {
  return (
    <tr>
      {headerLabels.map((label) => <Cell value={label} isHeader={true}/>)}
    </tr>
  );
}

export default TableHeader;
