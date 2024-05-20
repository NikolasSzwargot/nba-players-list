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
      <div>
        <label htmlFor="seach-box">Search: </label>
        <input type="text" name="search-box" value={searchedText} onChange={onSearchChangeHandler}/>
      </div>
    </>
  );
}

export default SearchBox;
