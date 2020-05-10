import { GameScore } from './GameScore';

export interface GamePlayer {
  id: number;
  playerId: number;
  connectedId: number;
  turn: number;
  legs: number;
  sets: number;
  total: number;
  position: number;
  xp: number;
  win: number;
  gems: number;
  scores: GameScore[];
}

export interface CreateGamePlayer {
  playerId: number;
}
