import client from '@/lib/api/client';
import { AxiosResponse } from 'axios';

import request from './request';

import {
  PostProjectRequestProps,
  PostProjectResponse,
  GetProjectMyProps,
  GetProjectsResponse,
  GetProjectMyResponse,
  GetProjectsInvitesResponse,
  GetProjectKanbanResponse,
  PostProjectsKanbanRequestProps,
  PostProjectsKanbanChangeRequestProps,
  PostProjectsKanbanTaskChangeProps,
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
  projectsInvitesAccept: (id: number) => `/api/account/invitations/${id}/accept`,
  projectsInvitesReject: (id: number) => `/api/account/invitations/${id}/reject`,

  projectsKanban: (id: number) => `${projectsBaseUrl}/${id}/kanban`,
  projectsKanbanLane: (id: number) => `${projectsBaseUrl}/${id}/kanban/lanes`,
  projectsKanbanLaneChange: ({ id, originalIndex, changeIndex }: PostProjectsKanbanChangeRequestProps) =>
    `${projectsBaseUrl}/${id}/kanban/lanes/change/${originalIndex}/${changeIndex}`,

  projectsKanbanTaskChange: ({ projectId, laneId, originalIndex, changeIndex }: PostProjectsKanbanTaskChangeProps) =>
    `${projectsBaseUrl}/${projectId}/kanban/lanes/${laneId}/tasks/change/${originalIndex}/${changeIndex}`,
};

export const createProject = ({ name, description, deadline }: PostProjectRequestProps) =>
  request<PostProjectResponse, PostProjectRequestProps>('POST', projectsUrl.projects, {
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

// 프로젝트 초대 확인, 승인, 거절
export const getProjectsInvite = () =>
  request<GetProjectsInvitesResponse>('GET', projectsUrl.projectsInvites).then((res) => res.data.invitations);

export const postProjectsInviteAccept = (id: number) => request('POST', projectsUrl.projectsInvitesAccept(id));

export const postProjectsInviteReject = (id: number) => request('POST', projectsUrl.projectsInvitesReject(id));

// 프로젝트 칸반 불러오기, lane 추가, 삭제
export const getProjectsKanban = (id: number) =>
  request<GetProjectKanbanResponse>('GET', projectsUrl.projectsKanban(id)).then((res) => res.data.lanes);

export const postProjectsKanbanLane = ({ id, name }: PostProjectsKanbanRequestProps) =>
  request('POST', projectsUrl.projectsKanbanLane(id), { name });

export const deleteProjectsKanbanLane = (id: number) => request('DELETE', projectsUrl.projectsKanbanLane(id));

export const postProjectsKanbanLaneChange = ({
  id,
  originalIndex,
  changeIndex,
}: PostProjectsKanbanChangeRequestProps) => {
  request('POST', projectsUrl.projectsKanbanLaneChange({ id, originalIndex, changeIndex }));
};

export const postProjectsTaskChange = ({
  projectId,
  laneId,
  originalIndex,
  changeIndex,
}: PostProjectsKanbanTaskChangeProps) =>
  request('POST', projectsUrl.projectsKanbanTaskChange({ projectId, laneId, originalIndex, changeIndex }));
