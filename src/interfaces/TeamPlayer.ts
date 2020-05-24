export interface TeamPlayer {
  id: number;
  teamId: number;
  playerId: number;
  gameId: number;
  xp: number;
}

export interface CreateTeamPlayer {
  playerId: number;
}
