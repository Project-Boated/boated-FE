import client from '@/lib/api/client';

import request from './request';

import { ProjectCreateRequestProps, ProjectCreateResponse } from './types';

const projectsBaseUrl = '/api/projects';

const projectsUrl = {
  projects: projectsBaseUrl,
};

export const createProject = ({ name, description, deadline }: ProjectCreateRequestProps) =>
  request<ProjectCreateResponse, ProjectCreateRequestProps>('POST', projectsUrl.projects, {
    name,
    description,
    deadline,
  });
