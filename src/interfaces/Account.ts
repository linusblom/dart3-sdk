import { Permission } from '../enums';

export interface Account {
  created: number;
  currentGame: string;
  currentJackpot: string;
  permissions: Permission[];
  currency: string;
}
