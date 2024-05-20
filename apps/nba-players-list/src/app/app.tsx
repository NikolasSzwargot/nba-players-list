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
    <Card classes="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">NBA players</h1>
      <ItemsPerPageInput setItemsPerPage={setPlayersPerPage} itemsPerPage={playersPerPage}
                         highBoundary={50} lowBoundary={10} step={10}/>
      <SearchBox onSearchChange={setSearchedText} paginate={paginate}
                 searchedText={searchedText}/>
      {<Table headerLabels={headerLabels} rowsValues={rowValues} />}
      <Pagination recordsPerPage={playersPerPage} totalRecords={filteredData.length} paginate={paginate}/>
    </Card>
  );
}

export default App;
