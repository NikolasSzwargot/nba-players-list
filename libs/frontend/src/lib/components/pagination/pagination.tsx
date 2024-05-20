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
        <ul className="flex flex-row mt-4 justify-end mr-1">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="pr-5">
              <button onClick={() => paginate(pageNumber)}
              className="px-3 py-1 mr-1 text-stone-600 bg-white border border-stone-600 rounded-md
              hover:bg-stone-600 hover:text-white focus:outline-none focus:bg-stone-600 focus:text-white">
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Pagination;
