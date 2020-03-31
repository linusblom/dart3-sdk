import { GameType } from '../enums';

export interface Game {
  id: number;
  accountId: string;
  type: GameType;
  legs: number;
  sets: number;
  gamePlayerId: number;
  bet: number;
  startedAt: Date;
  endedAt: Date;
}
