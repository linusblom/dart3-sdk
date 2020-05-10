import { GamePlayer } from './GamePlayer';

export interface Score {
  value: number;
  multiplier: number;
}

export interface ScoreTotal extends Score {
  total: number;
}

export interface RoundScore {
  scores: ScoreTotal[];
  total: number;
  xp: number;
}

export interface ScoreResponse {
  gamePlayerId: number;
  player: GamePlayer;
}
