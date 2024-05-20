import {useState} from "react";

export function usePagination(initialPage: number, initialRecordsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [recordsPerPage, setRecordsPerPage] = useState<number>(initialRecordsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const indexOfLastRecord: number = currentPage * recordsPerPage;
  const indexOfFirstRecord: number = indexOfLastRecord - recordsPerPage;

  return {
    currentPage,
    paginate,
    recordsPerPage,
    setRecordsPerPage,
    indexOfFirstRecord,
    indexOfLastRecord
  }
}
