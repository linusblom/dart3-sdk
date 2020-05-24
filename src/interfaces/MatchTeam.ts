export interface MatchTeam {
  id: number;
  matchId: number;
  teamId: number;
  sets: number;
  legs: number;
  score: number;
  position: number;
  gems: number;
  playerIds: number[];
}
