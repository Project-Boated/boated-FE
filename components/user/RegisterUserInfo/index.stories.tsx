import React from 'react';

import { Story } from '@storybook/react';

import RegisterUserInfo from '@/components/user/RegisterUserInfo';

export default {
  component: RegisterUserInfo,
  title: 'user/RegisterUserInfo',
};

const Template: Story = () => <RegisterUserInfo />;

export const Default = Template.bind({});
