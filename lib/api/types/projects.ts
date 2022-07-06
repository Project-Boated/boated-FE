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

export interface GetProjectMyProps {
  captain: 'term' | 'not-term' | undefined;
  crew: 'term' | 'not-term' | undefined;
  page: number;
  size: number;
  sort:
    | 'name,asc'
    | 'name,desc'
    | 'deadline,asc'
    | 'deadline,desc'
    | 'createdDate,asc'
    | 'createdDate,desc'
    | undefined;
}

export interface GetProjectsResponse {
  projects: Array<ProjectInfoState>;
}

export interface GetProjectMyResponse {
  page: number;
  size: number;
  hasNext: boolean;
  content: Array<ProjectInfoState>;
}
export interface ProjectInviteState {
  id: number;
  createdDate: string;
  name: string;
  description: string;
  captainNickname: string;
}

export interface GetProjectsInvitesResponse {
  invitations: Array<ProjectInviteState>;
}

export interface PostProjectsInviteStatusRequestProps {
  id: number;
}
