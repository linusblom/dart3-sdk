import { RoundHit } from './Hit';
import { Match } from './Match';
import { MatchTeam } from './MatchTeam';
import { Game } from './Game';
import { RoundJackpot } from '.';

export interface Score {
  value: number;
  multiplier: number;
}

export interface ScoreApproved extends Score {
  approvedScore: number;
}

export interface RoundScore {
  scores: ScoreApproved[];
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
