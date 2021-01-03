import { GameType, Check } from '../enums';
import { TeamPlayer } from './TeamPlayer';
import { Result } from './Results';

export interface Game {
  id: number;
  uid: string;
  userId: string;
  type: GameType;
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
  createdAt: string;
  startedAt: string;
  endedAt: string;
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

export interface StartGame {
  tournament: boolean;
  team: boolean;
  random: boolean;
}
