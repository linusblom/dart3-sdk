import { GameType } from '../enums';
import { TeamPlayer } from './TeamPlayer';
import { Results } from './Results';

export interface Game {
  id: number;
  uid: string;
  type: GameType;
  tournament: boolean;
  team: boolean;
  legs: number;
  sets: number;
  bet: number;
  prizePool: string;
  createdAt: Date;
  startedAt: Date;
  endedAt: Date;
  pendingPlayers?: TeamPlayer[];
  results?: Results[];
}

export interface CreateGame {
  type: GameType;
  tournament: boolean;
  team: boolean;
  legs: number;
  sets: number;
  bet: number;
}
