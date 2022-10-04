import React from 'react';

import { Story } from '@storybook/react';

import ChangeUserInfo from '@/components/user/ChangeUserInfo';

export default {
  component: ChangeUserInfo,
  title: 'user/ChangeUserInfo',
};

const Template: Story = () => <ChangeUserInfo />;

export const Default = Template.bind({});
