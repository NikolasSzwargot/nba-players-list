import {PlayerMapped} from "../../../../../libs/shared/src/lib/interfaces/PlayerMapped";
import {Player, transformTeamName} from "@nba-players-list/shared";
import {useState} from "react";

export function useFilteredPlayerData(data: Player[]) {
  const [searchedText, setSearchedText] = useState('');
  const headerLabels: string[] = Object.keys(data[0] || []).map(label => label.replace(/_/g, ' '));

  const filteredData: PlayerMapped[] =
    transformTeamName(data)
      .filter((player) =>
        Object.values(player)
          .some(value => value != null && value.toString().toLowerCase()
            .includes(searchedText.toLowerCase())))

  return {
    searchedText,
    setSearchedText,
    headerLabels,
    filteredData
  }
}
