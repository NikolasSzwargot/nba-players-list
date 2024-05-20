import {useEffect, useState} from "react";
import {fetchDataFromAPI} from "@nba-players-list/shared";

export function useFetch<T extends unknown>(url: string): {data: T[]} {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {const fetchData = fetchDataFromAPI(setData, url)}, []);

  return { data }
}
