export interface MatchTeam {
  id: number;
  matchId: number;
  teamId: number;
  order: number;
  sets: number;
  legs: number;
  score: number;
  gems: number;
  position: number;
  jackpotPaid: boolean;
  playerIds: number[];
}
