import React from 'react';
import { Story } from '@storybook/react';

import UserProfile, { UserProfileProps } from '@/components/user/UserProfile';

export default {
  component: UserProfile,
  title: 'user/UserProfile',
};

const Template: Story<UserProfileProps> = (args: UserProfileProps) => <UserProfile {...args} />;

export const Default = Template.bind({});
