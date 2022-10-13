import React from 'react';

import { Story } from '@storybook/react';

import Text from '@/components/atoms/Text';

import SubInfo, { SubInfoProps } from '.';

export default {
  component: SubInfo,
  title: 'project/SubInfo',
};

const Template: Story<SubInfoProps> = (args: SubInfoProps) => <SubInfo {...args} />;

export const Task = Template.bind({});
Task.args = {
  children: <Text fontSize={14}>총 Task 개수 : (총 12 개)</Text>,
};

export const File = Template.bind({});
File.args = {
  children: <Text fontSize={14}>모든 파일 용량 : 100MB</Text>,
};
