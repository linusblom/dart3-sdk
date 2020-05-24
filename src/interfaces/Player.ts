import { Transaction } from './Transaction';

export interface Player {
  id: number;
  name: string;
  email: string;
  balance: string;
  createdAt: Date;
  deletedAt: Date;
  color: string;
  avatar: string;
  xp: number;
  seed: number;
  turnOver: string;
  net: string;
  transactions: Transaction[];
}

export interface CreatePlayer {
  name: string;
  email: string;
}

export interface UpdatePlayer {
  name: string;
  seed: number;
}
