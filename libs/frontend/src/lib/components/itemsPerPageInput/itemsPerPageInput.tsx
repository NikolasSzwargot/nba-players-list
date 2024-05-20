import React from "react";

export interface ItemsPerPageInputProps {
  setItemsPerPage: (itemsPerPage: number) => void,
  itemsPerPage: number,
  highBoundary: number,
  lowBoundary: number,
  step: number
}

export function ItemsPerPageInput({setItemsPerPage, itemsPerPage, highBoundary, lowBoundary, step}: ItemsPerPageInputProps) {
  const options: number[] = [];
  for (let i = lowBoundary; i <= highBoundary; i += step) {
    options.push(i);
  }

  function onSelectChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setItemsPerPage(Number(event.target.value));
  }
  return (
      <div className="flex flex-row">
        <p>Show</p>
        <select id="entriesPerPage" name="entriesPerPage" className="select-auto ml-3 w-11" value={itemsPerPage} onChange={onSelectChangeHandler}>
          {options.map((value) => <option value={value} >{value}</option>)}
        </select>
        <p className="ml-2">Entries:</p>
      </div>
  );
}

export default ItemsPerPageInput;
