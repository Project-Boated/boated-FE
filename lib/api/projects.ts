import client from '@/lib/api/client';
import { AxiosResponse } from 'axios';

import request from './request';

import {
  PostProjectRequestProps,
  PostProjectResponse,
  GetProjectMyProps,
  GetProjectsResponse,
  GetProjectMyResponse,
} from './types';

const projectsBaseUrl = '/api/projects';

const projectsUrl = {
  projects: projectsBaseUrl,
  projectsMy: `${projectsBaseUrl}/my`,
  projectsMyCaptain: `${projectsBaseUrl}/my/captain`,
  projectsMyCaptainTerminated: `${projectsBaseUrl}/my/captain/terminated`,
  projectsMyCrew: `${projectsBaseUrl}/my/crew`,
  projectsMyCrewTerminated: `${projectsBaseUrl}/my/crew/terminated`,
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
