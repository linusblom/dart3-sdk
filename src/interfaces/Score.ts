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
