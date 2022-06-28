import React from 'react';
import { Story } from '@storybook/react';

import NicknameInput, { NicknameInputProps } from '@/components/common/NicknameInput';

export default {
  component: NicknameInput,
  title: 'common/NicknameInput',
};

const Template: Story<NicknameInputProps> = (args: NicknameInputProps) => <NicknameInput {...args} />;

export const Default = Template.bind({});
