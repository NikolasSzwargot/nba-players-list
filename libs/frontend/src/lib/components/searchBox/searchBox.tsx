import React from "react";

export interface SearchBoxProps {
  onSearchChange: (searchedText: string) => void,
  paginate: (page: number) => void,
  searchedText: string
}

export function SearchBox({onSearchChange, paginate, searchedText}: SearchBoxProps) {
  function onSearchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    onSearchChange(event.target.value);
    paginate(1);
  }

  return (
    <>
      <div className="flex items-center space-x-2 p-2 bg-stone-100 rounded shadow-md border border-b mb-3">
        <label htmlFor="seach-box" className="text-gray-700">Search: </label>
        <input type="text" name="search-box" value={searchedText} onChange={onSearchChangeHandler}
        className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-stone-400"
        placeholder="Search here..."/>
      </div>
    </>
  );
}

export default SearchBox;
