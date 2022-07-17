import React from 'react';
import { Story } from '@storybook/react';

import CrewManagementBox, { CrewManagementBoxProps } from '.';

export default {
  component: CrewManagementBox,
  title: 'project/CrewManagementBox',
};

const Template: Story<CrewManagementBoxProps> = (args: CrewManagementBoxProps) => <CrewManagementBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  captain: { id: 1, nickname: 'jun5e00' },
  crews: [
    { id: 2, username: 'test1', nickname: 'test1', profileImageUrl: '' },
    { id: 3, username: 'test2', nickname: 'test2', profileImageUrl: '' },
    { id: 4, username: 'test3', nickname: 'test3', profileImageUrl: '' },
    { id: 5, username: 'test4', nickname: 'test4', profileImageUrl: '' },
  ],
};
