import React from 'react';

import { Story } from '@storybook/react';

import Theme from '@/styles/Theme';

import ProjectProgressBar, { ProjectProgressBarProps } from '.';


export default {
  component: ProjectProgressBar,
  title: 'ganttChart/ProjectProgressBar',
};

const Template: Story<ProjectProgressBarProps> = (args: ProjectProgressBarProps) => <ProjectProgressBar {...args} />;

export const P_1 = Template.bind({});
P_1.args = {
  period: 5,
  backgroundColor: Theme.P_1,
};

export const P_2 = Template.bind({});
P_2.args = {
  period: 5,
  backgroundColor: Theme.P_2,
};

export const M_2 = Template.bind({});
M_2.args = {
  period: 5,
  backgroundColor: Theme.P_2,
};
