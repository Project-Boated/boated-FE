import { PersonInfoState } from './common';

export interface PostProjectRequestProps {
  name: string;
  description: string;
  deadline?: string;
}

export interface PostProjectResponse {
  id: number;
}

export interface ProjectInfoState {
  id: number;
  name: string;
  description: string;
  deadline: string;
  captain: PersonInfoState;
  crews: Array<PersonInfoState>;
  terminated: boolean;
  dday: number;
  totalDay: number;
}

export interface GetProjectsResponse {
  projects: Array<ProjectInfoState>;
}
