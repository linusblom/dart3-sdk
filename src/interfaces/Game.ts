import { GameType, GameVariant } from '../enums';
import { GamePlayer } from './GamePlayer';

export interface Game {
  id: number;
  type: GameType;
  variant: GameVariant;
  legs: number;
  sets: number;
  gamePlayerId: number;
  bet: number;
  createdAt: Date;
  startedAt: Date;
  endedAt: Date;
  currentSet: number;
  currentLeg: number;
  players: GamePlayer[];
}

export interface CreateGame {
  type: GameType;
  variant: GameVariant;
  legs: number;
  sets: number;
  bet: number;
}
