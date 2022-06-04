export type Method = 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
}
