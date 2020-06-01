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
  approvedScore: number;
  gem: boolean;
}

export interface RoundHit {
  id: string;
  teamId: number;
  round: number;
  score: number;
  approvedScore: number;
}
