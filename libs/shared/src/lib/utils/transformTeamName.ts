import {Player} from "@nba-players-list/shared";
import {PlayerMapped} from "../interfaces/PlayerMapped";

export function transformTeamName(players: Player[]): PlayerMapped[] {
  return players.map((player) => ({
    ...player,
    team: player.team.full_name
  }))
}
