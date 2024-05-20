import axios from 'axios';
import * as process from "process";

axios.defaults.headers['Authorization'] = import.meta.env.VITE_API_KEY;

export async function fetchDataFromAPI<T>(setData: (data: T[]) => void, url: string) {
  try {
    const response = await axios.get(url);
    setData(response.data.data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}
