import { Id, PersonInfoState } from './common';

export interface PostProjectRequestProps {
  name: string;
  description: string;
  deadline?: string;
}

export interface ProjectInfoState extends Id {
  name: string;
  description: string;
  deadline: string;
  captain: PersonInfoState;
  terminated: boolean;
  dday: number;
  totalDay: number;
  taskSize: number;
  totalFileSize: number;
}

export interface MyProjectState extends Id {
  name: string;
  description: string;
  deadline: string;
  captain: PersonInfoState;
  crews: Array<PersonInfoState>;
  dday: number;
  totalDay: number;
  terminated: boolean;
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
  content: Array<MyProjectState>;
}

export interface CrewState extends Id {
  username: string;
  nickname: string;
  profileImageUrl: string | null;
}

export interface CrewsState {
  crews: Array<CrewState>;
}

// 프로젝트 초대 확인, 승인, 거절
export interface ProjectInviteState extends Id {
  createdDate: string;
  name: string;
  description: string;
  captainNickname: string;
}

export interface GetProjectsInvitesResponse {
  invitations: Array<ProjectInviteState>;
}

// 프로젝트 칸반 불러오기, lane 추가, 삭제
export interface PutProjectsKanbanNameRequestProps {
  projectId: number;
  kanbanLaneId: number;
  name: string;
}

export interface DeleteProjectsKanbanRequestProps {
  projectId: number;
  kanbanLaneId: number;
}

export interface PostProjectsKanbanChangeRequestProps {
  projectId: number;
  originalIndex: number;
  changeIndex: number;
}

export interface PostProjectsKanbanTaskCreateProps {
  projectId: number;
  name: string;
  description: string;
  deadline: string;
}

export interface AssignedAccount extends Id {
  nickname: string;
}

export interface TaskState extends Id {
  name: string;
  description: string;
  deadline: string;
  dday: number;
  fileCount: number;
  assignedAccounts: Array<AssignedAccount>;
  like: boolean;
}

export interface KanbanColumnState extends Id {
  name: string;
  tasks: Array<TaskState>;
}

export interface GetProjectKanbanResponse {
  lanes: Array<KanbanColumnState>;
}

export interface DeleteProjectsKanbanTaskRequestProps {
  projectId: number;
  taskId: number;
}

export interface PostProjectsKanbanTaskChangeRequestProps {
  projectId: number;
  originalLaneId: number;
  originalTaskIndex: number;
  changeLaneId: number;
  changeTaskIndex: number;
}

// task 찜하기
export interface PostProjectsKanbanTaskLikeRequestProps {
  projectId: number;
  taskId: number;
}
