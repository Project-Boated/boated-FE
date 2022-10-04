import React from 'react';

import { Story } from '@storybook/react';

import LoginBox from '@/components/Login/LoginBox';

export default {
  component: LoginBox,
  title: 'Login/LoginBox',
};

const Template: Story = () => <LoginBox />;

export const Default = Template.bind({});
