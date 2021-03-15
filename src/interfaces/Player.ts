import { Role } from '../enums';

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
  roles: Role[];
  single: number;
  double: number;
  triple: number;
  pinDisabled: boolean;
  turnOver?: string;
  net?: string;
  balance?: string;
}

export interface CreatePlayer {
  name: string;
  email: string;
}

export interface UpdatePlayer {
  name: string;
  roles: Role[];
  single: number;
  double: number;
  triple: number;
  avatar: string;
}

export interface PlayerStats {
  hits: number;
  misses: number;
  highest: number;
  average: number;
  oneHundredEighty: number;
}
