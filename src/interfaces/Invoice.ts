export interface Invoice {
  id: number;
  debit: string;
  credit: string;
  balance: string;
  startAt: Date;
  endAt: Date;
  dueAt: Date;
  paidAt: Date;
}
