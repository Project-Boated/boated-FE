export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

export interface PersonInfoState {
  id: number;
  nickname: string;
}
