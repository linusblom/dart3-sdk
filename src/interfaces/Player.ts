export interface Player {
  id: number;
  account_id: string;
  name: string;
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
}

export const makePlayer = (values: Partial<Player> = {}): Player => ({
  id: 0,
  account_id: '',
  name: '',
  balance: 0,
  created_at: null,
  color: '#FFFFFF',
  avatar: '',
  xp: 0,
  high_score: 0,
  one_hundred_eighties: 0,
  ...values,
});
