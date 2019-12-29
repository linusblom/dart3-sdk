import { GamePlayer } from './GamePlayer';
import { BoardData } from './BoardData';
import { GameType } from '../enums';

export interface Game {
  id: string;
  type: GameType;
  bet: number;
  started: number;
  ended: number;
  playerIds: string[];
  prizePool: number;
  currentTurn: number;
  currentRound: number;
  players: GamePlayer[];
  boardData?: BoardData;
}
