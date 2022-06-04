export interface ErrorResponse {
  success: boolean;
  statusCode: number;
  message: string;
  stack?: string;
}
