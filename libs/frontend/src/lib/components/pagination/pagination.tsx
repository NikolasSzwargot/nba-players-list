export interface PaginationProps {
  recordsPerPage: number,
  totalRecords: number,
  paginate: (pageNumber: number) => void
}

export function Pagination({recordsPerPage, totalRecords, paginate}: PaginationProps) {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <nav>
        <ul className="flex flex-row mt-4 ml-4">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="pr-5">
              <a href="#" onClick={() => paginate(pageNumber)}>
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Pagination;
