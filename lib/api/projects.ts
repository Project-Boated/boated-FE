import client from '@/lib/api/client';

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
  PutProjectsKanbanNameRequestProps,
  PostProjectsKanbanChangeRequestProps,
  PostProjectsKanbanTaskCreateProps,
  PostProjectsKanbanTaskChangeRequestProps,
  PostProjectsKanbanTaskLikeRequestProps,
  DeleteProjectsKanbanRequestProps,
  DeleteProjectsKanbanTaskRequestProps,
  PutProjectsVieoRequestProps,
  PutProjectsVideoDescriptionRequestProps,
  GetProjectsVideoDescriptionResponse,
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
  projectsKanbanLaneAdd: (projectId: number) => `${projectsBaseUrl}/${projectId}/kanban/lanes`,
  projectsKanbanLaneNameChange: ({ projectId, kanbanLaneId }: Omit<PutProjectsKanbanNameRequestProps, 'name'>) =>
    `${projectsBaseUrl}/${projectId}/kanban/lanes/${kanbanLaneId}`,
  projectsKanbanLaneDelete: ({ projectId, kanbanLaneId }: DeleteProjectsKanbanRequestProps) =>
    `${projectsBaseUrl}/${projectId}/kanban/lanes/${kanbanLaneId}`,
  projectsKanbanLaneChange: ({ projectId, originalIndex, changeIndex }: PostProjectsKanbanChangeRequestProps) =>
    `${projectsBaseUrl}/${projectId}/kanban/lanes/change/${originalIndex}/${changeIndex}`,

  projectsKanbanTaskCreate: (projectId: number) => `${projectsBaseUrl}/${projectId}/kanban/lanes/tasks`,
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

  projectsVideoUpload: (projectId: number) => `${projectsBaseUrl}/${projectId}/video`,
  projectsVideoDescriptionUpload: (projectId: number) => `${projectsBaseUrl}/${projectId}/video/description`,
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

export const postProjectsKanbanLane = ({ projectId, name }: Omit<PutProjectsKanbanNameRequestProps, 'kanbanLaneId'>) =>
  request('POST', projectsUrl.projectsKanbanLaneAdd(projectId), { name });

export const putProjectsKanbanLaneName = ({ projectId, kanbanLaneId, name }: PutProjectsKanbanNameRequestProps) =>
  request('PUT', projectsUrl.projectsKanbanLaneNameChange({ projectId, kanbanLaneId }), { name });

export const deleteProjectsKanbanLane = ({ projectId, kanbanLaneId }: DeleteProjectsKanbanRequestProps) =>
  request('DELETE', projectsUrl.projectsKanbanLaneDelete({ projectId, kanbanLaneId }));

export const postProjectsKanbanLaneChange = ({
  projectId,
  originalIndex,
  changeIndex,
}: PostProjectsKanbanChangeRequestProps) =>
  request('POST', projectsUrl.projectsKanbanLaneChange({ projectId, originalIndex, changeIndex }));

export const postProjectsKanbanTask = ({ projectId, name, description, deadline }: PostProjectsKanbanTaskCreateProps) =>
  request<Id, Omit<PostProjectsKanbanTaskCreateProps, 'projectId'>>(
    'POST',
    projectsUrl.projectsKanbanTaskCreate(projectId),
    { name, description, deadline },
  ).then((res) => res.data);

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

// 프로젝트 비디오

export const putProjectsVideo = ({ videoFormData, projectId }: PutProjectsVieoRequestProps) =>
  request('PUT', projectsUrl.projectsVideoUpload(projectId), videoFormData);

export const putProjectsVideoDescription = ({ projectId, description }: PutProjectsVideoDescriptionRequestProps) =>
  request('PUT', projectsUrl.projectsVideoDescriptionUpload(projectId), { description });

export const getProjectsVideoDescription = (projectId: number) =>
  request<GetProjectsVideoDescriptionResponse>('GET', projectsUrl.projectsVideoDescriptionUpload(projectId)).then(
    (res) => res.data,
  );

// response Header에 접근하기 위해  request 대신 client 사용
export const getProjectsVideo = (projectId: number) =>
  client.get(projectsUrl.projectsVideoUpload(projectId)).then((res) => res);

export const deleteProjectsVideo = (projectId: number) => request('DELETE', projectsUrl.projectsVideoUpload(projectId));
