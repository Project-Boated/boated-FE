import React from 'react';
import { Story } from '@storybook/react';

import CreateBox from '@/components/project/CreateBox';

export default {
  component: CreateBox,
  title: 'project/CreateBox',
};

const Template: Story = () => <CreateBox />;

export const Default = Template.bind({});
