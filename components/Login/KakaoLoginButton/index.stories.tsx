import React from 'react';

import { Story } from '@storybook/react';

import KakaoLoginButton from '@/components/Login/KakaoLoginButton';

export default {
  component: KakaoLoginButton,
  title: 'Login/KakaoLoginButton',
};

const Template: Story = () => <KakaoLoginButton />;

export const Default = Template.bind({});
