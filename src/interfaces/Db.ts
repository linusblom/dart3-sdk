export interface DbId {
  id: number;
}

export interface Pagination {
  limit?: number;
  offset?: number;
  filter?: string;
  order?: 'asc' | 'desc';
  orderBy?: string;
}
