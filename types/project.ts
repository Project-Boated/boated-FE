export interface RequiredInfo {
  name: string;
  description: string;
  [key: string]: string;
}

export interface OptionalInfo {
  year: string;
  month: string;
  date: string;
  type?: 'AM' | 'PM';
  hour: string;
  minute: string;
}
