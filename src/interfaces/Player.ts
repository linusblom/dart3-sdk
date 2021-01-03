import { Transaction } from './Transaction';

export const GRAVATAR = 'gravatar';

export interface Player {
  id: number;
  uid: string;
  name: string;
  email: string;
  createdAt: string;
  deletedAt: string;
  color: string;
  avatar: string;
  xp: number;
  pro: boolean;
  double: number;
  pinDisabled: boolean;
  turnOver?: string;
  net?: string;
  balance?: string;
  transactions?: Transaction[];
  statistics?: Statistics;
}

export interface CreatePlayer {
  name: string;
  email: string;
}

export interface UpdatePlayer {
  name: string;
  pro: boolean;
  double: number;
  avatar: string;
}

export interface Statistics {
  hits: number;
  misses: number;
  highest: number;
  average: number;
  oneHundredEighty: number;
}
