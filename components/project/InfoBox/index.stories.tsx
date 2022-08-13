import React from 'react';
import { Story } from '@storybook/react';

import InfoBox, { InfoBoxProps } from '@/components/project/InfoBox';

export default {
  component: InfoBox,
  title: 'project/InfoBox',
};

const Template: Story<InfoBoxProps> = (args: InfoBoxProps) => <InfoBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '프로젝트 이름',
  deadline: '2022-07-16 17:17:17',
  description: '프로젝트 설명',
};
