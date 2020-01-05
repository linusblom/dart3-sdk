import { TransactionType } from '../enums';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  balance: number;
  timestamp: number;
}
