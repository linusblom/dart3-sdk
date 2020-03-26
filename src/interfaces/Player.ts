export interface Player {
  id: number;
  account_id: string;
  name: string;
  email: string;
  balance: number;
  created_at: Date;
  color: string;
  avatar: string;
  xp: number;
  high_score: number;
  one_hundred_eighties: number;
}

export interface CreatePlayer {
  name: string;
  email: string;
}

export interface UpdatePlayer extends CreatePlayer {
  id: number;
}
