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
  pro: boolean;
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
  pro: number;
}
