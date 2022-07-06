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

export const getProjectsInvite = () =>
  request<GetProjectsInvitesResponse>('GET', projectsUrl.projectsInvites).then((res) => res.data.invitations);

export const postProjectsInviteAccept = ({ id }: PostProjectsInviteStatusRequestProps) =>
  request('POST', projectsUrl.projectsInvitesAccept({ id }));

export const postProjectsInviteReject = ({ id }: PostProjectsInviteStatusRequestProps) =>
  request('POST', projectsUrl.projectsInvitesReject({ id }));
