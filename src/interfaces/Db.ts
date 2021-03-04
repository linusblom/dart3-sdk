export interface DbId {
  id: number;
}

export interface Pagination<T> {
  total: number;
  items: T[];
}
