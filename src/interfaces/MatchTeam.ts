export interface MatchTeam {
  id: number;
  matchId: number;
  teamId: number;
  sets: number;
  legs: number;
  score: number;
  gems: number;
  position: number;
  jackpotPaid: boolean;
  playerIds: number[];
}
