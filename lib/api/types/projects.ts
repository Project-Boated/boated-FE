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

// 프로젝트 초대 확인, 승인, 거절
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

// 프로젝트 칸반 불러오기, lane 추가, 삭제

export interface AssignedAccount {
  id: number;
  nickname: string;
}
export interface TaskState {
  id: number;
  name: string;
  description: string;
  deadline: string;
  dday: number;
  fileCount: number;
  assignedAccounts: Array<AssignedAccount>;
}

export interface KanbanColumnState {
  id: number;
  name: string;
  tasks: Array<TaskState>;
}

export interface ProjectKanbanResponse {
  lanes: Array<KanbanColumnState>;
}
