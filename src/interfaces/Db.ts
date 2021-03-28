export interface DbId {
  id: number;
}

export interface Pagination<T> {
  total: number;
  limit: number;
  offset: number;
  items: T[];
}
