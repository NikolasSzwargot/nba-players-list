import {ItemsPerPageInput, Card, Pagination, Table, SearchBox} from "@nba-players-list/frontend"
import {useFetch, usePagination} from "@nba-players-list/frontend";
import {useFilteredPlayerData} from "../hooks/useFilteredPlayerData/useFilteredData";
import {Player} from "@nba-players-list/shared";
import * as process from "process";

export function App() {

  const { data: nbaData } = useFetch<Player>(import.meta.env.VITE_GET_ALL_PLAYERS_REQUEST);
  const {
    paginate,
    recordsPerPage: playersPerPage,
    setRecordsPerPage: setPlayersPerPage,
    indexOfFirstRecord: indexOfFirstPlayer,
    indexOfLastRecord: indexOfLastPlayer} = usePagination(1, 10)

  const {
    filteredData,
    searchedText,
    setSearchedText,
    headerLabels
  } = useFilteredPlayerData(nbaData)

  const rowValues: Array<Array<string | number>> =
    filteredData
      .slice(indexOfFirstPlayer, indexOfLastPlayer)
        .map((player) => Object.values(player)
          .map((objVal) => objVal || '-'))

  return (
    <div className="bg-blue-200 min-h-screen">
      <Card classes="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-full
      max-h-full w-full h-full flex flex-col shadow-sm bg-blue-200 border border-b-0 font-sans overflow-auto">
        <h1 className="text-4xl font-bold text-center text-white
        bg-blue-600 p-4 mb-2 rounded-tl-lg rounded-tr-lg shadow-md">NBA Players</h1>
        <Card classes="flex flex-row justify-end mt-4" >
          <SearchBox onSearchChange={setSearchedText} paginate={paginate}
                  searchedText={searchedText}/>
        </Card>
        {<Table headerLabels={headerLabels} rowsValues={rowValues} />}
        <Card classes="flex flex-row justify-between items-center mt-4" >
          <ItemsPerPageInput setItemsPerPage={setPlayersPerPage} itemsPerPage={playersPerPage}
                          highBoundary={50} lowBoundary={10} step={10}/>
          <Pagination recordsPerPage={playersPerPage} totalRecords={filteredData.length} paginate={paginate}/>
        </Card>
      </Card>
    </div>
  );
}

export default App;
