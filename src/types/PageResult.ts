export interface PageResult<T> {
  count: number;
  next: string;
  previous: any;
  results: T[];
}
