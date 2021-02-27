import { TransactionType } from '../enums';

export interface Transaction {
  id: number;
  type: TransactionType;
  debit: string;
  credit: string;
  balance: string;
  createdAt: string;
}

export interface CreateTransaction {
  amount: number;
  description?: string;
  receiverUid?: string;
}
