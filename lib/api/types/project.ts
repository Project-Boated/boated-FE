export interface ProjectCreateRequestProps {
  name: string;
  description: string;
  deadline?: string;
}

export interface ProjectCreateResponse {
  id: number;
}
