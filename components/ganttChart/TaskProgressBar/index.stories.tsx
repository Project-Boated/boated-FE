import React from 'react';

import { Story } from '@storybook/react';

import TaskProgressBar, { TaskProgressBarProps } from '.';

export default {
  component: TaskProgressBar,
  title: 'ganttChart/TaskProgressBar',
};

const Template: Story<TaskProgressBarProps> = (args: TaskProgressBarProps) => <TaskProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  period: 5,
};
