export interface Invoice {
  id: number;
  userId: string;
  balance: number;
  startAt: Date;
  endAt: Date;
  dueAt: Date;
  paidAt: Date;
}
