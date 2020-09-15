import { GameType, Check } from '../enums';
import { TeamPlayer } from './TeamPlayer';
import { Result } from './Results';
import { GameState } from '../enums/GameState';

export interface Game {
  id: number;
  uid: string;
  type: GameType;
  state: GameState;
  random: boolean;
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
  random: boolean;
  team: boolean;
  legs: number;
  sets: number;
  bet: number;
  checkIn: Check;
  checkOut: Check;
  startScore: number;
  tieBreak: number;
}
