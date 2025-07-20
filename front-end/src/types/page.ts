export interface IPage<T> {
  data: T;
  total: number;
  limit: number;
  offset: number;
}
