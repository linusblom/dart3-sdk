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

export interface TransactionPayload {
  type: TransactionType;
  amount: number;
  description?: string;
}
