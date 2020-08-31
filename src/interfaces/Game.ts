import { GameType, Check } from '../enums';
import { TeamPlayer } from './TeamPlayer';
import { Result } from './Results';

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
  checkIn: Check;
  checkOut: Check;
  startScore: number;
  tieBreak: number;
  createdAt: Date;
  startedAt: Date;
  endedAt: Date;
  pendingPlayers?: TeamPlayer[];
  results?: Result[];
}

export interface CreateGame {
  type: GameType;
  tournament: boolean;
  team: boolean;
  legs: number;
  sets: number;
  bet: number;
  checkIn: Check;
  checkOut: Check;
  startScore: number;
  tieBreak: number;
}
