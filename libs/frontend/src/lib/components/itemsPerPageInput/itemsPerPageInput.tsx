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
      <div className="flex items-center justify-between bg-stone-100 p-2 rounded-md shadow-md">
        <p className="mr-2">Show</p>
        <select id="entriesPerPage" name="entriesPerPage" className="select-auto px-2 py-1 border rounded shadow-sm
        focus:outline-none focus:ring-stone-400" value={itemsPerPage} onChange={onSelectChangeHandler}>
          {options.map((value, index) => <option value={value} key={index} >{value}</option>)}
        </select>
        <p className="ml-2">Entries:</p>
      </div>
  );
}

export default ItemsPerPageInput;
