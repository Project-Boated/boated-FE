import request from './request';

import {
  Id,
  CrewsState,
  PostProjectRequestProps,
  ProjectInfoState,
  GetProjectMyProps,
  GetProjectsResponse,
  GetProjectMyResponse,
  GetProjectsInvitesResponse,
  GetProjectKanbanResponse,
  PostProjectsKanbanRequestProps,
  PostProjectsKanbanChangeRequestProps,
  PostProjectsKanbanTaskChangeRequestProps,
  PostProjectsKanbanTaskLikeRequestProps,
  DeleteProjectsKanbanRequestProps,
  DeleteProjectsKanbanTaskRequestProps,
} from './types';

const projectsBaseUrl = '/api/projects';

const projectsUrl = {
  projects: projectsBaseUrl,
  projectsMy: `${projectsBaseUrl}/my`,
  projectsMyCaptain: `${projectsBaseUrl}/my/captain`,
  projectsMyCaptainTerminated: `${projectsBaseUrl}/my/captain/terminated`,
  projectsMyCrew: `${projectsBaseUrl}/my/crew`,
  projectsMyCrewTerminated: `${projectsBaseUrl}/my/crew/terminated`,

  projectsInvites: '/api/account/invitations',
  projectsInvitesAccept: (invitationId: number) => `/api/account/invitations/${invitationId}/accept`,
  projectsInvitesReject: (invitationId: number) => `/api/account/invitations/${invitationId}/reject`,

  projectsById: (id: number) => `${projectsBaseUrl}/${id}`,
  projectsByIdCrews: (id: number) => `${projectsBaseUrl}/${id}/crews`,

  projectsKanban: (projectId: number) => `${projectsBaseUrl}/${projectId}/kanban`,
  projectsKanbanLane: (projectId: number) => `${projectsBaseUrl}/${projectId}/kanban/lanes`,
  projectsKanbanLaneDelete: ({ projectId, kanbanLaneId }: DeleteProjectsKanbanRequestProps) =>
    `${projectsBaseUrl}/${projectId}/kanban/lanes/${kanbanLaneId}`,
  projectsKanbanLaneChange: ({ projectId, originalIndex, changeIndex }: PostProjectsKanbanChangeRequestProps) =>
    `${projectsBaseUrl}/${projectId}/kanban/lanes/change/${originalIndex}/${changeIndex}`,

  projectsKanbanTaskDelete: ({ projectId, taskId }: DeleteProjectsKanbanTaskRequestProps) =>
    `${projectsBaseUrl}/${projectId}/kanban/lanes/tasks/${taskId}`,
  projectsKanbanTaskChange: ({
    projectId,
    originalLaneId,
    originalTaskIndex,
    changeLaneId,
    changeTaskIndex,
  }: PostProjectsKanbanTaskChangeRequestProps) =>
    `${projectsBaseUrl}/${projectId}/kanban/lanes/tasks/change/${originalLaneId}/${originalTaskIndex}/${changeLaneId}/${changeTaskIndex}`,

  projectsKanbanTaskLike: ({ projectId, taskId }: PostProjectsKanbanTaskLikeRequestProps) =>
    `${projectsBaseUrl}/${projectId}/tasks/${taskId}/like`,
};

export const createProject = ({ name, description, deadline }: PostProjectRequestProps) =>
  request<Id, PostProjectRequestProps>('POST', projectsUrl.projects, {
    name,
    description,
    deadline,
  });

export const getProjectMy = (params: GetProjectMyProps) =>
  request<GetProjectMyResponse, null, GetProjectMyProps>('GET', projectsUrl.projectsMy, null, params).then(
    (res) => res.data,
  );

export const getProjectsMyCaptain = () =>
  request<GetProjectsResponse>('GET', projectsUrl.projectsMyCaptain).then((res) => res.data.projects);

export const getProjectsMyCaptainTerminated = () =>
  request<GetProjectsResponse>('GET', projectsUrl.projectsMyCaptainTerminated).then((res) => res.data.projects);

export const getProjectsMyCrew = () =>
  request<GetProjectsResponse>('GET', projectsUrl.projectsMyCrew).then((res) => res.data.projects);

export const getProjectsMyCrewTerminated = () =>
  request<GetProjectsResponse>('GET', projectsUrl.projectsMyCrewTerminated).then((res) => res.data.projects);

export const getProjectsById = (id: number) =>
  request<ProjectInfoState>('GET', projectsUrl.projectsById(id)).then((res) => res.data);

export const getProjectsByIdCrews = (id: number) =>
  request<CrewsState>('GET', projectsUrl.projectsByIdCrews(id)).then((res) => res.data.crews);

// 프로젝트 초대 확인, 승인, 거절
export const getProjectsInvite = () =>
  request<GetProjectsInvitesResponse>('GET', projectsUrl.projectsInvites).then((res) => res.data.invitations);

export const postProjectsInviteAccept = (invitationId: number) =>
  request('POST', projectsUrl.projectsInvitesAccept(invitationId));

export const postProjectsInviteReject = (invitationId: number) =>
  request('POST', projectsUrl.projectsInvitesReject(invitationId));

// 프로젝트 칸반 불러오기, lane 추가, 삭제
export const getProjectsKanban = (projectId: number) =>
  request<GetProjectKanbanResponse>('GET', projectsUrl.projectsKanban(projectId)).then((res) => res.data.lanes);

export const postProjectsKanbanLane = ({ projectId, name }: PostProjectsKanbanRequestProps) =>
  request('POST', projectsUrl.projectsKanbanLane(projectId), { name });

export const deleteProjectsKanbanLane = ({ projectId, kanbanLaneId }: DeleteProjectsKanbanRequestProps) =>
  request('DELETE', projectsUrl.projectsKanbanLaneDelete({ projectId, kanbanLaneId }));

export const postProjectsKanbanLaneChange = ({
  projectId,
  originalIndex,
  changeIndex,
}: PostProjectsKanbanChangeRequestProps) => {
  request('POST', projectsUrl.projectsKanbanLaneChange({ projectId, originalIndex, changeIndex }));
};

export const deleteProjectsKanbanTask = ({ projectId, taskId }: DeleteProjectsKanbanTaskRequestProps) =>
  request('DELETE', projectsUrl.projectsKanbanTaskDelete({ projectId, taskId }));

export const postProjectsKanbanTaskChange = ({
  projectId,
  originalLaneId,
  originalTaskIndex,
  changeLaneId,
  changeTaskIndex,
}: PostProjectsKanbanTaskChangeRequestProps) =>
  request(
    'POST',
    projectsUrl.projectsKanbanTaskChange({
      projectId,
      originalLaneId,
      originalTaskIndex,
      changeLaneId,
      changeTaskIndex,
    }),
  );

// 칸반 테스크 찜하기
export const postProjectsKanbanTaskLike = ({ projectId, taskId }: PostProjectsKanbanTaskLikeRequestProps) =>
  request('POST', projectsUrl.projectsKanbanTaskLike({ projectId, taskId }));

export const deleteProjectsKanbanTaskLike = ({ projectId, taskId }: PostProjectsKanbanTaskLikeRequestProps) =>
  request('DELETE', projectsUrl.projectsKanbanTaskLike({ projectId, taskId }));
