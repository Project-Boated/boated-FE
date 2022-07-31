import React from 'react';
import { Story } from '@storybook/react';

import TaskDetailModal from '.';

export default {
  component: TaskDetailModal,
  title: 'task/TaskDetailModal',
};

const Template = () => <TaskDetailModal />;

export const Default = Template.bind({});
