import { Transaction } from './Transaction';

export interface Player {
  id: number;
  uid: string;
  name: string;
  email: string;
  createdAt: Date;
  deletedAt: Date;
  color: string;
  avatar: string;
  xp: number;
  pro: boolean;
  double: number;
  pinDisabled?: boolean;
  turnOver?: string;
  net?: string;
  balance?: string;
  transactions?: Transaction[];
}

export interface CreatePlayer {
  name: string;
  email: string;
}

export interface UpdatePlayer {
  name: string;
  pro: number;
  double: number;
}
