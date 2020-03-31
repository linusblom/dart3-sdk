import { TransactionType } from '../enums';

export interface Transaction {
  id: number;
  playerId: number;
  type: TransactionType;
  debit: string;
  credit: string;
  balance: string;
  createdAt: Date;
}

export interface PlayerTransaction {
  type: TransactionType.Deposit | TransactionType.Withdrawal | TransactionType.Transfer;
  amount: number;
  toPlayerId?: number;
}
