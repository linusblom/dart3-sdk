export interface MatchTeam {
  id: number;
  matchId: number;
  teamId: number;
  sets: number;
  legs: number;
  score: number;
  gems: number;
  active: boolean;
  jackpotPaid: boolean;
  playerIds: number[];
}
