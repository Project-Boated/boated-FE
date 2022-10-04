import React from 'react';

import { Story } from '@storybook/react';

import UserProfile, { UserProfileProps } from '@/components/common/UserProfile';

export default {
  component: UserProfile,
  title: 'common/UserProfile',
};

const Template: Story<UserProfileProps> = (args: UserProfileProps) => <UserProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChangeProfile: true,
  imgObject: {
    imgSrc: '/imgs/defaultProfileImg.png',
  },
};
