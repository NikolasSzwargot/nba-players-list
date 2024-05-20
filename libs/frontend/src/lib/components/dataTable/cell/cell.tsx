export interface CellProps {
  value: string | number;
  isHeader: boolean;
}

export function Cell({value, isHeader}: CellProps) {
  if (isHeader) {
    return <th scope="col" className="px-4 py-2">{value}</th>;
  }
  return <td className="border px-4 py-2">{value}</td>;
}

export default Cell;
