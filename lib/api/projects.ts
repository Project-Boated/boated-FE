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
  PostProjectsInviteStatusRequestProps,
  GetProjectKanbanResponse,
  ProjectsIdProps,
  PostProjectsKanbanRequestProps,
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
  projectsInvitesAccept: ({ id }: PostProjectsInviteStatusRequestProps) => `/api/account/invitations/${id}/accept`,
  projectsInvitesReject: ({ id }: PostProjectsInviteStatusRequestProps) => `/api/account/invitations/${id}/reject`,

  projectsKanban: ({ id }: ProjectsIdProps) => `${projectsBaseUrl}/${id}/kanban`,
  projectsKanbanLane: ({ id }: ProjectsIdProps) => `${projectsBaseUrl}/${id}/kanban/lanes`,
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

export const postProjectsInviteAccept = ({ id }: PostProjectsInviteStatusRequestProps) =>
  request('POST', projectsUrl.projectsInvitesAccept({ id }));

export const postProjectsInviteReject = ({ id }: PostProjectsInviteStatusRequestProps) =>
  request('POST', projectsUrl.projectsInvitesReject({ id }));

// 프로젝트 칸반 불러오기, lane 추가, 삭제
export const getProjectsKanban = ({ id }: ProjectsIdProps) =>
  request<GetProjectKanbanResponse>('GET', projectsUrl.projectsKanban({ id })).then((res) => res.data.lanes);

export const postProjectsKanbanLane = ({ id, name }: PostProjectsKanbanRequestProps) =>
  request('POST', projectsUrl.projectsKanbanLane({ id }), { name });

export const deleteProjectsKanbanLane = ({ id }: ProjectsIdProps) =>
  request('DELETE', projectsUrl.projectsKanbanLane({ id }));
