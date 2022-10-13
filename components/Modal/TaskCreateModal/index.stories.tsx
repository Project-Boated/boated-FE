import React from 'react';

import { Story } from '@storybook/react';

import TaskCreateModal, { TaskCreateModalProps } from '.';

export default {
  component: TaskCreateModal,
  title: 'Modal/TaskCreateModal',
};

const Template: Story<TaskCreateModalProps> = (args: TaskCreateModalProps) => <TaskCreateModal {...args} />;

export const Default = Template.bind({});
