import {Player} from "@nba-players-list/shared";

export type PlayerMapped = Omit<Player, 'team'> & {
  team: string;
}
