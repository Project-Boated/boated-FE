import React from 'react';
import { Story } from '@storybook/react';

import ProjectItem from '.';

import { ProjectInfoState } from '@/lib/api/types';

export default {
  component: ProjectItem,
  title: 'project/ProjectItem',
};

const Template: Story<ProjectInfoState> = (args: ProjectInfoState) => <ProjectItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '프로젝트 1',
  description: '~~~~~~',
  dday: 10,
  totalDay: 20,
  captain: {
    id: 3,
    nickname: '윤준서',
  },
  crews: [
    { id: 2, nickname: '팀원1' },
    { id: 3, nickname: '팀원2' },
    { id: 3, nickname: '팀원3' },
    { id: 4, nickname: '팀원4' },
  ],
};
