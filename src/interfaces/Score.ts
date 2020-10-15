import { RoundHit } from './Hit';
import { Match } from './Match';
import { MatchTeam } from './MatchTeam';
import { Game } from './Game';
import { RoundJackpot } from './Jackpot';
import { Target, HitType } from '../enums';

export interface Score {
  value: number;
  multiplier: number;
  bullDistance: number;
  target: Target;
}

export interface HitScore extends Score {
  approved: number;
  type: HitType;
}

export interface RoundScore {
  scores: HitScore[];
  nextScore: number;
  xp: number;
}

export interface RoundResponse {
  game?: Partial<Game>;
  matches: Partial<Match>[];
  teams: Partial<MatchTeam>[];
  hits: RoundHit[];
  jackpot?: RoundJackpot;
}
