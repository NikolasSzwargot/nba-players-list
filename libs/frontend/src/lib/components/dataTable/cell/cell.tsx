export interface CellProps {
  value: string | number;
  isHeader: boolean;
}

export function Cell({value, isHeader}: CellProps) {
  if (isHeader) {
    return <th scope="col" className="px-4 py-2 border-b text-left
    text-gray-700 font-semibold bg-gray-100">{value}</th>;
  }
  return <td className="px-4 py-2 border-b text-gray-800">{value}</td>;
}

export default Cell;
