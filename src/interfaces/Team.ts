export interface Team {
  id: number;
  gameId: number;
}

export interface Winner {
  playerId: number;
  teamId: number;
  win: number;
}
