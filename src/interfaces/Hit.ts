import { HitType, Target } from '../enums';

export interface Hit {
  id: number;
  matchTeamId: number;
  playerId: number;
  dart: number;
  round: number;
  leg: number;
  set: number;
  value: number;
  multiplier: number;
  approved: number;
  target: Target;
  type: HitType;
  gem: boolean;
}

export interface RoundHit {
  id: string;
  matchTeamId: number;
  round: number;
  score: number;
  approved: number;
  gems: boolean[];
}
