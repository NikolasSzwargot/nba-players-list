import {Team} from "./Team";
export interface Player {
  "id": number,
  "first_name": string,
  "last_name": string,
  "position": string,
  "height": string,
  "weight": string,
  "jersey_number": string,
  "college": string,
  "country": string,
  "draft_year": number,
  "draft_round": number,
  "draft_number": number,
  "team": Team;
}

export default Player;
