import { RoundHit } from './Hit';
import { Match } from './Match';
import { MatchTeam } from './MatchTeam';

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
  match: Match;
  team: MatchTeam;
  hits: RoundHit[];
}
