import { GameType } from '../enums';

export interface Game {
  id: number;
  account_id: string;
  type: GameType;
  legs: number;
  sets: number;
  game_player_id: number;
  bet: number;
  started_at: Date;
  ended_at: Date;
}
