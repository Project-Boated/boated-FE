import React from 'react';
import { Story } from '@storybook/react';

import NicknameInput, { NicknameInputProps } from '@/components/user/NicknameInput';

export default {
  component: NicknameInput,
  title: 'user/NicknameInput',
};

const Template: Story<NicknameInputProps> = (args: NicknameInputProps) => <NicknameInput {...args} />;

export const Default = Template.bind({});
