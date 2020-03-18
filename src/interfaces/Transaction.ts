import { TransactionType } from '../enums';

export interface Transaction {
  id: number;
  player_id: number;
  type: TransactionType;
  debit: number;
  credit: number;
  balance: number;
  created_at: Date;
}
